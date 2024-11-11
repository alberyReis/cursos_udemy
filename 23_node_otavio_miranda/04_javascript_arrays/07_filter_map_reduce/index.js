// Retorne a dom do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter(valor => valor % 2 === 0)
const numerosDuplicados = numerosPares.map(valor => valor * 2)
const numeroReduzidos = numerosDuplicados.reduce(function(acumulador, valor) {
    acumulador = acumulador + valor
    return acumulador
}, 0)

console.log(numerosPares)
console.log(numerosDuplicados)
console.log(numeroReduzidos)
