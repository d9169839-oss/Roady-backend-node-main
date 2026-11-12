import type {ErrorRequestHandler} from 'express';
import {ZodError} from 'zod';
import {logger} from '../../../infrastructure/logging/logger.js';
export const errorHandler:ErrorRequestHandler=(error,_request,response,_next)=>{
 if(error instanceof ZodError){
  response.status(400).json({error:{code:'VALIDATION_ERROR',message:'Request validation failed.',details:error.issues}});
  return;
 }
 logger.error({err:error},'Unhandled request error');
 response.status(500).json({error:{code:'INTERNAL_SERVER_ERROR',message:'An unexpected error occurred.'}});
};
