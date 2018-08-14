import { noteUpdaters } from 'customer-note'

class NoteMutationResolvers {
  /**
   * Updates a note.
   *
   * @method updateNote
   */
  async updateNote (rt, { id, input }) {
    return noteUpdaters.updateNote(id, input)
  }
}

export default new NoteMutationResolvers()
