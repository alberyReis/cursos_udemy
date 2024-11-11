// Arrays são indexados por elemento
const alunos = ["Luiz", "Maria", "João"]
console.log(alunos)
console.log(alunos[0]) // Exibe
console.log(alunos[2])
alunos[0] = "Eduardo" // Altera
console.log(alunos)
alunos[3] = "Luiza" // Adiciona
console.log(alunos)
console.log(alunos.length) // Exibe qunatidade de itens do array
alunos[alunos.length] = "Luiza" // Adiciona no fim
alunos[alunos.length] = "Fábio"
alunos[alunos.length] = "Luana"
console.log(alunos)
alunos.push("Otavio") // Adiciona no fim
console.log(alunos)
alunos.unshift("Luiza") // Adiciona no fim
console.log(alunos)
alunos.pop() // Remove do fim
alunos.shift() // Remove do inicio
console.log(alunos)
const removidoInicio = alunos.shift() // Remove do inicio e coloca em uma variavel
const removidoFim = alunos.pop() // Remove do fim e coloca em uma variavel
console.log(removidoInicio)
console.log(removidoFim)
delete alunos[1] // Remove do indice indicado deixando um espaço vazio
console.log(alunos)
console.log(alunos[50]) // Indices que não fazem parte do array retornarão undefined
alunos.push("Luiza")
alunos.push("Eduardo")
console.log(alunos.slice(0, 3)) // Fatia arry
console.log(alunos.slice(0, -2))
console.log(typeof alunos) // Array em JavaScript é um objeto
console.log(alunos instanceof Array)
alunos[1] = "Albery"
console.log(alunos)



