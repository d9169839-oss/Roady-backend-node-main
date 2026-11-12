import 'dotenv/config';
import { z } from 'zod';
const schema=z.object({
 NODE_ENV:z.enum(['development','test','production']).default('development'),
 PORT:z.coerce.number().int().min(1).max(65535).default(3000),
 LOG_LEVEL:z.enum(['fatal','error','warn','info','debug','trace','silent']).default('info'),
 CORS_ORIGIN:z.string().default('*'),
 RATE_LIMIT_WINDOW_MS:z.coerce.number().int().positive().default(60000),
 RATE_LIMIT_MAX:z.coerce.number().int().positive().default(60),
 DEFAULT_SEARCH_RADIUS_METERS:z.coerce.number().int().positive().default(25000),
 MAX_SEARCH_RADIUS_METERS:z.coerce.number().int().positive().default(50000),
 USE_FIXTURES:z.stringbool().default(true),
 GOOGLE_PLACES_ENABLED:z.stringbool().default(false),
 GOOGLE_PLACES_API_KEY:z.string().optional().default(''),
 GOOGLE_PLACES_DAILY_REQUEST_CAP:z.coerce.number().int().nonnegative().default(0)
});
const parsed=schema.safeParse(process.env);
if(!parsed.success) throw new Error(`Invalid environment configuration: ${parsed.error.message}`);
export const env=parsed.data;
