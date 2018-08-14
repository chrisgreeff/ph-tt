import { customerGetters } from 'customer'

class CustomerQueryResolvers {
  /**
   * Gets all customers.
   *
   * @method customers
   */
  async customers () {
    return customerGetters.getCustomers()
  }

  /**
   * Get a customer.
   *
   * @method getCustomer
   */
  async getCustomer (rt, { id }) {
    return customerGetters.getCustomerById(id)
  }
}

export default new CustomerQueryResolvers()
