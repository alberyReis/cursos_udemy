console.log(typeof console)

console.log(Math.ceil(6.1))

const obj01 = {}
obj01.nome = "Bola01"
// obj01{"nome"} = "Bola02"
console.log(obj01.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj02 = new Obj("Cadeira")
const obj03 = new Obj("Mesa")
console.log(obj02.nome)
console.log(obj03.nome)
obj03.exec()

