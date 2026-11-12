import {Router} from 'express';
import type {SearchNearbyProviders} from '../../../application/search-nearby-providers.js';
import {nearbyQuerySchema} from '../schemas/nearby-query.schema.js';
export function createProvidersRouter(searchNearby:SearchNearbyProviders):Router{
 const router=Router();
 router.get('/nearby',async(request,response,next)=>{
  try{
   const query=nearbyQuerySchema.parse(request.query);
   const providers=await searchNearby.execute({
    location:{latitude:query.latitude,longitude:query.longitude},
    radiusMeters:query.radiusMeters,category:query.category,limit:query.limit
   });
   response.status(200).json({
    data:providers,
    meta:{count:providers.length,radiusMeters:query.radiusMeters,category:query.category,
     origin:{latitude:query.latitude,longitude:query.longitude},
     demoData:providers.some(provider=>provider.isDemo),generatedAt:new Date().toISOString()}
   });
  }catch(error){next(error);}
 });
 return router;
}
