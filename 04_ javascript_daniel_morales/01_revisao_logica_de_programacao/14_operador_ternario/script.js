let idade = 16
let paisPresentes = false
let comprouBilhete = false
let podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

/* let msgMaiorDeIdade = ""

 if(idade >= 18) {
    msgMaiorDeIdade = `É maior de idade`
} else {
    msgMaiorDeIdade = `È menor de 18 anos`
} */

let msgMaiorDeIdade = (idade >= 18) ? `É maior de idade` : `È menor de 18 anos`

console.log(msgMaiorDeIdade)