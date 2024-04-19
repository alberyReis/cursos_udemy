function tratarErroELancar(erro) {
   // throw new Error("...")
   // throw 10
   // throw true
   // throw "Mensagem"
   throw {
    nome: erro.name,
    msg: erro.mesage,
    date: new Date
   }
}

function imprimirNomeGritando(obj) {
    try {
    console.log(obj.nome.toUpperCase() + "!!!")
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log("final")
    }
}

const obj = {name: "Roberto"}
imprimirNomeGritando(obj)