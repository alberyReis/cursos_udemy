const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodemvc2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  console.log('Conectamos ao MySQL...')
} catch (error) {
  console.log(`Não foi possivel conectar: ${error}`)
}

exports.default = sequelize