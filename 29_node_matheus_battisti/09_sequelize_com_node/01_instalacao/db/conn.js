// const mysql = require('mysql')

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'admin',
//   password: '23050904',
//   database: 'nodemysql2'
// })

// module.exports = pool

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize2', 'admin', '', {
  host: 'localhost',
  dialect: 'mysql',
  password: '23050904',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com sucesso com o sequilize!')
} catch (error) {
  console.log('Não foi possivel conectar: ', error)
}

module.exports = sequelize