const porta = 3003

const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.param.id)
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})