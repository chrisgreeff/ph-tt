// This file defines the `Customer` query API.

import { customerGetters } from 'entities/customer'
import { CustomerType } from './types'
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'

export default {
  customers: {
    type: new GraphQLList(CustomerType),
    description: 'List all customers',
    resolve: () => customerGetters.getCustomers()
  },
  getCustomer: {
    type: CustomerType,
    description: 'Get a customer with the passed id',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (rt, { id }) => customerGetters.getCustomerById(id)
  }
}
