const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(indice, delete, elem01, elem02, elem03)
const removidos01 = nomes.splice(3, 2, 'Luiz', 'Otávio')
console.log(nomes, removidos01)

// Pop
const removidos02 = nomes.splice(-1, 1)
console.log(nomes, removidos02)

// Shift
const removidos03 = nomes.splice(0, 1)
console.log(nomes, removidos03)

// Push
nomes.splice(nomes.length, 0, 'Otavio')
console.log(nomes)

// Unshift
nomes.splice(0, 0, 'Otavio')
console.log(nomes)

