function Calculadora() {
    this.display = document.querySelector('.display')
    this.inicia = () => {
        this.capturaCliques()
        this.capturaEnter()
    }
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target
            if (element.classList.contains('btn_num')) this.addNumDisplay(element)
            if (element.classList.contains('btn_clear')) this.clear(element)
            if (element.classList.contains('btn_del')) this.del(element)
            if (element.classList.contains('btn_eq')) this.realizaConta(element)
        })
    }
    this.capturaEnter = () => {
        document.addEventListener('keypress', element => {
            if(element.keyCode === 13) {
                this.realizaConta()
            } 
        })
    }
    this.addNumDisplay = element => {
        this.display.value += element.innerText
        this.display.focus()
    }
    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0, -1)
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if(!conta) {
                alert('Conta inválida')
                return
            }
            this.display.value = conta
        } catch(error) {
            alert('Conta inválida')
            return
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()