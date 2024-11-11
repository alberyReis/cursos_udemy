class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome,
            this.ligado = false
    }
    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome),
            this.cor = cor,
            this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome),
        this.temWifi = temWifi
    }
    ligar() {
        console.log('Olha você, alterou o metodo ligar!')
    }
    falaOi() {
        console.log('Oi')
    }
}

const smartphone01 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
console.log(smartphone01)

const tablet01 = new Tablet('Ipad', true) 
console.log(tablet01)
tablet01.ligar()
tablet01.ligar()
tablet01.falaOi()

