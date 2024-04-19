const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas01 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas01.push(notas[i])
    }
}

console.log(notasBaixas01)

// Com callback
const notasBaixas02 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas02)

const notasMenorQue7 = nota => nota < 7
const notasBaixas03 = notas.filter(notasMenorQue7)

console.log(notasBaixas03)


