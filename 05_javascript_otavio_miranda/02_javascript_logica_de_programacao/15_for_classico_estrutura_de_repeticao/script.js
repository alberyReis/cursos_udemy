
console.log('Linha 0')
console.log('Linha 1')
console.log('Linha 2')
console.log('Linha 3')
console.log('Linha 4')
console.log('Linha 5')



for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        parImpar = 'par'
    } else {
        parImpar = 'impar'
    }
    console.log(`${i} é ${parImpar}`);
}


const frutas = ['Naçã', 'Pera', 'Uva', 'Goiaba', 'Acerola', 'Banana']
for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i} = `, frutas[i])
}