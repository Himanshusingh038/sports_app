const request = require('supertest');
const { app } = require('../../index');

jest.mock('../../src/lib/mysql', () => {
  return {
    query: jest.fn()
  };
});

const mysql = require('../../src/lib/mysql');
describe('News Endpoint Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should create news and return success message', async () => {
    const newsData = {
      title: 'Test News Title',
      description: 'Test News Description'
    };
    const matchId = 1;
    const tourId = 1;
    mysql.query.mockResolvedValue({affectedRows:1});
    const response = await request(server)
      .post(`/news/create?matchId=${matchId}&tourId=${tourId}`)
      .send(newsData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201); 
    expect(response._body).toEqual({ message: 'News added successfully', status: true });
  });
});
