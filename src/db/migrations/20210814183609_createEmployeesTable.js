
exports.up = function(knex) {
  return knex.schema.createTable('employees', (table) => {
      table.increments('employee_id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('phone');
      table.string('title');
      table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('employees')
};
