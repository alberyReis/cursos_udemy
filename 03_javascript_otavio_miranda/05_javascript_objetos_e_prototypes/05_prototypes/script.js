/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro.
Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.
Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função constrtura que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até topo (null) até encontrar (ou não) tal membro.
*/


// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
} 

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
const data = new Date() // <- Date = Função contrutora

console.log(pessoa1.nomeCompleto())
console.log(data)
