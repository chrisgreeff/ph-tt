// This file implements the customer note database fetch functions.
//
import { forEach } from 'lodash'
import { errorService } from 'services'
import { knex } from 'db'

class CustomerNoteGetterActions {
  async getCustomerNotes () {
    try {
      const customerNotes = await knex('customer_notes')
        .select()

      forEach(customerNotes, (customerNote) => {
        customerNote.createdAt = customerNote.created_at
      })

      return customerNotes
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

  async getCustomerNoteById (id) {
    try {
      const [ customerNote ] = await knex('customer_notes')
        .select()
        .where({ id })

      customerNote.createdAt = customerNote.created_at

      return customerNote
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

  async getCustomerNotesByCustomerId (customerId) {
    try {
      const customerNotes = await knex('customer_notes')
        .select()
        .where({ customerId })

      forEach(customerNotes, (customerNote) => {
        customerNote.createdAt = customerNote.created_at
      })

      return customerNotes
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerNoteGetterActions()
