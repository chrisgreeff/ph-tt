const NODE_ENV = process.env.NODE_ENV || 'development'

console.log(`Connecting to the "${NODE_ENV}" database...`)

let config = { client: 'pg' }
if (process.env.NODE_ENV === 'development') {
  config.connection = 'postgres://localhost/phtt'
} else {
  config.connection = 'postgres://localhost/phtt'
}

module.exports = config
