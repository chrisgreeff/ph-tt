// This file implements the database fetch functions.

import { forEach, filter } from 'lodash'
import { errorService } from 'services'
import { customerNoteGetters } from 'entities/customer-note'
import { knex } from 'db'

class CustomerGetterActions {
  async getCustomers () {
    try {
      const [ customers, notes ] = await Promise.all([
        knex('customers').select(),
        customerNoteGetters.getCustomerNotes()
      ])

      forEach(customers, (customer) => {
        customer.notes = filter(notes, { customerId: customer.id })
        customer.createdAt = customer.created_at
      })

      return customers
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

  async getCustomerById (id) {
    try {
      const [ customer ] = await knex('customers')
        .select()
        .where({ id })

      customer.notes = await customerNoteGetters.getCustomerNotesByCustomerId(id)
      customer.createdAt = customer.created_at

      return customer
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerGetterActions()
