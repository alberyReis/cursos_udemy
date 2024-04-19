const pessoa01 = {
    nome: "Albery",
    sobrenome: "Vieira Reis",
    idade: 34,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando que a sua idade é ${this.idade}.`)
    },

        incrementaIdade() {
            this.idade++
    }
}

console.log(pessoa01.nome)
console.log(pessoa01.sobrenome)
console.log(pessoa01.idade)

pessoa01.fala()
pessoa01.incrementaIdade()
pessoa01.fala()
pessoa01.incrementaIdade()
pessoa01.fala()
pessoa01.incrementaIdade()
pessoa01.fala()



const pessoa02 = {
    nome: "Maria",
    sobrenome: "Oliveira",
    idade: 55
}

console.log(pessoa02)

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa03 = criaPessoa("Luiz", "Otavio", 25)

console.log(pessoa03)
console.log(pessoa03.nome)
console.log(pessoa03.sobrenome)
console.log(pessoa03.idade)

const pessoa04 = criaPessoa("Luiz", "Miranda", 25)
const pessoa05 = criaPessoa("Maria", "Oliveira", 32)
const pessoa06 = criaPessoa("João", "Moreira", 55)
const pessoa07 = criaPessoa("Junior", "Lara", 44)
const pessoa08 = criaPessoa("Jean", "Otavio", 69)

console.log(pessoa01.nome, pessoa02.nome, pessoa03.nome, pessoa04.nome, pessoa05.nome, pessoa06.nome, pessoa07.nome, pessoa08.nome)
