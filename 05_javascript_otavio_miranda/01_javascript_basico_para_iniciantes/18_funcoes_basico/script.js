function saudacao(nome) {
    return `Bom dia, ${nome}!`
}

saudacao("Albery")
saudacao("Maria")
saudacao("Felipe")

const variavel = saudacao("Luiz")
console.log(variavel)

function soma(x, y) {
    const resultado = x + y
    return resultado
}

console.log(soma(3, 1))
console.log(soma(5, 10))
console.log(soma(2, 2))
const resultado = soma(2, 2)
console.log(resultado)
console.log(soma("Albery ", "Reis"))

const raiz01 = function(n) {
    return n ** 0.5
}

console.log(raiz01(9))
console.log(raiz01(16))
console.log(raiz01(25))

const raiz02 = (n) => n ** 0.5

console.log(raiz02(9))
console.log(raiz02(16))
console.log(raiz02(25))