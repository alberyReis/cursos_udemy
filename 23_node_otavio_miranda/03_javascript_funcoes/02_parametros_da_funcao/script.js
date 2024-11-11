// A função criada com function tem arguments que sustenta todos os argumentos envidaos
function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7)

function funcao02(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
    console.log(arguments)
}
funcao02(1, 2, 3)

function funcao03(a, b = 0, c = 4) {
    console.log(a + b + c)
}
funcao03(2, undefined, 20)

function funcao04({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
let obj = { nome: 'Albery', sobrenome: 'Vieira Reis', idade: 34 }
funcao04(obj)

function funcao05([valor01, valor02, valor03]) {
    console.log(valor01, valor02, valor03)
}
let array = ['Albery', 'Vieira Reis', 34]
funcao05(array)

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('*', 1, 20, 30, 40, 50)

function conta02(operador, acumulador, ...numeros) {
    console.log(arguments)
}
conta02('*', 1, 20, 30, 40, 50)

function conta03(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
}
conta03('*', 1, 20, 30, 40, 50)

const conta04 = (...args) => {
    console.log(args)
}
conta04('+', 1, 20, 30, 40, 50)