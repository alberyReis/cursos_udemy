// Escopo global
function retornaFuncao(nome) {
    return function() {
        return nome
    } 
}
const funcao = retornaFuncao('Luiz')
const funcao02 = retornaFuncao('João')
console.dir(funcao)
console.dir(funcao02)
console.log(funcao(), funcao02())