import { CustomerType, CustomerInputType } from './api/types'
import customerGetters from './db/getters'
import customerMutationResolvers from './resolvers/mutation'
import customerMutations from './api/mutations'
import customerQueries from './api/queries'
import customerQueryResolvers from './resolvers/query'
import customerUpdaters from './db/updaters'

export {
  customerGetters,
  CustomerInputType,
  customerMutationResolvers,
  customerMutations,
  customerQueries,
  customerQueryResolvers,
  CustomerType,
  customerUpdaters,
}
