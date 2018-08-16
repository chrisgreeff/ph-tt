import { createSelector } from 'reselect'

const getCustomerNote = ({ customerNote }) => customerNote.customerNote
const getCustomerNoteState = createSelector([ getCustomerNote ], (customerNote) => customerNote)

export default {
  getCustomerNoteState,
}
