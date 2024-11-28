const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
  const itens = ['01 - Item a', '02 - Item b', '03 - Item c']

  res.render('dashboard', { itens })
})

app.get('/blogpost', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js...',
    comments: 4,
  }

  res.render('blogpost', { post })
})

app.get('/', (req, res) => {
  const user = {
    name: 'Albery',
    surname: 'Reis',
    age: 36
  }

  const auth = true

  approved = false

  res.render('home', { user: user, auth, approved })
})

app.listen(3000, () => {
  console.log('App rodando na porta 3000...')
})
