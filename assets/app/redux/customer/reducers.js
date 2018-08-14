import types from './types'
import { CustomerModel } from 'models'

const initialState = {
  customer: new CustomerModel(),
  customers: []
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET_CUSTOMER:
    return {
      ...state,
      customer: action.customer
    }
  case types.SET_CUSTOMERS:
    return {
      ...state,
      customers: action.customers
    }
  default:
    return state
  }
}
