const features = require('../fixtures/features');





exports.seed = function (knex) {
  return knex
  .raw("TRUNCATE TABLE features RESTART IDENTITY CASCADE")
  .then(function () {
    return knex('features').insert(features)
  })
}
