let x = 10
x = "Uma string."
console.log(x)

let msg01 = "Uma string."
let msg02 = 'Uma string.'
let msg03 = `Uma string.`

console.log(msg01)
console.log(msg02)
console.log(msg03)

console.log("2" * 2)

function teste() {
    console.log(this)
}
teste()

const teste02 = () => {
    console.log("Teste 02")
    console.log(this)
}

const obj = {
    n: 0,
    teste,
    teste02
}
obj.teste()
obj.teste02()