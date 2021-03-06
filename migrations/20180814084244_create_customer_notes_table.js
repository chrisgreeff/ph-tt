// This file creates the `customer_notes` table.

exports.up = function (knex) {
  return knex.schema.createTable('customer_notes', function (t) {
    t.string('id').primary().unique()
    t.string('customerId').notNullable()
    t.foreign('customerId').references('customers.id')
    t.string('content').notNullable()
    t.timestamps(false, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('customer_notes')
}
