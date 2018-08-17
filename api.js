const path = require('path')
const { formatError } = require('apollo-errors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

require('app-module-path').addPath(path.join(__dirname, 'src'))
require('babel-register')({ cache: true })
require('babel-polyfill')

const schema = require('schema')
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
