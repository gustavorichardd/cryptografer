const knex = require('knex');
const configuration = require('../../knexfile')
require('dotenv').config()

const config = !process.env.DATABASE_URL ? configuration.local : configuration.heroku
const db = knex(config);

module.exports = db;