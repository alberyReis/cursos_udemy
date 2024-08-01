const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.post('/books/insertbook', (req, res) => {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const querysql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`

  conn.query(querysql, (err) => {
    if (err) {
      console.log(err)
      return
    }

    res.redirect('/books')
  })
})

app.get('/books', (req, res) => {
  const querysql = 'SELECT * FROM books'

  conn.query(querysql, (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    const books = data

    res.render('books', { books })
  })
})

app.get('/book/:id', (req, res) => {
  const id = req.params.id

  const querysql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(querysql, (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    const book = data[0]

    res.render('book', { book })
  })
})

app.get('/books/edit/:id', (req, res) => {
  const id = req.params.id

  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    const book = data[0]

    res.render('editbook', { book })
  })
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: '23050904',
  database: 'nodemysql2',
})

conn.connect((err) => {
  if (err) {
    console.log(err)
  }

  console.log('Conectou ao MySQL!')

  app.listen(3000)
})