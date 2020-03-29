const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ORG', () => {
  beforeEach( async() => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });

  it('shoulde be able to creat a new ORG', async () => {
    const response = await request(app)
      .post('/orgs')
      // .set('authorization') --- se tiver header
      .send({
        name: "Teste",
        email: "teum@corp.com",
        whatsapp: "91029102901",
        city: "Santos",
        uf: "SP"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
})