let num01 = 1
let num02 = 2.5

console.log(num01 + num02)
console.log(num01.toString() + num02)

num01 = num01.toString()

console.log(typeof num01)

num01 = 1500

console.log(num01.toString(2)) // Representação binária

num01 = 10.5789551255547

console.log(num01.toFixed(2))
console.log(num01.toFixed(4))

num01 = 10

console.log(Number.isInteger(num01))
console.log(Number.isInteger(num02))

let temp = num01 * "Olá"

console.log(temp)
console.log(Number.isNaN(temp))

num01 = 0.7
num02 = 0.1

console.log(num01 + num02)

num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02
num01 += num02

console.log(num01)

num01 = parseFloat(num01.toFixed(2))

console.log(num01)
console.log(Number.isInteger(1.00))
console.log(Number.isInteger(num01))

let numero01 = 0.7
let numero02 = 0.1

numero01 = ((numero01 * 100) + (numero02 * 100)) / 100
numero01 = ((numero01 * 100) + (numero02 * 100)) / 100
numero01 = ((numero01 * 100) + (numero02 * 100)) / 100

console.log(numero01)
console.log(Number.isInteger(numero01))

numero01 = numero01.toFixed(2)

console.log(numero01)
