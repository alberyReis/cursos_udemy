function fizzBuzz01 () {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' FizzBuzz')
        } else if (i % 3 === 0) {
            console.log(i + ' Fizz')
        } else if (i % 5 === 0) {
            console.log(i + ' Buzz')
        } else {
            console.log(i, i);
        }
    }

};

fizzBuzz01();

function fizzBuzz02 (numero) {
    if (typeof numero !== 'number') return numero
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero
}

console.log('a', fizzBuzz02('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz02(i))
}

