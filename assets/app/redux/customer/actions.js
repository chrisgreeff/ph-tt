import types from './types'

const setCustomer = (customer) => ({
  type: types.SET_CUSTOMER,
  customer
})

const setCustomers = (customers) => ({
  type: types.SET_CUSTOMERS,
  customers
})

export default {
  setCustomer,
  setCustomers
}
