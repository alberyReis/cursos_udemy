const fs = require('fs')

fs.stat('pasta', (err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`É um arquivo? ${stats.isFile()}`)
  console.log(`É um diretorio? ${stats.isDirectory()}`)
  console.log(`É um link simbolico? ${stats.isSymbolicLink()}`)
  console.log(`Momento da criação: ${stats.ctime}`)
  console.log(`Quantidade de bytes do arquivo: ${stats.size}`)
})