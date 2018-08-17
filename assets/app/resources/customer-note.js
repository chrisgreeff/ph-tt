import { apiService } from 'services'
import { CustomerNoteModel } from 'models'
import { CUSTOMER_NOTE_RESOURCE_FIELD } from 'phconstants'

class CustomerNoteResource {
  createCustomerNote (model) {
    return apiService.query(`mutation {
      createCustomerNote(
        input: ${model.graphalise()}
      ) { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
    }`).then(({ createCustomerNote }) => createCustomerNote && new CustomerNoteModel(createCustomerNote))
  }

  updateCustomerNote (id, model) {
    return apiService.query(`mutation {
      updateCustomerNote(
        id: "${id}",
        input: ${model.graphalise()}
      ) { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
    }`).then(({ updateCustomerNote }) => updateCustomerNote && new CustomerNoteModel(updateCustomerNote))
  }
}

export default new CustomerNoteResource()
