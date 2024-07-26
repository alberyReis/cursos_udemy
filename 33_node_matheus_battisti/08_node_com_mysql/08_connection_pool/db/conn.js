const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'admin',
  password: '23050904',
  database: 'nodemysql2'
})

module.exports = pool