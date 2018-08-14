import { forEach, filter } from 'lodash'
import { errorService } from 'services'
import { knex } from 'db'

class CustomerGetterActions {
  /**
   * Fetches all customers.
   *
   * @method getCustomers
   */
  async getCustomers () {
    try {
      const [ customers, notes ] = await Promise.all([
        knex('customers').select(),
        this.getCustomerNotes()
      ])

      forEach(customers, (customer) => {
        customer.notes = filter(notes, { customerId: customer.id })
      })

      return customers
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

  /**
   * Fetches customer with passed id.
   *
   * @method getCustomerById
   * @param {String} id
   *        The customer id.
   */
  async getCustomerById (id) {
    try {
      const [ customer ] = await knex('customers')
        .select()
        .where({ id })

      customer.notes = await this.getCustomerNotesByCustomerId(id)

      return customer
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }

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
   * Fetches all customer notes with the passed customer id.
   *
   * @method getCustomerNotesByCustomerId
   * @param {String} customerId
   *        The customer id to fetch the notes with.
   */
  async getCustomerNotesByCustomerId (customerId) {
    try {
      return knex('customer_notes')
        .select()
        .where({ customerId })
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerGetterActions()
