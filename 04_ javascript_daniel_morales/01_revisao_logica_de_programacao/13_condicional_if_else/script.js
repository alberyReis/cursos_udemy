//Acompanhado com os pais E ter comprado um bilhete

let idade = 21
let paisPresentes = false
let comprouBilhete = false
let podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete // Ordem de precedência

console.log(`Pode viajar ${podeViajar}`)

if(comprouBilhete) {
    console.log(`Pode viajar: ${podeViajar}`)
} else {
    console.log(`Não. Não comprou o bilhete`)
}

comprouBilhete = true

if(!comprouBilhete) {
    console.log(`Não. Não comprou o bilhete`)
} else {
    console.log(`Pode viajar: ${podeViajar}`)
}

idade = 17

if(!comprouBilhete) {
    console.log(`Não. Não comprou o bilhete`)
} else if(idade >= 18) {
        console.log(`Pode viajar: ${podeViajar}`)
    } else {
        console.log(`Opa!! É menor de idade.`)
    }

let n01 = 6
let n02 = 8
let media = (n01 + n02) / 2

console.log(`Media: ${media}`)
console.log((3 * 2) ** 2)

if(n01 === 0 || n02 === 0) {
    console.log(`Reprovado`)
} else if (media < 7) {
    console.log(`Reporvado> mas ainda há como recuperar.`)
} else {
    console.log(`Aprovado`)
}

console.log(`Saiu do bloco if`)


