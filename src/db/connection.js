const env = process.env || 'development';
const config = require('../../knexfile')[env];
const knex = require('knex')('development');

module.exports = knex;