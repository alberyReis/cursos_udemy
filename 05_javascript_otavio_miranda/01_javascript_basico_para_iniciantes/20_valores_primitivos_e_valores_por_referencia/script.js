/*
Primitivos (imutaveis) - string, number, boolean, undefined,
null, bigint, symbol
Valores copiados
*/
let a = 10
let b= 10
console.log(a, b)
a = 20
console.log(a, b)
/*
Referência (mutável) - array, object,function
Passados por referência
*/
let c = [1, 2, 3]
let d = [...c]
let e = d
console.log(c, d, e)
c.push(4)
console.log(c, d, e)
d.pop()
console.log(c, d, e)
c.push("Albery")
console.log(c, d, e)

const f = {
    nome: "Luiz",
    sobrenome: "Otávio"
}

const g = f
console.log(f, g)
f.nome = "João"
console.log(f, g)
h = {...f}
f.nome = "Albery"
console.log(f, g, h)