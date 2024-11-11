// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto){
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p01 = criaPessoa('Albery', 'Reis', 1.80, 95)
const p02 = criaPessoa('Maria', 'Vieira', 1.60, 100)
const p03 = criaPessoa('Albertino', 'Reis', 1.80, 65)
console.log(p01.imc)
console.log(p02.imc)
console.log(p03.imc)
p01.nomeCompleto = 'Albery Vieira Reis'
p02.nomeCompleto = 'Maria da Cinceição Vieira'
p03.nomeCompleto = 'Albertino Carvalho Reis'
console.log(p01.nomeCompleto)
console.log(p02.nomeCompleto)
console.log(p03.nomeCompleto)