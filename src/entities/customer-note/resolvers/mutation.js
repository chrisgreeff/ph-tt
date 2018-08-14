import { customerNoteCreators, customerNoteUpdaters } from 'entities/customer-note'

class NoteMutationResolvers {
  /**
   * Creates a customer note.
   *
   * @method createCustomerNote
   */
  async createCustomerNote (rt, { input }) {
    return customerNoteCreators.createCustomerNote(input)
  }

  /**
   * Updates a customer note.
   *
   * @method updateCustomerNote
   */
  async updateCustomerNote (rt, { id, input }) {
    return customerNoteUpdaters.updateCustomerNote(id, input)
  }
}

export default new NoteMutationResolvers()
