// This service generates a uid with a passed prefix.

class UidService {
  generate (prefix = '') {
    let date = new Date().getTime()

    const uuid = 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
      const random = (date + Math.random() * 16) % 16 | 0

      date = Math.floor(date / 16)
      return (char === 'x' ? random : (random & 0x3 | 0x8)).toString(16)
    })

    return `${prefix}${uuid}`
  }
}

export default new UidService()
