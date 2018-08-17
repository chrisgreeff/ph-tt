// This file allows us to import the customer note entity modules from anywhere in the serverside app via `entities/customer-note`

import { CustomerNoteType, CustomerNoteInputType } from './api/types'
import customerNoteCreators from './db/creators'
import customerNoteGetters from './db/getters'
import customerNoteMutations from './api/mutations'
import customerNoteUpdaters from './db/updaters'

export {
  customerNoteCreators,
  customerNoteGetters,
  CustomerNoteInputType,
  customerNoteMutations,
  CustomerNoteType,
  customerNoteUpdaters,
}
