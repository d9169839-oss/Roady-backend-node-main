import {describe,expect,it} from 'vitest';
import request from 'supertest';
import {createApp} from '../src/app.js';
describe('RoadHelp HTTP API',()=>{
 const app=createApp();
 it('returns healthy status',async()=>{
  const response=await request(app).get('/v1/health');
  expect(response.status).toBe(200);expect(response.body.status).toBe('ok');
 });
 it('returns demo providers ordered by distance',async()=>{
  const response=await request(app).get('/v1/providers/nearby').query({latitude:33.6844,longitude:73.0479});
  expect(response.status).toBe(200);expect(response.body.data).toHaveLength(5);expect(response.body.meta.demoData).toBe(true);
  const distances=response.body.data.map((p:{distanceMeters:number})=>p.distanceMeters);
  expect(distances).toEqual([...distances].sort((a,b)=>a-b));
 });
 it('filters by category',async()=>{
  const response=await request(app).get('/v1/providers/nearby').query({latitude:33.6844,longitude:73.0479,category:'tow'});
  expect(response.status).toBe(200);expect(response.body.data).toHaveLength(1);expect(response.body.data[0].category).toBe('tow');
 });
 it('rejects invalid coordinates',async()=>{
  const response=await request(app).get('/v1/providers/nearby').query({latitude:200,longitude:73});
  expect(response.status).toBe(400);expect(response.body.error.code).toBe('VALIDATION_ERROR');
 });
});
