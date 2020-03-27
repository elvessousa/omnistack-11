const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  // Show values
  async index(request, response) {
    const orgs = await connection('orgs').select('*');
    return response.json(orgs);
  },
  // Insert values
  async create(request, response) {
    const {
      name,
      email,
      whatsapp,
      city,
      uf
    } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('orgs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({
      id
    });
  }
};