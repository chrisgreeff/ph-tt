export default class CustomerNoteModel {
  constructor (config = {}) {
    this.id = config.id
    this.customerId = config.customerId
    this.content = config.content || ''
    this.createdAt = new Date(config.createdAt)
  }

  graphalise () {
    return `{
      customerId: "${this.customerId}"
      content: "${this.content}"
    }`
  }
}
