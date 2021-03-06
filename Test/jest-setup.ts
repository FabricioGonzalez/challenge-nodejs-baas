import Server from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new Server();
  server.setupServer()
  global.testRequest = supertest(server.getApp());
});

