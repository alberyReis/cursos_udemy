const a = 1
const b = 2
const c = 3

const obj01 = {a: a, b: b, c: c}
const obj02 = {a, b, c}
console.log(obj01, obj02)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj03 = {}
obj03[nomeAttr] = valorAttr
console.log(obj03)

const obj04 = {[nomeAttr]: valorAttr}
console.log(obj04)

const obj05 = {
    funcao01: function() {
        // ...
    },
    funcao02() {
        // ...
    }
}

console.log(obj05)