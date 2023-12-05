const mediaAnual = function(n1, n2, n3, n4) {
    if(n1, n2, n3, n4 === undefined) {
        return 'Digite os quatro valores referentes a media anual'
    }

    if(n1 >= 10.01 || n2 >= 10.01 || n3 >= 10.01 || n4 >= 10.01) {
        return 'Digite apenas valores entre 0 e 10'
    }

    if(n1, n2, n3, n4 !== 'number') {
        return 'Aceitavel apenas números'
    }

    const soma = n1 + n2 + n3 + n4
    const mediaAnual = soma / 4
    
    if(mediaAnual > 7) {
        return `Parabéns sua média é ${mediaAnual} vocé está aprovado`
    }

    return `Sinto muito sua média é ${mediaAnual} vocé está reprovado`
}

console.log(mediaAnual("10", 9, 10, 4))