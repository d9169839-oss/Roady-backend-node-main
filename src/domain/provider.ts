export const PROVIDER_CATEGORIES=['tow','tyre','mechanic','battery','fuel'] as const;
export type ProviderCategory=(typeof PROVIDER_CATEGORIES)[number];
export type ProviderSource='roadhelp'|'google_places'|'openstreetmap'|'demo';
export interface Coordinates { latitude:number; longitude:number }
export interface RoadsideProvider {
 id:string; name:string; category:ProviderCategory; location:Coordinates;
 address:string|null; phone:string|null; source:ProviderSource;
 sourcePlaceId?:string; isDemo:boolean;
}
export interface NearbyProvider extends RoadsideProvider { distanceMeters:number }
