class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
            this.sobrenome = sobrenome
    }
    falar() {
        console.log(`${this.nome} está falando`)
    }
    comer() {
        console.log(`${this.nome} está comendo`)
    }
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
    estudar() {
        console.log(`${this.nome} está estudando`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome,
        this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa('Maria', 'Miranda')
const p3 = new Pessoa('Joana', 'Miranda')
const p4 = new Pessoa('João', 'Miranda')
const p5 = new Pessoa2('Albery', 'Reis')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log(p1.falar())
console.log(p2.comer())
console.log(p3.beber())
console.log(p4.estudar())
console.log(p5.falar())

