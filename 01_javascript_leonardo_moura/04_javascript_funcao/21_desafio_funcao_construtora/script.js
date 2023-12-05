function pessoa(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}.`)
    }
}

const p01 = new pessoa("João")
p01.falar()

