# Examples — `@ondewo/survey-client-nodejs`

Minimal, idiomatic usage of the ONDEWO Survey NodeJS gRPC client.

## Files

- **`listSurveysExample.ts`** — the reusable example logic:
  - `fetchSurveys(client, authorizationHeader, pageToken)` builds a `ListSurveysRequest`, attaches the
    `Authorization: Bearer <token>` gRPC metadata header, calls `listSurveys`, and resolves with the surveys.
  - `runListSurveysExample(config)` wires up a `SurveysClient` (over TLS by default) and runs `fetchSurveys`.
    The gRPC client is injectable so the logic is unit-testable without a live server.
- **`runListSurveys.ts`** — a runnable end-to-end entrypoint: it performs the D18 Keycloak
  `offline_access` login (see `../auth/offlineTokenProvider.ts`) to obtain the bearer token, then lists the
  surveys over TLS.
- **`listSurveysExample.spec.ts`** — mock-based unit tests (Node's built-in `node:test`) that fake the
  gRPC client and assert the request/metadata built and the response handling. No network access.

## Authentication

Auth follows the current D18 Keycloak bearer flow. Obtain an access token via the offline-token provider
and pass it as the `Authorization` metadata header:

```ts
import { login } from '../auth/offlineTokenProvider';
import { runListSurveysExample } from './listSurveysExample';

const provider = await login({
	keycloakUrl: 'https://auth.ondewo.com/auth',
	realm: 'ondewo-ccai-platform',
	clientId: 'ondewo-survey-cai-sdk-public',
	username: process.env.ONDEWO_SURVEY_USER_NAME ?? '',
	password: process.env.ONDEWO_SURVEY_PASSWORD ?? ''
});

const surveys = await runListSurveysExample({
	grpcHost: 'localhost:50055',
	authorizationHeader: provider.getAuthorizationHeader()
});
```

## Running the tests

```shell
npm test
```

`npm test` compiles the examples with `tsc` and runs the mock spec with `node --test` (alongside the auth
provider tests).
