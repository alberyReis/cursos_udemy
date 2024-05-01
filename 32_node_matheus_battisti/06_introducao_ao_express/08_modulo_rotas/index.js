const express = require('express')

const port = 3000 // variável de ambiente
const app = express()
const users = require('./users')

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})