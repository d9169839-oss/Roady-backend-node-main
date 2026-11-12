import type {ProviderSource,NearbySearchCriteria} from '../../application/provider-source.js';
import type {RoadsideProvider} from '../../domain/provider.js';
// Synthetic local examples only. These are not real or verified service providers.
const DEMO_PROVIDERS:RoadsideProvider[]=[
 {id:'demo-tow-001',name:'Demo Towing Service',category:'tow',location:{latitude:33.6844,longitude:73.0479},address:'Demo location — Islamabad',phone:null,source:'demo',isDemo:true},
 {id:'demo-tyre-001',name:'Demo Tyre Assistance',category:'tyre',location:{latitude:33.6900,longitude:73.0550},address:'Demo location — Islamabad',phone:null,source:'demo',isDemo:true},
 {id:'demo-mechanic-001',name:'Demo Mobile Mechanic',category:'mechanic',location:{latitude:33.6750,longitude:73.0400},address:'Demo location — Islamabad',phone:null,source:'demo',isDemo:true},
 {id:'demo-battery-001',name:'Demo Battery Support',category:'battery',location:{latitude:33.7000,longitude:73.0600},address:'Demo location — Islamabad',phone:null,source:'demo',isDemo:true},
 {id:'demo-fuel-001',name:'Demo Fuel Delivery',category:'fuel',location:{latitude:33.6800,longitude:73.0300},address:'Demo location — Islamabad',phone:null,source:'demo',isDemo:true}
];
export class FixtureProviderSource implements ProviderSource {
 readonly sourceName='demo';
 async searchNearby(_criteria:NearbySearchCriteria):Promise<RoadsideProvider[]>{return DEMO_PROVIDERS;}
}
