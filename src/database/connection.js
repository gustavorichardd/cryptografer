const knex = require('knex');
require('dotenv').config()

const db = knex({
  client: 'pg',
  version: '13',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
      rejectUnauthorized: false,
    }
  },
  useNullAsDefault: true,
})

module.exports = db;