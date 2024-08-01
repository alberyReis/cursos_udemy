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
  const pageQty = req.body.pageqty

  const querySql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageQty}')`

  conn.query(querySql, (err) => {
    if (err) {
      console.log(err)
      return
    }

    res.redirect('/books')
  })
})

app.get('/books', (req, res) => {
  const querySql = 'SELECT * FROM books'

  conn.query(querySql, (err, data) => {
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

  const querySql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(querySql, (err, data) => {
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

app.post('/books/updatebook', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  const pageQty = req.body.pageqty

  const querySql = `UPDATE books SET title = '${title}', pageqty = '${pageQty}' WHERE id = ${id}`

  conn.query(querySql, (err) => {
    if (err) {
      console.log(err)
      return
    }

    res.redirect('/books')
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