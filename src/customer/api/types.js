import { GraphQLString, GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull } from 'graphql'

const baseFields = {
  customerId: { type: new GraphQLNonNull(GraphQLString) },
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
