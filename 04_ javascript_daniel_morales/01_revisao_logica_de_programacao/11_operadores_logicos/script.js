/* Operadores lógicos
Para uma pessoa viajar para o exterior: precisa ser maior de 18 anos OU acompanhado dos pais */

let idade = 18
let paisPresentes = true

let podeViajar = idade >= 18 || paisPresentes
console.log(`Pode viajar ${podeViajar}`) 

idade = 18
paisPresentes = false

podeViajar = idade >= 18 || paisPresentes
console.log(`Pode viajar ${podeViajar}`) 

idade = 16
paisPresentes = true

podeViajar = idade >= 18 || paisPresentes
console.log(`Pode viajar ${podeViajar}`) 

idade = 16
paisPresentes = false

podeViajar = idade >= 18 || paisPresentes
console.log(`Pode viajar ${podeViajar}`) 

//Acompanhado com os pais E ter comprado um bilhete

idade = 21
paisPresentes = false
let comprouBilhete = false
podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete // Ordem de precedência

console.log(`Pode viajar ${podeViajar}`)

