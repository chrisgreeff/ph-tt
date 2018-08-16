import moment from 'moment'
import { map } from 'lodash'
import { CustomerNoteModel } from 'models'

export default class CustomerModel {
  constructor (config = {}) {
    this.id = config.id
    this.fullName = config.fullName || ''
    this.email = config.email || ''
    this.phone = config.phone || ''
    this.notes = map(config.notes, (note) => new CustomerNoteModel(note))
    this.status = config.status
    this.createdAt = moment(new Date(config.createdAt))
  }

  graphalise () {
    return `{
      fullName: "${this.fullName}"
      email: "${this.email}"
      phone: "${this.phone}"
      status: "${this.status}"
    }`
  }
}
