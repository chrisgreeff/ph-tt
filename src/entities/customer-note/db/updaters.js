// This file implements the customer note database update functions.
//
import { errorService } from 'services'
import { knex } from 'db'
import customerNoteGetters from './getters'

class CustomerNoteUpdaterActions {
  async updateCustomerNote (id, input) {
    try {
      await knex('customer_notes')
        .where({ id })
        .update(input)

      return customerNoteGetters.getCustomerNoteById(id)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerNoteUpdaterActions()
