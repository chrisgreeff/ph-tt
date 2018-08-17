import { uidService, errorService } from 'services'
import { knex } from 'db'
import customerNoteGetters from './getters'

class CustomerNoteCreatorActions {
  async createCustomerNote (input) {
    input.id = uidService.generate('not_')

    try {
      await knex('customer_notes')
        .insert(input)

      return customerNoteGetters.getCustomerNoteById(input.id)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerNoteCreatorActions()
