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

// Runnable end-to-end example: D18 Keycloak bearer login -> list surveys over TLS.
//
//   npx tsc examples/runListSurveys.ts ... && node examples/runListSurveys.js
//
// Reads the endpoint + credentials from the environment. This file is intentionally excluded from the
// mock test build (it needs a live Keycloak + Survey server); the request/response logic it delegates
// to is covered by listSurveysExample.spec.ts.

import * as grpc from '@grpc/grpc-js';

import { login, OfflineTokenProvider } from '../auth/offlineTokenProvider';
import { Survey } from '../api/ondewo/survey/survey_pb';
import { runListSurveysExample } from './listSurveysExample';

/**
 * Log in against Keycloak, list the surveys with the resulting bearer token, and print them.
 *
 * @returns A promise that resolves once the surveys have been listed and printed.
 */
async function main(): Promise<void> {
	// 1) D18 headless auth: ROPC + offline_access login against the PUBLIC SDK Keycloak client.
	const provider: OfflineTokenProvider = await login({
		keycloakUrl: process.env.ONDEWO_KEYCLOAK_URL ?? 'https://auth.ondewo.com/auth',
		realm: process.env.ONDEWO_KEYCLOAK_REALM ?? 'ondewo-ccai-platform',
		clientId: process.env.ONDEWO_KEYCLOAK_CLIENT_ID ?? 'ondewo-survey-cai-sdk-public',
		username: process.env.ONDEWO_SURVEY_USER_NAME ?? '',
		password: process.env.ONDEWO_SURVEY_PASSWORD ?? ''
	});

	try {
		// 2) Attach the bearer token as `Authorization` gRPC metadata and list surveys over TLS.
		const surveys: Survey[] = await runListSurveysExample({
			grpcHost: process.env.ONDEWO_SURVEY_GRPC_HOST ?? 'localhost:50055',
			authorizationHeader: provider.getAuthorizationHeader(),
			pageToken: 'page_size-10000',
			channelCredentials: grpc.credentials.createSsl()
		});

		// 3) Handle the response.
		console.log(`Listed ${surveys.length} survey(s):`);
		for (const survey of surveys) {
			console.log(`  ${survey.getSurveyId()}: ${survey.getDisplayName()}`);
		}
	} finally {
		provider.stop();
	}
}

if (require.main === module) {
	main().catch((error: unknown): void => {
		console.error(error);
		process.exitCode = 1;
	});
}
