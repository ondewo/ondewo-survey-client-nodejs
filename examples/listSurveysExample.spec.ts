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

// Mock-based unit tests for listSurveysExample.ts. The gRPC surveys client is faked -- there is NO
// network access and NO live Survey server.
//   node --test .test-build/listSurveysExample.spec.js

import { test as runTestCase } from 'node:test';
import assert from 'node:assert/strict';

import * as grpc from '@grpc/grpc-js';

import { fetchSurveys, runListSurveysExample, type SurveysListClient } from './listSurveysExample';
import { ListSurveysRequest, ListSurveysResponse, Survey } from '../api/ondewo/survey/survey_pb';

/** One recorded invocation of the fake client's `listSurveys`. */
interface RecordedCall {
	/** The request the example built. */
	request: ListSurveysRequest;
	/** The metadata the example attached (carries the bearer `authorization` header). */
	metadata: grpc.Metadata;
}

/** A fake {@link SurveysListClient} that records calls and replays a canned survey list or error. */
class FakeSurveysClient implements SurveysListClient {
	/** Calls captured in invocation order for later assertions. */
	public readonly calls: RecordedCall[] = [];
	/** Whether {@link close} has been invoked. */
	public closed: boolean = false;
	/** Surveys returned on a successful call. */
	private readonly surveys: Survey[];
	/** Error to hand back to the callback, or `null` for success. */
	private readonly error: grpc.ServiceError | null;

	/**
	 * @param surveys - Surveys returned on a successful call.
	 * @param error - Error to hand back to the callback, or `null` for success.
	 */
	public constructor(surveys: Survey[], error: grpc.ServiceError | null) {
		this.surveys = surveys;
		this.error = error;
	}

	/**
	 * Record the call and invoke `handler` with the canned error/response.
	 *
	 * @param request - The list request the example built.
	 * @param metadata - The call metadata the example attached.
	 * @param handler - Node-style callback receiving the error and response.
	 */
	public listSurveys(
		request: ListSurveysRequest,
		metadata: grpc.Metadata,
		handler: (error: grpc.ServiceError | null, response: ListSurveysResponse) => void
	): void {
		this.calls.push({ request, metadata });
		const response: ListSurveysResponse = new ListSurveysResponse();
		response.setSurveysList(this.surveys);
		handler(this.error, response);
	}

	/** Mark the client closed. */
	public close(): void {
		this.closed = true;
	}
}

/**
 * Build a gRPC {@link grpc.ServiceError} for the failure-path tests.
 *
 * @param code - The gRPC status code to report.
 * @returns A ServiceError carrying `code`.
 */
function makeServiceError(code: grpc.status): grpc.ServiceError {
	return {
		name: 'ServiceError',
		message: `rpc failed with code ${code}`,
		code,
		details: 'rpc failed',
		metadata: new grpc.Metadata()
	};
}

runTestCase(
	'fetchSurveys sets the page token, attaches the bearer authorization header, and returns the surveys',
	async (): Promise<void> => {
		const surveyId: string = 'survey-42';
		const pageToken: string = 'page_size-10000';
		const authorizationHeader: string = 'Bearer test-access-token';

		const survey: Survey = new Survey();
		survey.setSurveyId(surveyId);
		const client: FakeSurveysClient = new FakeSurveysClient([survey], null);

		const surveys: Survey[] = await fetchSurveys(client, authorizationHeader, pageToken);

		assert.equal(client.calls.length, 1);
		assert.equal(client.calls[0].request.getPageToken(), pageToken);
		assert.deepEqual(client.calls[0].metadata.get('Authorization'), [authorizationHeader]);
		assert.equal(surveys.length, 1);
		assert.equal(surveys[0].getSurveyId(), surveyId);
	}
);

runTestCase('fetchSurveys rejects with the gRPC ServiceError when the call fails', async (): Promise<void> => {
	const serviceError: grpc.ServiceError = makeServiceError(grpc.status.UNAUTHENTICATED);
	const client: FakeSurveysClient = new FakeSurveysClient([], serviceError);

	await assert.rejects(fetchSurveys(client, 'Bearer test-access-token', ''), (thrown: unknown): boolean => {
		assert.equal((thrown as grpc.ServiceError).code, grpc.status.UNAUTHENTICATED);
		return true;
	});
});

runTestCase(
	'runListSurveysExample wires the client factory, forwards the bearer header, and closes the client',
	async (): Promise<void> => {
		const surveyId: string = 'agent-survey-1';
		const authorizationHeader: string = 'Bearer wiring-token';
		const grpcHost: string = 'localhost:50055';

		const survey: Survey = new Survey();
		survey.setSurveyId(surveyId);
		const client: FakeSurveysClient = new FakeSurveysClient([survey], null);

		let observedHost: string | null = null;
		const surveys: Survey[] = await runListSurveysExample({
			grpcHost,
			authorizationHeader,
			pageToken: '',
			channelCredentials: grpc.credentials.createInsecure(),
			clientFactory: (host: string, _credentials: grpc.ChannelCredentials): SurveysListClient => {
				observedHost = host;
				return client;
			}
		});

		assert.equal(observedHost, grpcHost);
		assert.equal(client.calls.length, 1);
		assert.deepEqual(client.calls[0].metadata.get('Authorization'), [authorizationHeader]);
		assert.equal(client.closed, true);
		assert.equal(surveys.length, 1);
		assert.equal(surveys[0].getSurveyId(), surveyId);
	}
);
