import { map } from 'lodash'
import { apiService } from 'services'
import { CustomerModel } from 'models'
import { CUSTOMER_RESOURCE_FIELD } from 'phconstants'

class CustomerResource {
  customers () {
    return apiService.query(`{
      customers { ${CUSTOMER_RESOURCE_FIELD} }
    }`).then(({ customers }) => map(customers, (customer) => new CustomerModel(customer)))
  }

  getCustomer (id) {
    return apiService.query(`{
      getCustomer(
        id: "${id}"
      ) { ${CUSTOMER_RESOURCE_FIELD} }
    }`).then(({ getCustomer }) => getCustomer && new CustomerModel(getCustomer))
  }

  updateCustomerStatus (id, status) {
    return apiService.query(`mutation {
      updateCustomerStatus(
        id: "${id}",
        status: "${status}"
      ) { ${CUSTOMER_RESOURCE_FIELD} }
    }`).then(({ updateCustomerStatus }) => updateCustomerStatus && new CustomerModel(updateCustomerStatus))
  }
}

export default new CustomerResource()
