import CUSTOMER_NOTE_RESOURCE_FIELD from './customer-note-resource-field'

export default `
  id
  fullName
  email
  phone
  status
  createdAt
  notes { ${CUSTOMER_NOTE_RESOURCE_FIELD} }
`
