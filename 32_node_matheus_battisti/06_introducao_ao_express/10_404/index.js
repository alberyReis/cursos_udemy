const express = require('express')
const path = require('path')
const users = require('./users')

const port = 3000 // variável de ambiente
const app = express()
const basePath = path.join(__dirname, '/templates')


app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})