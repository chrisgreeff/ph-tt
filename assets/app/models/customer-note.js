export default class CustomerNoteModel {
  constructor (config = {}) {
    this.id = config.id
    this.customerId = config.customerId
    this.content = config.content || ''
    this.createdAt = new Date(config.createdAt)
  }

  /**
   * Graphalises the model.
   *
   * @method graphalise
   * @return {Object} Graphalised model.
   */
  graphalise () {
    return `{
      customerId: "${this.customerId}"
      content: "${this.content}"
    }`
  }
}
