import { forEach, filter } from 'lodash'
import { errorService } from 'services'
import { customerNoteGetters } from 'entities/customer-note'
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

      customer.notes = await customerNoteGetters.getCustomerNotesByCustomerId(id)
      customer.createdAt = customer.created_at

      return customer
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerGetterActions()
