const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if(err) {
    console.log(err)
  }
  console.log(data)
})

const number1 = 10
const number2 = 15

console.log(number1 + number2)