import { uidService, errorService } from 'services'
import { knex } from 'db'
import customerNoteGetters from './getters'

class CustomerNoteCreatorActions {
  /**
   * Creates a member entry.
   *
   * @method createCustomerNote
   * @param {Object} input
   *        Input to create the customer note from.
   */
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
