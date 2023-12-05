const pessoa = {
    nome: 'Albery',
    sobrenome: 'Reis',
    idade: 34,
    endereco: {
        rua: 'Enedina Santos',
        numero: 256
    }
};

// Atribuição via desestruturação
const {nome: teste, sobrenome = ''} = pessoa;
console.log(teste, sobrenome);
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);
const {nome, ...resto} = pessoa;
console.log(resto);