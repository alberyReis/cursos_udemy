const { DataTypes } = require('sequelize')
const db = require('../db/conn.js')

const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    required: true
  },
  descripiton: {
    type: DataTypes.STRING,
    required: true
  },
  done: {
    type: DataTypes.STRING,
    required: true
  },
})

module.exports = Task