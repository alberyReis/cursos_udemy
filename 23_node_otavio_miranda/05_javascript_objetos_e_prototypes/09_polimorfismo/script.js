// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        this.verSaldo()
        console.log('Saldo insufuciente')
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

const contaCorrente = new ContaCorrente(11, 22, 0, 100)
contaCorrente.depositar(10)
contaCorrente.sacar(110)
contaCorrente.sacar(1)

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.constructor = ContaPoupanca

const contaPoupanca = new ContaPoupanca(12, 33, 0)
console.log('=============================')
contaPoupanca.depositar(10)
contaPoupanca.sacar(110)
contaPoupanca.sacar(1)
