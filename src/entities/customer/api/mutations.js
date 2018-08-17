import { CustomerInputType, CustomerType } from './types'
import { customerUpdaters } from 'entities/customer'
import { GraphQLString, GraphQLNonNull } from 'graphql'

export default {
  updateCustomer: {
    type: CustomerType,
    description: 'Updates the customer with the passed id',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      input: { type: new GraphQLNonNull(CustomerInputType) }
    },
    resolve: (rt, { id, input }) => customerUpdaters.updateCustomer(id, input)
  },
  updateCustomerStatus: {
    type: CustomerType,
    description: 'Updates the customer with the passed id with the passed status',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      status: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve: (rt, { id, status }) => customerUpdaters.updateCustomerStatus(id, status)
  }
}
