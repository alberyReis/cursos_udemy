// Filter -> Sempre retorna um novo array, com a mesma quantidade de elementos ou menos
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const filtro = numeros.filter(numeros => numeros > 10)
console.log(filtro)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]

const nomes = pessoas.map(p => p.nome)
const pessoasComNomeGrande = nomes.filter(obj => obj.length >= 5)
console.log(pessoasComNomeGrande)

const idade = pessoas.map(i => i.idade)
const pessoasComMaisDe50 = idade.filter(i => i > 50)
console.log(pessoasComMaisDe50)

const letraA = nomes.filter(p => p.toLowerCase().endsWith('a'))
console.log(letraA)