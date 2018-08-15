import { sortBy } from 'lodash'
import actions from './actions'
import { customerResource } from 'resources'
import { CustomerModel } from 'models'

/**
 * Sets the customer.
 *
 * @method setCustomer
 * @param  {CustomerModel} customer
 *         The customer to set.
 */
const setCustomer = actions.setCustomer

/**
 * Sets the customers.
 *
 * @method setCustomers
 * @param  {Array<CustomerModel>} customers
 *         The customers to set.
 */
const setCustomers = actions.setCustomers

/**
 * Fetches and sets the customers.
 *
 * @method fetchAndSetCustomers
 */
const fetchAndSetCustomers = () => (dispatch) => {
  return customerResource.customers().then((customers) => {
    dispatch(setCustomers(sortBy(customers || []), 'createdAt'))

    return customers
  })
}

/**
 * Fetches and sets the customer.
 *
 * @method fetchAndSetCustomer
 * @param  {String} id
 *         The id of the customer to fetch and set.
 */
const fetchAndSetCustomer = (id) => (dispatch) => {
  return customerResource.getCustomer(id).then((customer) => {
    dispatch(setCustomer(customer || new CustomerModel()))

    return customer
  })
}

/**
 * Updates a customer with the passed id.
 *
 * @method updateCustomer
 * @param  {String} id
 *         The id of the customer to update.
 *
 * @param  {CustomerModel} formData
 *         The form data to update the customer from.
 */
const updateCustomer = (id, formData) => (dispatch) => {
  return customerResource.updateCustomer(id, formData).then((customer) => {
    dispatch(setCustomer(customer))

    return customer
  })
}

/**
 * Updates a customer's status with the passed id.
 *
 * @method updateCustomerStatus
 * @param  {String} id
 *         The id of the user to update.
 *
 * @param  {String} status
 *         The status to update the customer user with.
 */
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
  updateCustomer,
  updateCustomerStatus,
}
