let n01 = 10
let n02 = "2"

console.log(n01 * n02, typeof n01, typeof n02)
console.log(n01 / n02, typeof n01, typeof n02)
console.log(n01 + n02, typeof n01, typeof n02) // Cuidado! Concatenação.
console.log(n01 - n02, typeof n01, typeof n02)

// parseInt, parseFloat, Nuber()

n02 = parseInt(n02)

console.log(n01 + n02, typeof n01, typeof n02)

n01 = "10.234456"

n01 = parseInt(n01)

console.log(n01)

n01 = "10.99999"

n01 = parseFloat(n01)

console.log(n01)

n01 = "12vmnpwçkimnvrpiosnbiko"

n01 = parseFloat(n01)

console.log(n01)

n01 = "a12vmnpwçkimnvrpiosnbiko"

n01 = parseFloat(n01)

console.log(n01)

n01 = "12"

n01 = Number(n01)

console.log(n01)

n01 = "12a"

n01 = Number(n01)

console.log(n01)

n02 = 10
n02 = n02 + ""

console.log(n02, typeof n02)

n02 = 11
n02 = n02.toString()

console.log(n02, typeof n02)

// Decimal

n02 = 12
n02 = n02.toString(10)

console.log(n02, typeof n02)

// Hexadecimal

n02 = 15
n02 = n02.toString(16)

console.log(n02, typeof n02)

// Binario

n02 = 15
n02 = n02.toString(2)

console.log(n02, typeof n02)








