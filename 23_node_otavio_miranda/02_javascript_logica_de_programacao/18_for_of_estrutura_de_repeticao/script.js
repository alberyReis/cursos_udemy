// For clássico - Geralmente com iteraveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

const nome = ['Albery', 'Vieira', 'Reis']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i])
}

for (let valor of nome) {
    console.log(valor)
}

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})

