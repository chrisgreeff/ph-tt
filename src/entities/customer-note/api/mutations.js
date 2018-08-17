// This file defines the `CustomerNote` mutation API.

import { CustomerNoteInputType, CustomerNoteType } from './types'
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { customerNoteCreators, customerNoteUpdaters } from 'entities/customer-note'

export default {
  createCustomerNote: {
    type: CustomerNoteType,
    description: 'Creates a customer note',
    args: {
      input: { type: new GraphQLNonNull(CustomerNoteInputType) }
    },
    resolve: (rt, { input }) => customerNoteCreators.createCustomerNote(input)
  },
  updateCustomerNote: {
    type: CustomerNoteType,
    description: 'Creates a customer note',
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) },
      input: { type: new GraphQLNonNull(CustomerNoteInputType) }
    },
    resolve: (rt, { id, input }) => customerNoteUpdaters.updateCustomerNote(id, input)
  }
}
