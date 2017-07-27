
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wine', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('type').notNullable()
    table.integer('year').notNullable()
    table.float('rating').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wine')
};
