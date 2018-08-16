import types from './types'
import { CustomerNoteModel } from 'models'

const initialState = {
  customerNote: new CustomerNoteModel(),
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET_CUSTOMER_NOTE:
    return {
      ...state,
      customerNote: action.customerNote
    }
  default:
    return state
  }
}
