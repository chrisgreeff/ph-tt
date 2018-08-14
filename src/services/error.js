class ErrorService {
  handleDbError (error) {
    console.error(error.message)
    console.error(error.stack)

    throw new Error()

    return error
  }
}

export default new ErrorService()
