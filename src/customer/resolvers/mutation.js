import customerUpdaters from '../db/updaters'

class CustomerMutationResolvers {
  /**
   * Updates a customer.
   *
   * @method updateCustomer
   */
  async updateCustomer (rt, { id, input }) {
    return customerUpdaters.updateCustomer(id, input)
  }
}

export default new CustomerMutationResolvers()
