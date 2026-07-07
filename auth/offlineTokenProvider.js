"use strict";
// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineTokenProvider = exports.TokenError = void 0;
exports.login = login;
// D18 headless-SDK auth helper (keycloak-migration-plan §7.8 + D18).
//
// One-time ROPC login (grant_type=password, scope=offline_access) against the PUBLIC SDK client
// `ondewo-survey-cai-sdk-public` (no client_secret -- Q1), then a bounded background loop that refreshes
// the short-lived access token from the offline refresh token before it expires. The current access
// token is exposed for an `Authorization: Bearer <token>` gRPC metadata header. The refresh loop stops
// after `tokenExpirationInS` (if given) has elapsed since login.
/**
 * Seconds of head-room subtracted from a token's `expires_in` so the refresh fires before the access
 * token actually lapses (covers clock skew + the round-trip to Keycloak).
 */
const REFRESH_SKEW_IN_S = 30;
/** Lower bound for the scheduled refresh delay so a tiny/zero `expires_in` cannot spin a hot loop. */
const MIN_REFRESH_DELAY_IN_S = 1;
/** Error raised on any token-endpoint or token-shape failure. */
class TokenError extends Error {
    /**
     * Construct a {@link TokenError} carrying a human-readable diagnostic and a fixed `name`.
     *
     * @param message - Description of the token-endpoint or token-shape failure.
     */
    constructor(message) {
        super(message);
        this.name = 'TokenError';
    }
}
exports.TokenError = TokenError;
/**
 * Build the OIDC token endpoint URL for a realm, tolerating a trailing slash on `keycloakUrl` and an
 * optional `/auth` relative path already baked into it.
 *
 * @param keycloakUrl - Base Keycloak URL (any trailing slashes are stripped).
 * @param realm - Realm name; URL-encoded into the path.
 * @returns The fully-qualified `…/realms/<realm>/protocol/openid-connect/token` endpoint URL.
 */
function buildTokenEndpoint(keycloakUrl, realm) {
    const base = keycloakUrl.replace(/\/+$/, '');
    return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}
/**
 * POST an `application/x-www-form-urlencoded` body to the token endpoint and return the parsed JSON.
 *
 * @param tokenEndpoint - The fully-qualified token endpoint URL (see {@link buildTokenEndpoint}).
 * @param params - Form parameters to URL-encode into the request body (grant type, client id, …).
 * @param fetchImpl - The injectable fetch used to perform the POST.
 * @returns The parsed token response, guaranteed to carry a non-empty `access_token`.
 * @throws {@link TokenError} On a non-2xx response, a non-JSON body, or a body missing `access_token`.
 */
function postTokenRequest(tokenEndpoint, params, fetchImpl) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = new URLSearchParams(params).toString();
        const response = yield fetchImpl(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            },
            body
        });
        const text = yield response.text();
        if (!response.ok) {
            throw new TokenError(`Keycloak token endpoint returned HTTP ${response.status}: ${text}`);
        }
        let parsed;
        try {
            parsed = JSON.parse(text);
        }
        catch (_a) {
            throw new TokenError(`Keycloak token endpoint returned a non-JSON body: ${text}`);
        }
        if (typeof parsed.access_token !== 'string' || parsed.access_token.length === 0) {
            throw new TokenError('Keycloak token response did not contain an access_token');
        }
        return parsed;
    });
}
/**
 * Build the default fetch layer: delegate to the global `fetch` (Node >= 18).
 *
 * When `verifySsl` is `false`, a cached undici `Agent` with `rejectUnauthorized: false` is attached to
 * every request as its `dispatcher`, so the Keycloak token call skips TLS certificate verification
 * (opt-in insecure; Node-only). The dispatcher is built once here and reused for all requests this
 * transport makes; the secure default never loads undici.
 *
 * @param verifySsl - Whether to verify the Keycloak server's TLS certificate.
 * @returns A fetch layer bound to the chosen TLS-verification behaviour.
 */
function createDefaultFetch(verifySsl) {
    const globalFetch = globalThis.fetch;
    if (verifySsl) {
        return globalFetch;
    }
    // Lazy require keeps undici out of the default (secure) code path.
    const Agent = require('undici').Agent;
    const dispatcher = new Agent({ connect: { rejectUnauthorized: false } });
    return (url, init) => globalFetch(url, Object.assign({}, init, { dispatcher }));
}
/**
 * A live access-token holder backed by a bounded auto-refresh loop. Obtain one from {@link login};
 * read {@link getAuthorizationHeader} for the gRPC `Authorization` metadata and call {@link stop} when done.
 */
class OfflineTokenProvider {
    /**
     * Wire the immutable login configuration into a fresh, un-bootstrapped provider. No network call
     * is made here; tokens stay `null` until {@link bootstrap} runs.
     *
     * @param options - The D18 headless-SDK login options (endpoint, realm, client id, credentials and
     *   the optional `tokenExpirationInS` / `fetchImpl` / `nowInMs` overrides).
     */
    constructor(options) {
        this.tokenEndpoint = buildTokenEndpoint(options.keycloakUrl, options.realm);
        this.clientId = options.clientId;
        this.tokenExpirationInS = options.tokenExpirationInS;
        this.fetchImpl =
            options.fetchImpl !== undefined ? options.fetchImpl : createDefaultFetch(options.keycloakVerifySsl !== false);
        this.nowInMs = options.nowInMs !== undefined ? options.nowInMs : Date.now;
        this.accessToken = null;
        this.refreshToken = null;
        this.timer = null;
        this.stopped = false;
        this.deadlineInMs = null;
        this.onRefreshErrorHandler = null;
    }
    /**
     * Perform the one-time ROPC login and arm the first refresh. Awaited by {@link login}.
     *
     * @param username - The 2FA-exempt technical-user email used as the ROPC `username`.
     * @param password - The technical-user password used as the ROPC `password`.
     * @returns A promise that resolves once the initial access token is stored and the first refresh is armed.
     * @throws {@link TokenError} If the token endpoint fails, returns an unparseable / access_token-less body,
     *   or omits the offline `refresh_token` (the SDK client lacks `directAccessGrants` + `offline_access`).
     */
    bootstrap(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenResponse = yield postTokenRequest(this.tokenEndpoint, {
                grant_type: 'password',
                client_id: this.clientId,
                username,
                password,
                scope: 'offline_access'
            }, this.fetchImpl);
            this.accessToken = tokenResponse.access_token;
            this.refreshToken = typeof tokenResponse.refresh_token === 'string' ? tokenResponse.refresh_token : null;
            if (this.refreshToken === null) {
                throw new TokenError('Keycloak token response did not contain a refresh_token; the SDK client must have ' +
                    'directAccessGrants + the offline_access scope (ondewo-survey-cai-sdk-public)');
            }
            if (this.tokenExpirationInS !== undefined) {
                const expirationInMs = this.tokenExpirationInS * 1000;
                this.deadlineInMs = this.nowInMs() + expirationInMs;
            }
            this.scheduleRefresh(tokenResponse.expires_in);
        });
    }
    /**
     * Exchange the offline refresh token for a fresh access token and re-arm the next refresh. A no-op
     * once {@link stop} has run or the bounded {@link OfflineTokenLoginOptions.tokenExpirationInS} deadline
     * has elapsed.
     *
     * @returns A promise that resolves once the refreshed access token is stored and the next refresh is
     *   armed (or once the loop has lapsed).
     * @throws {@link TokenError} If the refresh token endpoint fails or returns an unparseable /
     *   access_token-less body.
     */
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            /* c8 ignore next 3 -- unreachable: stop() always clears the only timer that calls refresh() */
            if (this.stopped) {
                return;
            }
            // Re-check the bounded deadline at fire time (not just at schedule time): once it has elapsed the
            // loop stops with no further renewal -> the access token lapses -> re-login is required.
            if (this.deadlineInMs !== null && this.nowInMs() >= this.deadlineInMs) {
                this.stop();
                return;
            }
            const tokenResponse = yield postTokenRequest(this.tokenEndpoint, {
                grant_type: 'refresh_token',
                client_id: this.clientId,
                refresh_token: this.refreshToken
            }, this.fetchImpl);
            this.accessToken = tokenResponse.access_token;
            // Keycloak may rotate the offline refresh token; keep the newest one when present.
            if (typeof tokenResponse.refresh_token === 'string' && tokenResponse.refresh_token.length > 0) {
                this.refreshToken = tokenResponse.refresh_token;
            }
            this.scheduleRefresh(tokenResponse.expires_in);
        });
    }
    /**
     * Arm a single timer for the next refresh, clamped to the bounded deadline. Stops silently once
     * `tokenExpirationInS` has elapsed (no further renewal -> access lapses -> re-login required).
     *
     * @param expiresInRaw - The `expires_in` (seconds) reported by the latest token response, or
     *   `undefined` when the server omitted it. Non-positive / missing values clamp to
     *   `MIN_REFRESH_DELAY_IN_S` so the loop never spins hot.
     */
    scheduleRefresh(expiresInRaw) {
        if (this.stopped) {
            return;
        }
        const expiresInS = typeof expiresInRaw === 'number' && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
        let delayInS = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);
        if (this.deadlineInMs !== null) {
            const remainingInMs = this.deadlineInMs - this.nowInMs();
            if (remainingInMs <= 0) {
                this.stop();
                return;
            }
            delayInS = Math.min(delayInS, remainingInMs / 1000);
        }
        this.timer = setTimeout(() => {
            this.refresh().catch((refreshError) => {
                // Swallow a transient refresh failure but surface it so the caller can react; the next
                // gRPC call gets the stale (possibly expired) token and re-logs in on UNAUTHENTICATED.
                if (this.onRefreshErrorHandler !== null) {
                    this.onRefreshErrorHandler(refreshError);
                }
            });
        }, delayInS * 1000);
        // Do not keep the event loop alive solely for the refresh timer.
        /* c8 ignore next 3 -- the else branch is unreachable: Node's Timeout always exposes unref() */
        if (typeof this.timer.unref === 'function') {
            this.timer.unref();
        }
    }
    /**
     * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
     * Replaces any previously registered handler.
     *
     * @param handler - Callback receiving the (unknown) error thrown by a background refresh attempt.
     */
    onRefreshError(handler) {
        this.onRefreshErrorHandler = handler;
    }
    /**
     * The current access token, or `null` before {@link bootstrap} / after the bounded loop has lapsed.
     *
     * @returns The latest access token, or `null` when none is currently held.
     */
    getAccessToken() {
        return this.accessToken;
    }
    /**
     * The value for an `Authorization` gRPC metadata header: `Bearer <access_token>`.
     *
     * @returns The `Bearer <access_token>` header value built from the current access token.
     * @throws {@link TokenError} If no access token is available (login has not completed or has lapsed).
     */
    getAuthorizationHeader() {
        if (this.accessToken === null) {
            throw new TokenError('No access token available; login() has not completed or has lapsed');
        }
        return `Bearer ${this.accessToken}`;
    }
    /**
     * Stop the auto-refresh loop. Idempotent; safe to call from any state.
     *
     * @returns Nothing; clears any pending refresh timer and marks the provider stopped.
     */
    stop() {
        this.stopped = true;
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
exports.OfflineTokenProvider = OfflineTokenProvider;
/**
 * One-time ROPC + offline_access login against the PUBLIC SDK client, returning a live token provider
 * whose access token is auto-refreshed in the background until `tokenExpirationInS` elapses.
 *
 * @param options - The D18 headless-SDK login options; `keycloakUrl`, `realm`, `clientId`, `username`
 *   and `password` are required non-empty strings, the rest are optional overrides.
 * @returns A promise resolving to a bootstrapped {@link OfflineTokenProvider} with a live access token.
 * @throws {@link TokenError} If `options` is missing, a required option is absent / not a non-empty
 *   string, or the underlying {@link OfflineTokenProvider.bootstrap} fails.
 */
function login(options) {
    return __awaiter(this, void 0, void 0, function* () {
        if (options === undefined || options === null) {
            throw new TokenError('login() requires an options object');
        }
        const requiredKeys = ['keycloakUrl', 'realm', 'clientId', 'username', 'password'];
        for (const key of requiredKeys) {
            const value = options[key];
            if (typeof value !== 'string' || value.length === 0) {
                throw new TokenError(`login() option "${key}" is required and must be a non-empty string`);
            }
        }
        const provider = new OfflineTokenProvider(options);
        yield provider.bootstrap(options.username, options.password);
        return provider;
    });
}
