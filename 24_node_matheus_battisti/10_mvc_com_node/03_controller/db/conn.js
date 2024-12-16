const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'admin', '', {
  host: 'localhost',
  dialect: 'mysql',
  password: ''
})

try {
  sequelize.authenticate()
  console.log('Conectamos ao MySQL...')
} catch (error) {
  console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize