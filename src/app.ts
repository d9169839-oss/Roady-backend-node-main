import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {rateLimit} from 'express-rate-limit';
import pinoHttp from 'pino-http';
import {env} from './config/env.js';
import {SearchNearbyProviders} from './application/search-nearby-providers.js';
import {FixtureProviderSource} from './infrastructure/sources/fixture-provider-source.js';
import {logger} from './infrastructure/logging/logger.js';
import {healthRouter} from './presentation/http/routes/health.routes.js';
import {createProvidersRouter} from './presentation/http/routes/providers.routes.js';
import {errorHandler} from './presentation/http/middleware/error-handler.js';

export function createApp(){
 const app=express();
 app.disable('x-powered-by');
 app.use(helmet());
 app.use(cors({origin:env.CORS_ORIGIN==='*'?'*':env.CORS_ORIGIN.split(',').map(value=>value.trim())}));
 app.use(express.json({limit:'32kb'}));
 app.use(pinoHttp({logger}));
 app.use('/v1',rateLimit({windowMs:env.RATE_LIMIT_WINDOW_MS,limit:env.RATE_LIMIT_MAX,standardHeaders:'draft-8',legacyHeaders:false}));
 const sources=env.USE_FIXTURES?[new FixtureProviderSource()]:[];
 const searchNearby=new SearchNearbyProviders(sources);
 app.get('/',(_request,response)=>response.json({service:'roadhelp-backend',apiVersion:'v1'}));
 app.use('/v1/health',healthRouter);
 app.use('/v1/providers',createProvidersRouter(searchNearby));
 app.use((_request,response)=>response.status(404).json({error:{code:'NOT_FOUND',message:'Route not found.'}}));
 app.use(errorHandler);
 return app;
}
