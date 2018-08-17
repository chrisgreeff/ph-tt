import knex from 'knex'
import knexFile from '../../knexfile'

// Connects the serverside code to our database via Knex.
export default knex(knexFile)
