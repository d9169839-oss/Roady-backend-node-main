# Backend architecture

RoadHelp is a roadside-service discovery and direct-contact product. It does not dispatch, book, negotiate, or guarantee provider availability.

## Request flow
`HTTP route -> Zod validation -> SearchNearbyProviders -> ProviderSource adapters -> radius filter/ranking -> JSON response`

The application layer depends on the `ProviderSource` port, not on Google, Postgres, or Express. Add data sources without changing the use case.

## Categories
- `tow`
- `tyre`
- `mechanic`
- `battery`
- `fuel`

`all` returns every category. Default radius is 25 km; API maximum is 50 km. Results are nearest-first.

## Data-source rules
- Fixture records are synthetic and must never be represented as real businesses.
- Google Places is disabled by default. Do not scrape Google Maps or persist restricted Places content.
- Before enabling Places, verify current terms, billing, field masks, attribution, permitted retention, and request caps.
- OpenStreetMap is not wired until a production provider and its usage policy are selected.
- A RoadHelp-owned PostGIS directory can store independently sourced/consented provider records.

## Runtime
The first release is a modular monolith with an in-memory fixture adapter. No Redis or database is required to run it. PostGIS and production source adapters are later infrastructure implementations.
