# RoadHelp Backend

Node.js 24 + TypeScript backend for RoadHelp roadside-service discovery.

## Quick start
```bash
cp .env.example .env
npm install
npm run dev
```
API: `http://localhost:3000`

## Endpoints
- `GET /v1/health`
- `GET /v1/providers/nearby?latitude=33.6844&longitude=73.0479&radiusMeters=25000&category=all&limit=20`

Categories: `all`, `tow`, `tyre`, `mechanic`, `battery`, `fuel`. Default radius is 25 km; results are nearest-first. Local fixtures are synthetic only; response metadata exposes `demoData` and each provider has `isDemo: true`.

## Verification
```bash
npm run typecheck
npm test
npm run build
npm run lint
```

See `.env.example` for configuration. Google Places is disabled by default. Never put provider API keys in Android or commit them to Git.

Documentation: [Architecture](docs/ARCHITECTURE.md) · [Progress](docs/PROGRESS.md) · [Decisions](docs/QUESTIONS.md) · [OpenAPI](openapi/roadhelp-v1.yaml)
