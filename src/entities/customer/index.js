import { CustomerType, CustomerInputType } from './api/types'
import customerGetters from './db/getters'
import customerMutations from './api/mutations'
import customerQueries from './api/queries'
import customerUpdaters from './db/updaters'

export {
  customerGetters,
  CustomerInputType,
  customerMutations,
  customerQueries,
  CustomerType,
  customerUpdaters,
}
