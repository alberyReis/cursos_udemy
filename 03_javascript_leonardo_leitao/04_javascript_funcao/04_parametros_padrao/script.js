function soma01(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma01(), soma01(3), soma01(1, 2, 3), soma01(0, 0, 0))

// Estrategia 2, 3 e 4 para gerar valor padrâo
function soma02(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma02(), soma02(3), soma02(1, 2, 3), soma02(0, 0, 0))

// Valor padrâo do ES2015
function soma03(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma03(), soma03(3), soma03(1, 2, 3), soma03(0, 0, 0))