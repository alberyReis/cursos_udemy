function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj01 = new MeuObjeto
const obj02 = new MeuObjeto
console.log(obj01.__proto__ === obj02.__proto__)
console.log(MeuObjeto.prototype === obj01.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! meu nome é ${this.nome}`)
}

obj01.falar()

obj02.nome = 'Rafael'
obj02.falar()

const obj03 = {}
obj03.__proto__ = MeuObjeto.prototype
obj03.nome = 'Obj03'
obj03.falar()

// resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)