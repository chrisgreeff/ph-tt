import { CustomerType } from './types'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import { customerQueryResolvers } from 'customer'

export default {
  customers: {
    type: new GraphQLList(CustomerType),
    description: 'List all customers',
    resolve: (...args) => customerQueryResolvers.customers(...args)
  },
  getCustomer: {
    type: CustomerType,
    description: 'Get a customer with the passed id',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (...args) => customerQueryResolvers.getCustomer(...args)
  }
}
