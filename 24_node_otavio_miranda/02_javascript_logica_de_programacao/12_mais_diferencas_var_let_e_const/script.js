
const verdadeira = true

// Let tem escopo de bloco {...bloco}
// Var tem escopo de função

let nome01 = 'Luiz' // criando
var nome02 = 'Luiz'

var nome02 = 'Otavio' // Redeclarada

if(verdadeira) {
    let nome01 = 'Otavio' // criando
    // console.log(nome01, nome02)

    if(verdadeira) {
        let nome01 = 'Outra coisa'
        var nome02 = 'Ronaldo' // Redeclarada
        console.log(nome01, nome02)
    }
}


console.log(nome01, nome02)

var sobrenome = 'Miranda'

function falaOi () {
    var nome = 'Luiz'
    console.log(nome, sobrenome)
}

falaOi()


// Hosting

console.log(sobrenome)
var sobrenome = 'Miranda'

console.log(sobrenome)
let sobrenome = 'Miranda'