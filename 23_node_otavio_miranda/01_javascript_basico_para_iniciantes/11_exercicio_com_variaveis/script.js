let varA = "A" // B
let varB = "B" // C
let varC = "C" // A
console.log(varA, varB, varC)
let temp01 = varA
let temp02 = varB
let temp03 = varC
varA = temp02
varB = temp03
varC = temp01
console.log(varA, varB, varC)