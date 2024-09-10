// Função construrora -> Objetos
// Função fabrica -> Objetos
// Funçao construtora -> Pessoa(new)
function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
    const id = 12345
    const metodoInterno = {

    }
    //Atributos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome
}

const p01 = new Pessoa('Albery', 'Reis')
const p02 = new Pessoa('Maria', 'Oliveira')
console.log(p01)
console.log(p02)