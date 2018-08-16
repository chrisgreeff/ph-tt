import types from './types'

const setCustomerNote = (customerNote) => ({
  type: types.SET_CUSTOMER_NOTE,
  customerNote
})

export default {
  setCustomerNote,
}
