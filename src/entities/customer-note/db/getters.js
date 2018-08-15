import { forEach } from 'lodash'
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

  /**
   * Fetches note with passed id.
   *
   * @method getCustomerNoteById
   * @param {String} id
   *        The note id.
   */
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

  /**
   * Fetches note with passed customer id.
   *
   * @method getCustomerNotesByCustomerId
   * @param {String} customerId
   *        The customer id.
   */
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
