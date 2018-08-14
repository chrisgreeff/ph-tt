import { CustomerNoteInputType, CustomerNoteType } from './types'
import { GraphQLString, GraphQLNonNull } from 'graphql'
import { customerNoteMutationResolvers } from 'customer-note'

export default {
  createCustomerNote: {
    type: CustomerNoteType,
    description: 'Creates a customer note',
    args: {
      input: { type: new GraphQLNonNull(CustomerNoteInputType) }
    },
    resolve: (...args) => customerNoteMutationResolvers.createCustomerNote(...args)
  },
  updateCustomerNote: {
    type: CustomerNoteType,
    description: 'Updates the customer note with the passed id',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      input: { type: new GraphQLNonNull(CustomerNoteInputType) }
    },
    resolve: (...args) => customerNoteMutationResolvers.updateCustomerNote(...args)
  }
}
