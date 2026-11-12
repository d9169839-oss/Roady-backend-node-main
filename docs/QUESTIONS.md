# Decisions needed before live provider integration

1. **Google budget:** What monthly spend ceiling and daily request cap should be enforced before enabling Google Places?
2. **Provider sources:** Launch with Google Places only, or Google Places plus a separately approved OpenStreetMap-based source?
3. **Database hosting:** Which managed PostgreSQL/PostGIS service should be used? No paid database has been provisioned.
4. **Deployment:** Confirm the Railway project/environment before connecting or deploying this repository.
5. **Android contract:** Does the Android client need additional provider fields beyond id, name, category, coordinates, address, phone, source, demo flag, and distance?

No answer is needed to run the fixture-backed API locally.
