// This file implements the customer database update functions.
//
import { errorService } from 'services'
import { knex } from 'db'
import customerGetters from './getters'

const serialiseCustomer = (customer) => ({
  id: customer.id,
  fullName: customer.fullName,
  email: customer.email,
  phone: customer.phone,
  status: customer.status,
})

class CustomerUpdaterActions {
  async updateCustomerStatus (id, status) {
    try {
      const existingCustomer = await customerGetters.getCustomerById(id)
      const customer = { id, ...existingCustomer, status }

      await knex('customers')
        .where({ id })
        .update(serialiseCustomer(customer))

      return customerGetters.getCustomerById(id)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new CustomerUpdaterActions()
