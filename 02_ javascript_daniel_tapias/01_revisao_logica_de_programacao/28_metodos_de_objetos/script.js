const produto = {
    nome: "Caneta",
    qtd: 10,
    comprar(n) {
        console.log(this)
        if (n > this.qtd) {
            return "Quantidade não disponivel"
        }
        this.qtd -= n
    },
    teste01: function() {
        console.log("teste01")
        console.log(this)
    },
    teste02: () => {
        console.log("teste02")
        console.log(this)
    }
}

produto.comprar(3)
// console.log(produto)

produto.comprar(13)
// console.log(produto)

produto.teste01()
produto.teste02()



