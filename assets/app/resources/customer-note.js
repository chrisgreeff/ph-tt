import { map } from 'lodash'
import { apiService } from 'services'
import { CustomerNoteModel } from 'models'
import { CUSTOMER_NOTE_RESOURCE_FIELD } from 'phconstants'

class CustomerNoteResource {
  customers () {
    return apiService.query(`{
      customers { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
    }`).then(({ customers }) => map(customers, (customer) => new CustomerNoteModel(customer)))
  }

  getCustomer (id) {
    return apiService.query(`{
      getCustomer(
        id: "${id}"
      ) { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
    }`).then(({ getCustomer }) => getCustomer && new CustomerNoteModel(getCustomer))
  }

  updateCustomer (id, model) {
    return apiService.query(`mutation {
      updateCustomer(id: "${id}", input: ${model.graphalise()}) { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
    }`).then(({ updateCustomer }) => updateCustomer && new CustomerNoteModel(updateCustomer))
  }

  updateCustomerStatus (id, status) {
    return apiService.query(`mutation {
      updateCustomerStatus(
        id: "${id}",
        status: "${status}"
      ) { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
    }`).then(({ updateCustomerStatus }) => updateCustomerStatus && new CustomerNoteModel(updateCustomerStatus))
  }
}

export default new CustomerNoteResource()
