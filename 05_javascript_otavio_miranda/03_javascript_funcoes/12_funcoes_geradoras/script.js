function* geradora01() {
    // Código qualquer
    yield 'Valor 01'
    // Código qualquer
    yield 'Valor 02'
    // Código qualquer
    yield 'Valor 03'
}

function* geradora02() {
    let i = 0
    while(true) {
        yield i
        i++
    }
}

const g02 = geradora02()
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)
console.log(g02.next().value)

function* geradora03() {
    yield 00
    yield 01
    yield 02
}

function* geradora04() {
    yield* geradora03()
    yield 03
    yield 04
    yield 05
}

const g04 = geradora04()
for(let valor of g04) {
    console.log(valor)
}

function* geradora05() {
    yield function() {
        console.log('Vim do y1')
    }
    return function() {
        console.log('Vim do return')
    }
    yield function() {
        console.log('Vim do y2')
    }
}

const g05 = geradora05()
const func01 = g05.next().value
const func02 = g05.next().value
func01()
func02()