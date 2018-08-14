import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import customerQueries from 'customer/api/queries'
import customerMutations from 'customer/api/mutations'

const query = new GraphQLObjectType({
  name: 'Queries',
  description: 'Schema Query Root',
  fields: () => ({
    ...customerQueries
  })
})

const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Schema Mutation Root',
  fields: () => ({
    ...customerMutations
  })
})

export default new GraphQLSchema({ query, mutation })
