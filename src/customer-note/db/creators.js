import { errorService } from 'services'
import { knex } from 'db'

class CustomerNoteCreatorActions {
  /**
   * Creates a member entry.
   *
   * @method createCustomerNote
   * @param {Object} input
   *        Input to create the customer note from.
   */
  async createCustomerNote (input) {
    try {
      return knex('customer_notes')
        .insert(input)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerNoteCreatorActions()
