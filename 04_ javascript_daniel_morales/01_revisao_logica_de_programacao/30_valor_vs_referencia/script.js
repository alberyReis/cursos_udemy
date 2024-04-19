function alteraArray(a) {
    a.push("Adicionado")
}

let arr = ["a"]
console.log(arr)
alteraArray(arr)
console.log(arr)

function alteraPrimitivo(p) {
    p += " Adicionado"
    console.log(`Dentro da mensagem: ${p}`)
}

let msg = "Mensagem"
console.log(msg)
alteraPrimitivo(msg)
console.log(msg)