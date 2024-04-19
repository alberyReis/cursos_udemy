const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(evento) {
    return evento * 2
})

console.log(resultado)

const soma10 = evento => evento + 10
const triplo = evento => evento * 3
const paraDinheiro = evento => `R$ ${parseFloat(evento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)