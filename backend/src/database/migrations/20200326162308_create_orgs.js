// Cria tabela e campos
exports.up = function(knex) {
  return knex.schema.createTable('orgs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// Exclui caso algo dê errado
exports.down = function(knex) {
  return knex.schema.dropTable('orgs');
};
