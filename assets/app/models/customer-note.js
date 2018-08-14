export default class CustomerNoteModel {
  constructor (config = {}) {
    this.id = config.id
    this.customerId = config.customerId
    this.note = config.note || ''
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
      note: "${this.note}"
    }`
  }
}
