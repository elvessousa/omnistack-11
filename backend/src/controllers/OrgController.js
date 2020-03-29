const generateUniqueId = require('../utils/generateUniqueId');
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
    const id = generateUniqueId();

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