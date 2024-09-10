let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

let letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

//...rest, ...spread
// indice        0   1   2   3   4   5   6   7   8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero, resto);
const [um, ,tres, ,cinco, ,sete] = numeros;
console.log(um, tres, cinco, sete);

//               0          1          2
//            0  1  2    0  1  2    1  2  3
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(num[1][2]);

const [,[,,seis]] = num;
console.log(seis);

const [lista01, lista02, lista03] = num;
console.log(lista03[2]);

