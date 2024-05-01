const express = require("express")
const path = require('path')

const router = express.Router()
const basePath = path.join(__dirname, '../templates')

router.get('/', (req, res) => {
  res.sendFile(`${basePath}/projects.html`)
})

router.get('/:id', (req, res) => {
  res.sendFile(`${basePath}/project.html`)
})

module.exports = router