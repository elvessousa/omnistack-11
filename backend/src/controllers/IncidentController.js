const connection = require('../database/connection');

module.exports = {
  // Show data
  async index(request, response) {
    const { page = 1 } = request.query;

    // Count total incidents
    const [count] = await connection('incidents').count();

    // Limit 5 per page
    const incidents = await connection('incidents')
      .join('orgs', 'orgs.id', '=', 'incidents.org_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'orgs.name',
        'orgs.email',
        'orgs.whatsapp',
        'orgs.city',
        'orgs.uf'
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },
  // Insert incident
  async create(request, response) {
    const { title, description, value } = request.body;
    const org_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      org_id
    })

    return response.json({ id });
  },
  async delete(request, response) {
    const { id } = request.params;
    const org_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('org_id')
      .first();

    // Return error if not authenticated
    if (incident.org_id !== org_id) {
      return response.status(401).json({ error: "Operation not permitted." })
    }

    // Delete
    await connection('incidents').where('id', id).delete();
    return response.status(204).send(); // No content status
  }
}