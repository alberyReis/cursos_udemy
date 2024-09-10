const nome = 'Albery'

let i = 0

while (i < nome.length) {
    console.log(nome[i])
    i++
}

console.log('Segue a vida...')

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = random(1, 50)
console.log(rand.toFixed(2))

const min = 1
const max = 50
rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)