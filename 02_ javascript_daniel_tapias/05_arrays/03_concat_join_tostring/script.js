let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(arr1.toString())
console.log(arr1.join(' - '))

let arr3 = arr1.concat(arr2, 7, 8, 9, ['olá', 'mundo'])

console.log(arr3)

let arr4 = ['a', 'b', 'c']
let arr5 = [].concat(arr4)

arr5[arr5.length] = 'novo valor'

console.log(arr4)
console.log(arr5)
