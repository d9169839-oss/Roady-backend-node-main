import type {Coordinates} from './provider.js';
const EARTH_RADIUS_METERS=6371000;
/** Great-circle distance between two WGS84 coordinates. */
export function distanceMeters(a:Coordinates,b:Coordinates):number {
 const rad=(n:number)=>(n*Math.PI)/180;
 const lat1=rad(a.latitude),lat2=rad(b.latitude),dLat=rad(b.latitude-a.latitude),dLon=rad(b.longitude-a.longitude);
 const h=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
 return 2*EARTH_RADIUS_METERS*Math.asin(Math.sqrt(h));
}
