const { table } = require("../connection");

exports.up = function(knex) {
return knex.schema.createTable('departments', (table) => {
    table.increments('department_id').primary();
    table.string('department_name');
    table.integer('employee_id').unsigned().defaultTo(null);
    table
    .foreign('employee_id')
    .references('employee_id')
    .inTable('employees')
    table.timestamps(true,true)

})
};

exports.down = function(knex) {
    return knex.schema.dropTable('departments');

};
