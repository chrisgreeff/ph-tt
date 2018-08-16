import actions from './actions'
import { customerNoteResource } from 'resources'

const setCustomerNote = actions.setCustomerNote

const createCustomerNote = (formData) => () => customerNoteResource.createCustomerNote(formData)

const updateCustomerNote = (id, formData) => () => customerNoteResource.updateCustomerNote(id, formData)

export default {
  createCustomerNote,
  setCustomerNote,
  updateCustomerNote,
}
