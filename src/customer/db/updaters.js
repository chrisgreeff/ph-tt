import { errorService } from 'services'
import { knex } from 'db'
import customerGetters from './getters'

class CustomerUpdaterActions {
  /**
   * Updates a customer entry with the passed id.
   *
   * @method updateCustomer
   * @param {String} id
   *        The customer id.
   *
   * @param {Object} input
   *        Input to update the customer with.
   */
  async updateCustomer (id, input) {
    try {
      const existingCustomer = await customerGetters.getCustomerById(id)
      const customer = { id, ...existingCustomer, ...input }

      await knex('customers')
        .where({ id })
        .update(customer)

      return customerGetters.getCustomerById(id)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerUpdaterActions()
