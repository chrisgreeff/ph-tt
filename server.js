import { formatError } from 'apollo-errors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import schema from 'schema'

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use('/graphql', bodyParser.json(), graphqlExpress(() => ({
  formatError: (error) => formatError(error),
  schema
})))

app.use('/graphiql', graphiqlExpress(() => ({
  endpointURL: '/graphql'
})))

app.listen(PORT)
console.log(`GraphQL API server running at localhost: ${PORT}`)
