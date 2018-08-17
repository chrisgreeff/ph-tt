import { CustomerNoteType, CustomerNoteInputType } from './api/types'
import customerNoteCreators from './db/creators'
import customerNoteGetters from './db/getters'
import customerNoteMutations from './api/mutations'

export {
  customerNoteCreators,
  customerNoteGetters,
  CustomerNoteInputType,
  customerNoteMutations,
  CustomerNoteType,
}
