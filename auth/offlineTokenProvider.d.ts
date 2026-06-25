/**
 * Minimal structural type of the fetch Response fields this helper reads. Keeps the module
 * self-contained (no DOM lib dependency) while still typing the injectable `fetchImpl`.
 */
export interface TokenFetchResponse {
    ok: boolean;
    status: number;
    text(): Promise<string>;
}
/** Init object passed to the injectable fetch. */
export interface TokenFetchInit {
    method: string;
    headers: Record<string, string>;
    body: string;
}
/** Injectable fetch signature (a subset of the global `fetch`) used by the token endpoint call. */
export type TokenFetch = (url: string, init: TokenFetchInit) => Promise<TokenFetchResponse>;
/** Options for the D18 headless-SDK offline-token login. */
export interface OfflineTokenLoginOptions {
    /** Base Keycloak URL, e.g. "https://auth.example.com/auth" (trailing slash tolerated). */
    keycloakUrl: string;
    /** Realm name, e.g. "ondewo-ccai-platform". */
    realm: string;
    /** Public SDK client id, e.g. "ondewo-survey-cai-sdk-public". NO client_secret (Q1). */
    clientId: string;
    /** 2FA-exempt technical-user email. */
    username: string;
    /** Technical-user password. */
    password: string;
    /** Optional cap (seconds) on how long the auto-refresh loop runs after login. */
    tokenExpirationInS?: number;
    /** Optional fetch override (tests inject a mock); defaults to the global fetch. */
    fetchImpl?: TokenFetch;
    /** Optional clock override returning epoch ms (tests); defaults to Date.now. */
    nowInMs?: () => number;
}
/** Error raised on any token-endpoint or token-shape failure. */
export declare class TokenError extends Error {
    /**
     * Construct a {@link TokenError} carrying a human-readable diagnostic and a fixed `name`.
     *
     * @param message - Description of the token-endpoint or token-shape failure.
     */
    constructor(message: string);
}
/**
 * A live access-token holder backed by a bounded auto-refresh loop. Obtain one from {@link login};
 * read {@link getAuthorizationHeader} for the gRPC `Authorization` metadata and call {@link stop} when done.
 */
export declare class OfflineTokenProvider {
    /** Fully-qualified OIDC token endpoint resolved once from the login options. */
    private readonly tokenEndpoint;
    /** Public SDK client id sent as `client_id` on every grant (no client_secret). */
    private readonly clientId;
    /** Optional cap (seconds) on how long the auto-refresh loop runs after login, or `undefined` for unbounded. */
    private readonly tokenExpirationInS;
    /** Injectable fetch used for every token-endpoint call (defaults to the global `fetch`). */
    private readonly fetchImpl;
    /** Injectable epoch-ms clock used for deadline checks (defaults to `Date.now`). */
    private readonly nowInMs;
    /** The current access token, or `null` before bootstrap / after the bounded loop has lapsed. */
    private accessToken;
    /** The current offline refresh token, or `null` before bootstrap. */
    private refreshToken;
    /** Handle of the single pending refresh timer, or `null` when none is armed. */
    private timer;
    /** Whether {@link stop} has been called; suppresses any further refresh scheduling. */
    private stopped;
    /** Epoch-ms deadline after which the loop lapses, or `null` when unbounded. */
    private deadlineInMs;
    /** Optional diagnostics callback for background-refresh failures, or `null` when unset. */
    private onRefreshErrorHandler;
    /**
     * Wire the immutable login configuration into a fresh, un-bootstrapped provider. No network call
     * is made here; tokens stay `null` until {@link bootstrap} runs.
     *
     * @param options - The D18 headless-SDK login options (endpoint, realm, client id, credentials and
     *   the optional `tokenExpirationInS` / `fetchImpl` / `nowInMs` overrides).
     */
    constructor(options: OfflineTokenLoginOptions);
    /**
     * Perform the one-time ROPC login and arm the first refresh. Awaited by {@link login}.
     *
     * @param username - The 2FA-exempt technical-user email used as the ROPC `username`.
     * @param password - The technical-user password used as the ROPC `password`.
     * @returns A promise that resolves once the initial access token is stored and the first refresh is armed.
     * @throws {@link TokenError} If the token endpoint fails, returns an unparseable / access_token-less body,
     *   or omits the offline `refresh_token` (the SDK client lacks `directAccessGrants` + `offline_access`).
     */
    bootstrap(username: string, password: string): Promise<void>;
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
    private refresh;
    /**
     * Arm a single timer for the next refresh, clamped to the bounded deadline. Stops silently once
     * `tokenExpirationInS` has elapsed (no further renewal -> access lapses -> re-login required).
     *
     * @param expiresInRaw - The `expires_in` (seconds) reported by the latest token response, or
     *   `undefined` when the server omitted it. Non-positive / missing values clamp to
     *   `MIN_REFRESH_DELAY_IN_S` so the loop never spins hot.
     */
    private scheduleRefresh;
    /**
     * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
     * Replaces any previously registered handler.
     *
     * @param handler - Callback receiving the (unknown) error thrown by a background refresh attempt.
     */
    onRefreshError(handler: (error: unknown) => void): void;
    /**
     * The current access token, or `null` before {@link bootstrap} / after the bounded loop has lapsed.
     *
     * @returns The latest access token, or `null` when none is currently held.
     */
    getAccessToken(): string | null;
    /**
     * The value for an `Authorization` gRPC metadata header: `Bearer <access_token>`.
     *
     * @returns The `Bearer <access_token>` header value built from the current access token.
     * @throws {@link TokenError} If no access token is available (login has not completed or has lapsed).
     */
    getAuthorizationHeader(): string;
    /**
     * Stop the auto-refresh loop. Idempotent; safe to call from any state.
     *
     * @returns Nothing; clears any pending refresh timer and marks the provider stopped.
     */
    stop(): void;
}
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
export declare function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider>;
