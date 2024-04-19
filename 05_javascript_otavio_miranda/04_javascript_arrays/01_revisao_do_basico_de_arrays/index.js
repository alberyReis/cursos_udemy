const nomes01 =  ['Eduardo', 'Maria', 'Joana']
nomes01[2] = 'João'
delete nomes01[2]
console.log(nomes01)

const nomes02 =  ['Eduardo', 'Maria', 'Joana']
novo01 = (nomes02)
novo01.pop()
console.log(nomes02)
console.log(novo01)

const nomes03 =  ['Eduardo', 'Maria', 'Joana']
novo02 = [...nomes03]
novo02.pop()
console.log(nomes03)
console.log(novo02)

const nomes04 =  ['Eduardo', 'Maria', 'Joana']
console.log(nomes04.length)

const nomes05 =  ['Eduardo', 'Maria', 'Joana']
const removido01 = nomes05.pop()
console.log(nomes05, removido01)

const nomes06 =  ['Eduardo', 'Maria', 'Joana']
const removido02 = nomes06.shift()
console.log(nomes06, removido02)

const nomes07 =  ['Eduardo', 'Maria', 'Joana']
nomes07.push('João')
console.log(nomes07)

const nomes08 =  ['Eduardo', 'Maria', 'Joana']
nomes08.unshift('João')
nomes08.unshift('Wallace')
console.log(nomes08)

const nomes09 =  ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
const novo03 = nomes09.slice(1, -1)
console.log(novo03)

const nome01 =  'Albery Vieira Reis'
const nomes10 = nome01.split(' ')
console.log(nomes10)

const nome02 =  'Albery, Vieira, Reis'
const nomes11 = nome02.split(',')
console.log(nomes11)
nome03 = nomes11.join(' ')
console.log(nome03)
