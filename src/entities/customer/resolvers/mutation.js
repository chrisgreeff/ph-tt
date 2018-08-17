import { customerUpdaters } from 'entities/customer'

class CustomerMutationResolvers {
  /**
   * Updates a customer.
   *
   * @method updateCustomer
   */
  async updateCustomer (rt, { id, input }) {
    return customerUpdaters.updateCustomer(id, input)
  }

  /**
   * Updates the customer status.
   *
   * @method updateCustomerStatus
   */
  async updateCustomerStatus (rt, { id, status }) {
    return customerUpdaters.updateCustomerStatus(id, status)
  }
}

export default new CustomerMutationResolvers()
