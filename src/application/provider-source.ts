import type {Coordinates,ProviderCategory,RoadsideProvider} from '../domain/provider.js';
export interface NearbySearchCriteria { location:Coordinates; radiusMeters:number; category:ProviderCategory|'all'; limit:number }
export interface ProviderSource { readonly sourceName:string; searchNearby(criteria:NearbySearchCriteria):Promise<RoadsideProvider[]> }
