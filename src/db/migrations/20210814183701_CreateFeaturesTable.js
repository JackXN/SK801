
exports.up = function(knex) {
  return knex.schema.createTable('features', (table) => {
      table.increments('feature_id').primary();
      table.string('feature_name');
      table.string('feature_description');
      table.string('platform');
      table.integer('employee_id').unsigned().defaultTo(null)
    table
    .foreign('employee_id')
    .references('employee_id')
    .inTable('employees')
    table.timestamps(true,true)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('features')
};
