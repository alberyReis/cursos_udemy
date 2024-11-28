const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('thoughts', 'admin', '', {
  host: 'localhost',
  dialect: 'mysql',
  password: '23050904'
})

try {
  sequelize.authenticate()
  console.log('Conectamos com sucesso"')
} catch (err) {
  console.log((`Não foi possível conectar: ${err}`))
}

module.exports = sequelize