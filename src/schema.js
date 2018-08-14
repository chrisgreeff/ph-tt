import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { customerQueries, customerMutations } from 'entities/customer'
import { customerNoteQueries, customerNoteMutations } from 'entities/customer-note'

const query = new GraphQLObjectType({
  name: 'Queries',
  description: 'Schema Query Root',
  fields: () => ({
    ...customerQueries,
    ...customerNoteQueries,
  })
})

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Schema Mutation Root',
  fields: () => ({
    ...customerMutations,
    ...customerNoteMutations,
  })
})

export default new GraphQLSchema({ query, mutation })
