import { errorService } from 'services'
import { knex } from 'db'
import customerNoteGetters from './getters'

class NoteUpdaterActions {
  /**
   * Updates a customer note entry with the passed id.
   *
   * @method updateCustomerNote
   * @param {String} id
   *        The customer note id.
   *
   * @param {Object} input
   *        Input to update the customer note with.
   */
  async updateCustomerNote (id, input) {
    try {
      const existingNote = await customerNoteGetters.getCustomerNoteById(id)
      const note = { id, ...existingNote, ...input }

      await knex('customer_notes')
        .where({ id })
        .update(note)

      return customerNoteGetters.getCustomerNoteById(id)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new NoteUpdaterActions()
