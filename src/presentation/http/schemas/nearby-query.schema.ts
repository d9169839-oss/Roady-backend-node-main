import {z} from 'zod';
import {PROVIDER_CATEGORIES} from '../../../domain/provider.js';
const coordinate=(min:number,max:number)=>z.coerce.number().finite().min(min).max(max);
export const nearbyQuerySchema=z.object({
 latitude:coordinate(-90,90),longitude:coordinate(-180,180),
 radiusMeters:z.coerce.number().int().positive().max(50000).default(25000),
 category:z.enum(['all',...PROVIDER_CATEGORIES]).default('all'),
 limit:z.coerce.number().int().min(1).max(50).default(20)
});
export type NearbyQuery=z.infer<typeof nearbyQuerySchema>;
