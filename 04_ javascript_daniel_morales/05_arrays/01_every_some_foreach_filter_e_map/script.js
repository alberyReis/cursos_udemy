const arr = [1, 5, 10, 'olá', true]

let soNumeros = arr.some(function(el) {
    return typeof el === 'number'
})

const arr1 = arr.filter(function(el, i, _arr) {
    return typeof el === 'number'
})

arr.forEach(function (el, i, _arr) {
    console.log(el + ' = el')
})

const arr2 = arr1.map((el, i, _arr) => el * el)

console.log(arr + ' = arr')
console.log(arr1 + ' = arr1')
console.log(arr2 + ' = arr2')