import type {NearbySearchCriteria,ProviderSource} from './provider-source.js';
import {distanceMeters} from '../domain/geo.js';
import type {NearbyProvider} from '../domain/provider.js';
export class SearchNearbyProviders {
 constructor(private readonly sources:ProviderSource[]){}
 async execute(criteria:NearbySearchCriteria):Promise<NearbyProvider[]>{
  const batches=await Promise.all(this.sources.map(source=>source.searchNearby(criteria)));
  const unique=new Map<string,NearbyProvider>();
  for(const provider of batches.flat()){
   const distance=distanceMeters(criteria.location,provider.location);
   if(distance>criteria.radiusMeters) continue;
   if(criteria.category!=='all'&&provider.category!==criteria.category) continue;
   const key=provider.sourcePlaceId?`${provider.sourceName}:${provider.sourcePlaceId}`:`${provider.sourceName}:${provider.id}`;
   if(!unique.has(key)) unique.set(key,{...provider,distanceMeters:Math.round(distance)});
  }
  return [...unique.values()].sort((a,b)=>a.distanceMeters-b.distanceMeters).slice(0,criteria.limit);
 }
}
