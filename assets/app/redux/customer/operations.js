import { sortBy } from 'lodash'
import actions from './actions'
import { customerResource } from 'resources'
import { CustomerModel } from 'models'

const setCustomer = actions.setCustomer

const setCustomers = actions.setCustomers

const fetchAndSetCustomers = () => (dispatch) => {
  return customerResource.customers().then((customers) => {
    dispatch(setCustomers(sortBy(customers || []), 'createdAt'))

    return customers
  })
}

const fetchAndSetCustomer = (id) => (dispatch) => {
  return customerResource.getCustomer(id).then((customer) => {
    dispatch(setCustomer(customer || new CustomerModel()))

    return customer
  })
}

const updateCustomerStatus = (id, status) => (dispatch) => {
  return customerResource.updateCustomerStatus(id, status).then((customer) => {
    dispatch(setCustomer(customer))

    return customer
  })
}

export default {
  fetchAndSetCustomer,
  fetchAndSetCustomers,
  setCustomer,
  setCustomers,
  updateCustomerStatus,
}
