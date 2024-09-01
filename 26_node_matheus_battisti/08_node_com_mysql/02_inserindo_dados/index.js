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
    }

    res.redirect('/')
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