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

// Runnable end-to-end example: D18 Keycloak bearer login -> list surveys over the gRPC channel.
//
//   npx tsc examples/runListSurveys.ts ... && node examples/runListSurveys.js
//
// All configuration is read from examples/environment.env (loaded via dotenv, path resolved relative
// to this script so the working directory does not matter) using the canonical ONDEWO env-var scheme.
// This file is intentionally excluded from the mock test build (it needs a live Keycloak + Survey
// server); the request/response logic it delegates to is covered by listSurveysExample.spec.ts.

import * as fs from 'node:fs';
import * as path from 'node:path';

import * as dotenv from 'dotenv';
import * as grpc from '@grpc/grpc-js';

import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import { Survey } from '../api/ondewo/survey/survey_pb';
import { runListSurveysExample } from './listSurveysExample';

// Load examples/environment.env relative to this script (cwd-independent).
dotenv.config({ path: path.join(__dirname, 'environment.env') });

/**
 * Parse a boolean-ish env var: everything except a literal (case-insensitive) `false` is `true`.
 *
 * @param rawValue - The raw environment value, or `undefined` when unset.
 * @param defaultValue - The value to use when the var is unset.
 * @returns The parsed boolean.
 */
function parseBooleanEnv(rawValue: string | undefined, defaultValue: boolean): boolean {
	if (rawValue === undefined || rawValue.length === 0) {
		return defaultValue;
	}
	return rawValue.toLowerCase() !== 'false';
}

/**
 * Build the gRPC channel credentials from the canonical secure-channel env vars.
 *
 * @returns TLS credentials (optionally pinned to `ONDEWO_GRPC_CERT`) when `ONDEWO_USE_SECURE_CHANNEL`
 *   is not `false`, otherwise insecure/plaintext credentials.
 */
function buildChannelCredentials(): grpc.ChannelCredentials {
	const useSecureChannel: boolean = parseBooleanEnv(process.env.ONDEWO_USE_SECURE_CHANNEL, true);
	if (!useSecureChannel) {
		console.log('Using an INSECURE (plaintext) gRPC channel.');
		return grpc.credentials.createInsecure();
	}
	const certPath: string = process.env.ONDEWO_GRPC_CERT ?? '';
	if (certPath.length > 0) {
		console.log(`Using a TLS gRPC channel pinned to root cert "${certPath}".`);
		const rootCert: Buffer = fs.readFileSync(certPath);
		return grpc.credentials.createSsl(rootCert);
	}
	console.log('Using a TLS gRPC channel with system root certificates.');
	return grpc.credentials.createSsl();
}

/**
 * Log in against Keycloak, list the surveys with the resulting bearer token, and print them.
 *
 * @returns A promise that resolves once the surveys have been listed and printed.
 */
async function main(): Promise<void> {
	const keycloakUrl: string = process.env.KEYCLOAK_URL ?? 'https://auth.ondewo.com/auth';
	const realm: string = process.env.KEYCLOAK_REALM ?? 'ondewo-ccai-platform';
	const clientId: string = process.env.KEYCLOAK_CLIENT_ID ?? 'ondewo-survey-cai-sdk-public';
	const userName: string = process.env.KEYCLOAK_USER_NAME ?? '';
	const password: string = process.env.KEYCLOAK_PASSWORD ?? '';
	const keycloakVerifySsl: boolean = parseBooleanEnv(process.env.KEYCLOAK_VERIFY_SSL, true);

	const host: string = process.env.ONDEWO_HOST ?? 'localhost';
	const port: string = process.env.ONDEWO_PORT ?? '50055';
	const grpcEndpoint: string = `${host}:${port}`;
	const pageToken: string = process.env.ONDEWO_SURVEY_PAGE_TOKEN ?? 'page_size-10000';

	console.log(`START: listing surveys from ${grpcEndpoint} (Keycloak realm "${realm}" at ${keycloakUrl}).`);

	// 1) D18 headless auth: ROPC + offline_access login against the PUBLIC SDK Keycloak client.
	const provider: OfflineTokenProvider = await login({
		keycloakUrl,
		realm,
		clientId,
		username: userName,
		password,
		keycloakVerifySsl
	});
	console.log(`Keycloak login succeeded for user "${userName}"; obtained a bearer access token.`);

	try {
		// 2) Attach the bearer token as `Authorization` gRPC metadata and list surveys.
		const surveys: Survey[] = await runListSurveysExample({
			grpcHost: grpcEndpoint,
			authorizationHeader: provider.getAuthorizationHeader(),
			pageToken,
			channelCredentials: buildChannelCredentials()
		});

		// 3) Handle the response.
		console.log(`DONE: listed ${surveys.length} survey(s):`);
		for (const survey of surveys) {
			console.log(`  ${survey.getSurveyId()}: ${survey.getDisplayName()}`);
		}
	} finally {
		provider.stop();
	}
}

if (require.main === module) {
	main().catch((error: unknown): void => {
		if (error instanceof Error) {
			const serviceError: grpc.ServiceError = error as grpc.ServiceError;
			const grpcContext: string =
				typeof serviceError.code === 'number'
					? ` (gRPC code ${serviceError.code}, details: ${serviceError.details})`
					: '';
			console.error(`FAILED: listing surveys failed${grpcContext}: ${error.message}`);
		} else {
			console.error('FAILED: listing surveys failed with a non-Error value:', error);
		}
		process.exit(1);
	});
}
