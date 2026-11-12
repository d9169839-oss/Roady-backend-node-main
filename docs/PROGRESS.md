# Development progress

## Backend foundation implemented
- [x] Strict TypeScript project scaffold
- [x] Express API, security headers, CORS, JSON body limit, request logging and rate limiting
- [x] Health endpoint
- [x] Nearby-provider endpoint and query validation
- [x] Five synthetic categories, distance calculation, radius filtering and nearest-first sorting
- [x] Provider-source abstraction and disabled Google Places adapter
- [x] OpenAPI v1 draft
- [x] API tests and GitHub Actions workflow
- [x] Dockerfile and environment template

## Remaining
- [ ] Run install, typecheck, tests, lint and build in a local/CI runtime
- [ ] Integrate the Android client against the agreed response contract
- [ ] Implement Google Places live requests after policy/billing/cost approval
- [ ] Add a production provider directory and PostGIS migrations
- [ ] Deploy and configure monitoring
- [ ] Add production-grade abuse controls and operational alerts

## Safe defaults
- `USE_FIXTURES=true`
- `GOOGLE_PLACES_ENABLED=false`
- Google daily request cap is zero
- No credentials are committed
- Every fixture is marked `isDemo: true`
