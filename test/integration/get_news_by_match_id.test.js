const request = require('supertest');
const { app } = require('../../index');

jest.mock('../../src/lib/mysql', () => {
  return {
    query: jest.fn()
  };
});

const mysql = require('../../src/lib/mysql');

describe('Get News By Match ID Endpoint Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should retrieve news by match id', async () => {
    const matchId = 1;
    const mockNewsData = [
      {
        title: 'News Title 1',
        description: 'News Description 1',
        matchName: 'Match Name 1',
        tourName: 'Tour Name 1'
      },
    ];

    mysql.query.mockResolvedValue(mockNewsData);

    const response = await request(server)
      .get(`/news/get_by_match_id?matchId=${matchId}`)
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockNewsData);
  });
});
