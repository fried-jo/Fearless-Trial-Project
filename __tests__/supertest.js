const request = require('supertest');
const localhost = 'http://localhost:3000';

describe('Route Integration', () => {

  describe('testing MVP item routes', () => {
    
    it('returns a status code 200 if server is connected', async () => {
      const res = await request(localhost).get('/items')
      expect(res.statusCode).toBe(200);
    });

    it('returns a status code 201 if item is created', async () => {
      const res = await request(localhost).post('/items?newName=Joey');
      expect(res.statusCode).toBe(201);
    });

    it('responds with the created item entry', async () => {
      const res = await request(localhost).post('/items?newName=Bob');
      expect(res.body).toEqual({"id": 2, "name": "Bob"});
    });

    it('responds with item entries', async () => {
      const res = await request(localhost).get('/items');
      expect(res.body.length).not.toEqual(0);
    });

    it('deletes all entries', async () => {
      await request(localhost).delete(`/items`);
      const res = await request(localhost).get('/items');
      expect(res.body.length).toEqual(0);
    });

  });

});