function sum() {
    const numbers = []
    Array.prototype.forEach.call(arguments, function(argument) {
        numbers.push(argument)
    })
    return numbers.reduce((sum, atual) => {
        return sum + atual
    }, 0)
}

console.log(sum(1, 2, 3, 4, 5))

function avarege() {
    const soma = sum.apply(null, arguments)
    console.log(soma)
    return soma / arguments.length
}

console.log(avarege(1, 2, 3, 4, 5))