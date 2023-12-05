class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p01 = new pessoa("João")
p01.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p02 = criarPessoa("João")
p02.falar()