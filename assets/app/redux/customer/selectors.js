import { createSelector } from 'reselect'

const getCustomer = ({ customer }) => customer.customer
const getCustomerState = createSelector([ getCustomer ], (customer) => customer)

const getCustomers = ({ customer }) => customer.customers
const getCustomersState = createSelector([ getCustomers ], (customers) => customers)

export default {
  getCustomerState,
  getCustomersState
}
