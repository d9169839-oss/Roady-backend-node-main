import type {ProviderSource,NearbySearchCriteria} from '../../application/provider-source.js';
import type {RoadsideProvider} from '../../domain/provider.js';
/**
 * Deliberately not wired into the runtime yet.
 * Before implementation, approve billing/caps, request field masks, attribution,
 * permitted retention and the Android display flow against current Google terms.
 */
export class GooglePlacesProviderSource implements ProviderSource {
 readonly sourceName='google_places';
 async searchNearby(_criteria:NearbySearchCriteria):Promise<RoadsideProvider[]>{
  throw new Error('Google Places integration is not enabled in this release.');
 }
}
