import { CustomerInputType, CustomerType } from './types'
import { GraphQLString, GraphQLNonNull } from 'graphql'
import { customerMutationResolvers } from 'entities/customer'

export default {
  updateCustomer: {
    type: CustomerType,
    description: 'Updates the customer with the passed id',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      input: { type: new GraphQLNonNull(CustomerInputType) }
    },
    resolve: (...args) => customerMutationResolvers.updateCustomer(...args)
  },
  updateCustomerStatus: {
    type: CustomerType,
    description: 'Updates the customer with the passed id with the passed status',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      status: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (...args) => customerMutationResolvers.updateCustomerStatus(...args)
  }
}
