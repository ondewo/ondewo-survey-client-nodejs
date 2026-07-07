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

// Minimal, dependency-injectable example of listing surveys with the ONDEWO Survey NodeJS client.
//
// The auth story is the D18 Keycloak bearer flow: obtain an `Authorization: Bearer <access_token>`
// header from the offline-token provider (see ../auth/offlineTokenProvider) and attach it as gRPC
// call metadata. This module keeps the token acquisition out of scope (see ./runListSurveys.ts for
// the end-to-end wiring) so the request-building + response-handling logic is unit-testable with a
// mocked gRPC client and no live server.

import * as grpc from '@grpc/grpc-js';

import { SurveysClient } from '../api/ondewo/survey/survey_grpc_pb';
import { ListSurveysRequest, ListSurveysResponse, Survey } from '../api/ondewo/survey/survey_pb';

/**
 * The subset of the generated {@link SurveysClient} surface this example drives. A real
 * `SurveysClient` is structurally assignable to it, and tests can pass a lightweight mock.
 */
export interface SurveysListClient {
	/**
	 * List surveys, invoking `handler` with the gRPC error (or `null`) and the response.
	 *
	 * @param request - The list request carrying the page token.
	 * @param metadata - Call metadata; this example puts the `authorization` bearer header here.
	 * @param handler - Node-style callback receiving the `ServiceError | null` and the response.
	 */
	listSurveys(
		request: ListSurveysRequest,
		metadata: grpc.Metadata,
		handler: (error: grpc.ServiceError | null, response: ListSurveysResponse) => void
	): void;

	/** Close the underlying channel and release its resources. */
	close(): void;
}

/**
 * Build a {@link ListSurveysRequest}, attach the bearer `authorization` metadata header, and resolve
 * with the surveys the server returns.
 *
 * @param client - The (real or mocked) surveys client to call.
 * @param authorizationHeader - The `Authorization` header value, e.g. `Bearer <access_token>`.
 * @param pageToken - The list page token (empty string requests the first page).
 * @returns A promise resolving to the surveys in the response.
 */
export function fetchSurveys(
	client: SurveysListClient,
	authorizationHeader: string,
	pageToken: string
): Promise<Survey[]> {
	const request: ListSurveysRequest = new ListSurveysRequest();
	request.setPageToken(pageToken);

	const metadata: grpc.Metadata = new grpc.Metadata();
	metadata.add('Authorization', authorizationHeader);

	return new Promise<Survey[]>(
		(resolve: (surveys: Survey[]) => void, reject: (reason: grpc.ServiceError) => void): void => {
			client.listSurveys(request, metadata, (error: grpc.ServiceError | null, response: ListSurveysResponse): void => {
				if (error !== null) {
					reject(error);
					return;
				}
				resolve(response.getSurveysList());
			});
		}
	);
}

/** Options for {@link runListSurveysExample}. */
export interface ListSurveysExampleConfig {
	/** gRPC endpoint, e.g. `localhost:50055`. */
	grpcHost: string;
	/** The `Authorization` gRPC metadata header value, e.g. `Bearer <access_token>`. */
	authorizationHeader: string;
	/** List page token; defaults to the empty string (first page). */
	pageToken?: string;
	/** Channel credentials; defaults to TLS. Pass insecure creds for a local plaintext server. */
	channelCredentials?: grpc.ChannelCredentials;
	/** Client factory override (tests inject a mock); defaults to a real {@link SurveysClient}. */
	clientFactory?: (host: string, credentials: grpc.ChannelCredentials) => SurveysListClient;
}

/**
 * Construct a real {@link SurveysClient} bound to `host` with the given channel `credentials`.
 *
 * @param host - The gRPC endpoint to connect to.
 * @param credentials - The channel credentials (TLS or insecure).
 * @returns A live surveys client.
 */
function defaultClientFactory(host: string, credentials: grpc.ChannelCredentials): SurveysListClient {
	// The generated survey_grpc_pb.d.ts imports an untyped `grpc` module, so `SurveysClient`'s
	// inherited `close()` is invisible to the type checker; at runtime survey_grpc_pb.js builds a real
	// @grpc/grpc-js client. Bridge the untyped generated surface to the typed one used here.
	return new SurveysClient(host, credentials) as unknown as SurveysListClient;
}

/**
 * End-to-end example body: build a surveys client, list surveys with the supplied bearer header, and
 * close the client afterwards. Auth (the Keycloak login that produces `authorizationHeader`) is left
 * to the caller — see ./runListSurveys.ts.
 *
 * @param config - The endpoint, bearer header and optional credential / factory overrides.
 * @returns A promise resolving to the surveys returned by the server.
 */
export async function runListSurveysExample(config: ListSurveysExampleConfig): Promise<Survey[]> {
	const credentials: grpc.ChannelCredentials =
		config.channelCredentials !== undefined ? config.channelCredentials : grpc.credentials.createSsl();
	const clientFactory: (host: string, credentials: grpc.ChannelCredentials) => SurveysListClient =
		config.clientFactory !== undefined ? config.clientFactory : defaultClientFactory;
	const pageToken: string = config.pageToken !== undefined ? config.pageToken : '';

	const client: SurveysListClient = clientFactory(config.grpcHost, credentials);
	try {
		return await fetchSurveys(client, config.authorizationHeader, pageToken);
	} finally {
		client.close();
	}
}
