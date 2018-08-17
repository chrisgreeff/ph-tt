// This file defines the `Customer` input and output types that the GraphQL API.

import { GraphQLString, GraphQLObjectType, GraphQLList, GraphQLInputObjectType, GraphQLNonNull } from 'graphql'
import { CustomerNoteType } from 'entities/customer-note'

const baseFields = {
  fullName: { type: new GraphQLNonNull(GraphQLString) },
  email: { type: GraphQLString },
  phone: { type: GraphQLString },
  status: { type: new GraphQLNonNull(GraphQLString) },
}

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  description: 'This represents a customer',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    notes: { type: new GraphQLNonNull(new GraphQLList(CustomerNoteType)) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    ...baseFields,
  })
})

const CustomerInputType = new GraphQLInputObjectType({
  name: 'CustomerInput',
  description: 'This represents a customer input',
  fields: () => ({
    ...baseFields,
  })
})

export {
  CustomerType,
  CustomerInputType,
}
