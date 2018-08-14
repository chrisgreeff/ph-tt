import { GraphQLString, GraphQLObjectType, GraphQLInputObjectType, GraphQLNonNull } from 'graphql'

const baseFields = {
  customerId: { type: new GraphQLNonNull(GraphQLString) },
  note: { type: GraphQLString },
}

const CustomerNoteType = new GraphQLObjectType({
  name: 'CustomerNote',
  description: 'This represents a customer note',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    ...baseFields,
  })
})

const CustomerNoteInputType = new GraphQLInputObjectType({
  name: 'CustomerNoteInput',
  description: 'This represents a customer note input',
  fields: () => ({
    ...baseFields,
  })
})

export {
  CustomerNoteType,
  CustomerNoteInputType,
}
