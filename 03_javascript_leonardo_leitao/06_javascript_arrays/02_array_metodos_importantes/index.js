const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop() // Remove no fim do Array
console.log(pilotos)

pilotos.push('Verstappen') // Add no fim do Array
console.log(pilotos)

pilotos.shift() // Remove no inicio do Array
console.log(pilotos)

pilotos.unshift('Hamilton') // Add no inicio do Array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1)
console.log(pilotos)

// Slice retorna um novo Array
const algunsPilotos01 = pilotos.slice(2)
console.log(algunsPilotos01)

const algunsPilotos02 = pilotos.slice(1, 4)
console.log(algunsPilotos02)