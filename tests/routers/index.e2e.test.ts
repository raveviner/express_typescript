import { Server } from 'http';
import request from 'supertest';
import TestUtils from '../TestUtils';

describe('Index Endpoints', () => {
    let server: Server;

    beforeAll(async () => {
        server = await TestUtils.createServer();
    });

    afterAll(async () => {
      server.close();
    })

    it('should create a get request', async (done) => {
        const res = await request(server).get('/api/v1/');
        expect(res.status).toBe(200);
        done();
    });
});
