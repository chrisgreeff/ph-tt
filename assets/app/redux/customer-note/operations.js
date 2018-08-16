import actions from './actions'
import { customerNoteResource } from 'resources'

const setCustomerNote = actions.setCustomerNote

const createCustomerNote = (formData) => (dispatch) => {
  return customerNoteResource.createCustomerNote(formData).then((customerNote) => {
    dispatch(setCustomerNote(customerNote))

    return customerNote
  })
}

const updateCustomerNote = (id, formData) => (dispatch) => {
  return customerNoteResource.updateCustomerNote(id, formData).then((customerNote) => {
    dispatch(setCustomerNote(customerNote))

    return customerNote
  })
}

export default {
  createCustomerNote,
  setCustomerNote,
  updateCustomerNote,
}
