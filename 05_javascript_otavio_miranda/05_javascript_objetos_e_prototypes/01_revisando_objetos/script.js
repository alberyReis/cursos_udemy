const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

// Notação de ponto
console.log(pessoa.nome)
console.log(pessoa.sobrenome)

// Notação de colchete
console.log(pessoa['nome'])
console.log(pessoa['sobrenome'])

const chave = 'nome'
console.log(pessoa[chave])

const pessoa1 = new Object()
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Miranda'

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

const pessoa2 = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
}

console.log(pessoa1, pessoa2)

delete pessoa1.sobrenome
console.log(pessoa1)

pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
}
pessoa1.falarNome()

pessoa1.sobrenome = 'Otavio'
pessoa1.idade = 35
console.log(pessoa1)

pessoa1.getDataDeNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.getDataDeNascimento())

for (let chave in pessoa1) {
    console.log(chave)
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}

// Factory functions (Funções fabricas)
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Albery', 'Reis')
console.log(p1.nomeCompleto())

// Constructor function (Funções construtoras)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    Object.freeze(this)
}

const p2 = new Pessoa('Albery', 'Reis')
const p3 = new Pessoa('Luana', 'Oliveira')
console.log(p2)
console.log(p3)

