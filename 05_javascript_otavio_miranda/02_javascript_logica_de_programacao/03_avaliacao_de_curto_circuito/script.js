/*
&& = false && true = false "@ valor mesmo"
|| = true || false = vai retornar "o valor verdadeiro"
FALSY
*false
0
'' "" ``
null / undefined
NaN
*/
console.log(`Luiz Otavio` && 0 && `Maria`)
console.log(`Luiz Otavio` && true && `Maria`)
console.log(`Luiz Otavio` && true && NaN)
console.log(`Çuiz` && `Maria`)
console.log(`Çuiz` && '' && `Maria`)
console.log(`Çuiz` && undefined && `Maria`)
function falaOi() {
    return `Oi`
}

const vaiExecutar = false
console.log(vaiExecutar && falaOi())

console.log(0 || false || null || `Luiz Otavio` || true)
const corUsuario = `vermelho`
const corPadrao = corUsuario || `preto`

console.log(corPadrao)

const a = 0
const b = null
const c = `false`
const d = false
const e = NaN
console.log(a || b || c || d || e)

