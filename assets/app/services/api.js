import { createApolloFetch } from 'apollo-fetch'

class ApiService {
  constructor () {
    this.fetch = createApolloFetch({ uri: 'http://localhost:3001/graphql' })
  }

  query (query) {
    return this.fetch({ query }).then(({ data, errors }) => {
      if (errors && errors.length) {
        throw new Error(errors[0])
      }

      return data
    })
  }
}

export default new ApiService()
