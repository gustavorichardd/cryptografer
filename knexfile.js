const path = require('path')
require('dotenv').config()

module.exports = {
  // client: 'pg',
  // connection: {
  //   host: process.env.DATABASE_HOST,
  //   port: process.env.DATABASE_PORT,
  //   user: process.env.DATABASE_USER,
  //   password: process.env.DATABASE_PASSWORD,
  //   database: process.env.DATABASE_NAME,
  //   ssl: {
  //     rejectUnauthorized: false,
  //   }
  // },
  // migrations: {
  //   directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  // }

  local: {
    client: 'pg',
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
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  },
  heroku: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URI,
      ssl: {
        rejectUnauthorized: false,
      }
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
  }
};


