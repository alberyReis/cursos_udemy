// Mais de um valor
const x = 10
const y = 'Albery'
const z = [1, 2]

console.log(x, y, z)

// Contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// Variavel entre strings
console.log('O nome de é %s e ele é Programador!', y)

// Limpar o console
setTimeout(() => {
  console.clear()
}, 2000)