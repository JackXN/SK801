
const employees = require('../fixtures/employees');



exports.seed = function (knex) {
  return knex
  .raw('TRUNCATE TABLE employees RESTART IDENTITY CASCADE')
  .then(function () {
    return knex('employees').insert(employees);
  })
}