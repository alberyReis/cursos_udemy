const a = {
    name: "Teste"
}
console.log(a)

const b = a
b.name = "Opa"
console.log(a)
console.log(b)

let c = 3
let d = c
d++
console.log(c)
console.log(d)

let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite aribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)



