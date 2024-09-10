// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar uma cosntante com número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case sensitive
// Não pode modificar o valor de uma constante
// Não utilize var, utilize const

const nome = "João"
const primeiroNumero = "5"
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5

console.log(nome)
console.log(primeiroNumero)
console.log(segundoNumero)
console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)
console.log(typeof primeiroNumero)
console.log(primeiroNumero + segundoNumero)


