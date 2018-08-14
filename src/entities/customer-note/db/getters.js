import { errorService } from 'services'
import { knex } from 'db'

class CustomerNoteGetterActions {
  /**
   * Fetches all customer notes.
   *
   * @method getCustomerNotes
   */
  async getCustomerNotes () {
    try {
      return knex('customer_notes')
        .select()
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

  /**
   * Fetches note with passed id.
   *
   * @method getCustomerNoteById
   * @param {String} id
   *        The note id.
   */
  async getCustomerNoteById (id) {
    try {
      const [ note ] = await knex('customer_notes')
        .select()
        .where({ id })

      return note
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

  /**
   * Fetches note with passed customer id.
   *
   * @method getCustomerNoteByCustomerId
   * @param {String} customerId
   *        The customer id.
   */
  async getCustomerNoteByCustomerId (customerId) {
    try {
      return knex('customer_notes')
        .select()
        .where({ customerId })
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerNoteGetterActions()
