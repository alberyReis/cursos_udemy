class ControleRemoto {
    constructor(tv) {
        this.tv = tv,
        this.volume = 0
    }
    // Método de intância
    aumentarVolume() {
        this.volume += 2
    }
    diminuirvolume() {
        this.volume -= 2
    }
    // Método estatico
    static soma(x, y) {
        return console.log(x + y)
    }
}

const controle1 =  new ControleRemoto('LG')
ControleRemoto.soma(2, 2)