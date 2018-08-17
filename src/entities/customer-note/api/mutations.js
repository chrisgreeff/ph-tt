import { CustomerNoteInputType, CustomerNoteType } from './types'
import { GraphQLNonNull } from 'graphql'
import { customerNoteCreators } from 'entities/customer-note'

export default {
  createCustomerNote: {
    type: CustomerNoteType,
    description: 'Creates a customer note',
    args: {
      input: { type: new GraphQLNonNull(CustomerNoteInputType) }
    },
    resolve: (rt, { input }) => customerNoteCreators.createCustomerNote(input)
  }
}
