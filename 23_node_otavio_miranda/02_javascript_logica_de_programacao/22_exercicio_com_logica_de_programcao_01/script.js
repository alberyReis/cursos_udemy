/*
let a = 15
let b = 50

function maiorNumero (a, b) {
    if (a > b) {
        console.log(`O maior número é ${a}`)
    } else {
        console.log(`O maior número é ${b}`)
    }
}

maiorNumero(a, b)
*/

const max = (x, y) => x > y ? x : y
console.log(max(10, 20))