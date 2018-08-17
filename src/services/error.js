// This file implements an error service to handle errors in the app.

class ErrorService {
  handleDbError (error) {
    console.error(error.message)
    console.error(error.stack)

    throw new Error()
  }
}

export default new ErrorService()
