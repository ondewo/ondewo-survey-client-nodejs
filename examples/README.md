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
  surveys over the gRPC channel. All configuration is read from `environment.env` (loaded via `dotenv`).
- **`environment.env`** — a non-secret configuration template. Copy it, fill in your own values (Keycloak
  user / password, endpoint), and the runnable example loads it automatically.
- **`listSurveysExample.spec.ts`** — mock-based unit tests (Node's built-in `node:test`) that fake the
  gRPC client and assert the request/metadata built and the response handling. No network access.

## Authentication

Auth follows the current D18 Keycloak bearer flow. Obtain an access token via the offline-token provider
and pass it as the `Authorization` metadata header. Configuration comes from `environment.env` using the
canonical env-var scheme (`KEYCLOAK_URL`, `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_USER_NAME`,
`KEYCLOAK_PASSWORD`, `ONDEWO_HOST`, `ONDEWO_PORT`, …):

```ts
import * as path from 'node:path';
import * as dotenv from 'dotenv';
import { login } from '../auth/offlineTokenProvider';
import { runListSurveysExample } from './listSurveysExample';

dotenv.config({ path: path.join(__dirname, 'environment.env') });

const provider = await login({
	keycloakUrl: process.env.KEYCLOAK_URL ?? 'https://auth.ondewo.com/auth',
	realm: process.env.KEYCLOAK_REALM ?? 'ondewo-ccai-platform',
	clientId: process.env.KEYCLOAK_CLIENT_ID ?? 'ondewo-survey-cai-sdk-public',
	username: process.env.KEYCLOAK_USER_NAME ?? '',
	password: process.env.KEYCLOAK_PASSWORD ?? ''
});

const surveys = await runListSurveysExample({
	grpcHost: `${process.env.ONDEWO_HOST ?? 'localhost'}:${process.env.ONDEWO_PORT ?? '50055'}`,
	authorizationHeader: provider.getAuthorizationHeader()
});
```

## Running the tests

```shell
npm test
```

`npm test` compiles the examples with `tsc` and runs the mock spec with `node --test` (alongside the auth
provider tests).
