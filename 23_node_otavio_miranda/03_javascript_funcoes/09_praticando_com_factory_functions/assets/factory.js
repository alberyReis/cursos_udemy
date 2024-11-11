function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },
        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta)
                if(!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = String(conta)
            } catch(e) {
                alert('Conta inválida')
                return
            }
        },
        btnParaDisplay(valor) {
            this.display.value += valor
        },
        clearDisplay() {
            this.display.value = ''
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target
                if(el.classList.contains('btn_num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn_clear')) {
                    this.clearDisplay()
                }
                if(el.classList.contains('btn_del')) {
                    this.apagaUm()
                }
                if(el.classList.contains('btn_eq')) {
                    this.realizaConta()
                }
            })
        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()