let arr = [1, 2, 3]
console.log(arr.reverse())
console.log(arr)


const soma = arr.reduce(function (acumulador, atual, i, _arr) {
    console.log('i: ', i)
    console.log(_arr)
    return acumulador + atual
}, 0)
console.log(soma)
console.log(arr)

const nomes = ['Daniel', 'Maria', 'Joana', 'João']

let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
    let primeiraLetra = nomeAtual[0]
    if (nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomesPorOrdem)

