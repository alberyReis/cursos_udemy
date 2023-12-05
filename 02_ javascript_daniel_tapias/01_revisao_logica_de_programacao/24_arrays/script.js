// Maneira formal
const arr01 = new Array()
console.log(arr01)
const arr02 = new Array(true, "Daniel", 28, new Array(2, 4, 10))
console.log(arr02)
arr01[0] = "Daniel"
arr01[1] = 40
console.log(arr01)
console.log(arr02[3][arr02[3].length - 1])

// Sintaxe literal
const arr03 = ["Daniel", 40, [3, 6, 9], true]
console.log(arr03)
console.log(arr03[2])
console.log(arr03[2][0])

// Adicioanando elementos numa array
arr03[4] = "Novo valor 01."
console.log(arr03)
arr03[arr03.length] = "Novo valor 02"
console.log(arr03)
arr03.push("Push")
console.log(arr03)
arr03.push("a", "b", "c")
console.log(arr03)
console.log(arr03[6])
let n = 6
console.log(arr03[n])


