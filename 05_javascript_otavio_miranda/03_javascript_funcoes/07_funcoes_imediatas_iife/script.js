// IIFE - Imediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Reis'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Albery'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(34, 95, 1.82)

