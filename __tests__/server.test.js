'use strict';

const server = require('../server.js');
const supertest = require('supertest');
const request = supertest(server.server);

describe('server', ()=>{
  it('Should Get 404 Status', async ()=>{
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });

  it('Should Got A Welcome Message', async()=>{
    //aaa (arrange, act, assert)
    let route = '/';
    const response = await request.get(route);
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome To The Server ^_^');
  });
  it('Should Get An Error', async()=>{
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
});
