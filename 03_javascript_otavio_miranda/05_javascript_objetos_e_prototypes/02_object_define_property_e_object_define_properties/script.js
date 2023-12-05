// defineProperty e defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: true, // Pode alterar
        configurable: false // Configuravel
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor
            writable: true, // Pode alterar
            configurable: false // Configuravel
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor
            writable: true, // Pode alterar
            configurable: false // Configuravel
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 5000
delete p1.estoque
console.log(p1)
console.log(Object.keys(p1))

for (let chave in p1) {
    console.log(chave)
}
