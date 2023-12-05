function calcularIMC(peso, altura) {
    if(peso === undefined || altura === undefined) {
        throw Error('need two parameters: weight and height')
    }

    return peso / (altura * altura)
}

function classificaIMC(imc) {
    if(imc < 16.9) {
        return 'Muito abaixo do peso'
    } else if(imc <= 18.4) {
        return 'Abaixo do peso'
    } else if(imc <= 24.9) {
        return 'Peso normal'
    } else if(imc <= 29.9) {
        return 'Acima do peso'
    } else if(imc <= 34.9) {
        return 'Obesidade 01'
    } else if(imc <= 40) {
        return 'Obesidade 02'
    } else {
        return 'Obesidade 03'
    }
}

let imc = calcularIMC(40, 1.65)
console.log(imc)
console.log(classificaIMC(imc))
