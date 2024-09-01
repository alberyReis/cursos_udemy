const os = require('os')

console.log(`Quantos CPUs? ${os.cpus()}`)
console.log(`Quanto de memoria livre? ${os.freemem()}`)
console.log(`Qual o diretorio? ${os.homedir()}`)
console.log(`Qual o tipo de SO? ${os.type()}`)

