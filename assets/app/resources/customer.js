import { map } from 'lodash'
import { apiService } from 'services'
import { CustomerModel } from 'models'
import { CUSTOMER_RESOURCE_FIELDS } from 'phconstants'

class CustomerResource {
  customers () {
    return apiService.query(`{
      customers { ${CUSTOMER_RESOURCE_FIELDS} }
    }`).then(({ customers }) => map(customers, (customer) => new CustomerModel(customer)))
  }

  getCustomer (id) {
    return apiService.query(`{
      getCustomer(
        id: "${id}"
      ) { ${CUSTOMER_RESOURCE_FIELDS} }
    }`).then(({ getCustomer }) => getCustomer && new CustomerModel(getCustomer))
  }

  updateCustomer (id, model) {
    return apiService.query(`mutation {
      updateCustomer(id: "${id}", input: ${model.graphalise()}) { ${CUSTOMER_RESOURCE_FIELDS} }
    }`).then(({ updateCustomer }) => updateCustomer && new CustomerModel(updateCustomer))
  }

  updateCustomerStatus (id, status) {
    return apiService.query(`mutation {
      updateCustomerStatus(
        id: "${id}",
        status: "${status}"
      ) { ${CUSTOMER_RESOURCE_FIELDS} }
    }`).then(({ updateCustomerStatus }) => updateCustomerStatus && new CustomerModel(updateCustomerStatus))
  }
}

export default new CustomerResource()
