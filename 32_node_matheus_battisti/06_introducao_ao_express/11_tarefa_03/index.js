const express = require('express')
const path = require('path')

const projectsRoutes = require('./projects')
const basePath = path.join(__dirname, '/templates')

const app = express()
const port = 3000

app.use(express.static('public'))

app.use('/projects', projectsRoutes)

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})