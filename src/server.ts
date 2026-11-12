import {createApp} from './app.js';
import {env} from './config/env.js';
import {logger} from './infrastructure/logging/logger.js';
const app=createApp();
const server=app.listen(env.PORT,()=>logger.info({port:env.PORT,environment:env.NODE_ENV},'RoadHelp API listening'));
function shutdown(signal:string){
 logger.info({signal},'Graceful shutdown requested');
 server.close(error=>{
  if(error){logger.error({err:error},'HTTP server shutdown failed');process.exitCode=1;}
  process.exit();
 });
}
process.on('SIGTERM',()=>shutdown('SIGTERM'));
process.on('SIGINT',()=>shutdown('SIGINT'));
