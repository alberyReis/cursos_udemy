const frutas = ['Pera', 'Maçã', 'Uva']

/*
for (let i = 0; i <frutas.length; i++) {
    console.log(frutas[i])
}
*/

// For in lê os índices ou chaves do objeto

for (let i in frutas) {
    console.log(frutas[i])
}

const pessoa = {
    nome: 'Albery',
    sobrenome: 'Vieira Reis',
    idade: 34
}

for (let chave in pessoa) {
    console.log(chave +':', pessoa[chave])
}