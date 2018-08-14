import { errorService } from 'services'
import { knex } from 'db'
import noteGetters from './getters'

class NoteUpdaterActions {
  /**
   * Updates a note entry with the passed id.
   *
   * @method updateNote
   * @param {String} id
   *        The note id.
   *
   * @param {Object} input
   *        Input to update the note with.
   */
  async updateNote (id, input) {
    try {
      const existingNote = await noteGetters.getNoteById(id)
      const note = { id, ...existingNote, ...input }

      await knex('notes')
        .where({ id })
        .update(note)

      return noteGetters.getNoteById(id)
    } catch (error) {
      return errorService.handleDbError(error)
    }
  }
}

export default new NoteUpdaterActions()
