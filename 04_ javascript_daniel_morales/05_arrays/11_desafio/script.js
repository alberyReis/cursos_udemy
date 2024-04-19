function sum() {
    const numbers = [...arguments]
    console.log(numbers)
    return numbers.reduce((sum, atual) => {
        return sum + atual
    })
}

function avarege() {
    return sum(...arguments) / arguments.length
}

let soma = sum(1, 2, 3, 4, 5)
console.log(soma)

let media = avarege(1, 2, 3, 4, 5)
console.log(media)