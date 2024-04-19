// strings, number (int, floats), boolean

let minhaVar01 = "Minha string."
let minhaVar02 = 'Minha "string" com aspas duplas.'
let minhaVar03 = "Minha 'string' com aspas simples."

console.log(minhaVar01)
console.log(minhaVar02)
console.log(minhaVar03)

var minhaVar04 = `Minha template literal`

console.log(minhaVar04)

let idade = 40
let msg = `Eu possuo ${idade} anos.`

console.log(msg)
console.log("Hello " + " world.")

console.log(typeof msg, typeof idade, typeof minhaVar01)
