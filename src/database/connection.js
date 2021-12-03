const knex = require('knex');
const configuration = require('../../knexfile')
require('dotenv').config()




// const db = knex({
//   client: 'pg',
//   connection: {
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
//     ssl: {
//       rejectUnauthorized: false,
//     }
//   },
//   useNullAsDefault: true,
// })





const config = !process.env.DATABASE_URI ? configuration.local : configuration.heroku

const db = knex(config);



module.exports = db;