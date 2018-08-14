exports.up = function (knex) {
  return knex.schema.createTable('customers', function (t) {
    t.string('id').primary().unique()
    t.string('fullName').notNullable()
    t.string('email')
    t.string('phone')
    t.enum('status', ['prospective', 'current', 'non-active']).notNullable()
    t.timestamps(false, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('customers')
}
