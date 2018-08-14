import CUSTOMER_NOTE_RESOURCE_FIELD from './customer-note-resource-field'

export default `
  id
  fullName
  email
  phone
  createdAt
  notes { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
`
