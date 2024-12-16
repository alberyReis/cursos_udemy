(function() {
  'use strict'

  const txtTitulo = document.getElementById('txtTitulo')
  const btn = document.getElementById('btn')
  const formCadastro = document.querySelector('.formCadastro')

  formCadastro.addEventListener('submit', function(e) {
    e.preventDefault()

    if(!txtTitulo.value) {
      showErrorMessage('Preencha todos os campos', function() {
        txtTitulo.focus()
      })
    }

    console.log(txtTitulo.value)
  })

  const feedbackMessage = document.getElementById('feedbackMessage')
  const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName('button')[0]

  function showErrorMessage(msg, cb) {
    feedbackMessage.classList.add('show')
    feedbackMessage.getElementsByTagName('p')[0].textContent = msg

    feedbackMessageCloseBtn.focus()

    function hideErrorMessage() {
      console.log('clicado close')
      feedbackMessage.classList.remove('show')
      feedbackMessageCloseBtn.removeEventListener('click', hideErrorMessage)
      feedbackMessageCloseBtn.removeEventListener('keyup', pressedKeyboardOnBtn)

      if (typeof cb === 'function') {
        cb()
      }
    }
    function pressedKeyboardOnBtn(e) {
      if(e.keyCode === 27) {
        hideErrorMessage()
      }
    }

    feedbackMessageCloseBtn.addEventListener('click', hideErrorMessage)

    feedbackMessageCloseBtn.addEventListener('keyup', pressedKeyboardOnBtn)
  }

  

  const txtDescricao = document.getElementById('txtDescricao')
  const contadorContainer = document.getElementById('contador')
  const resta = contadorContainer.getElementsByTagName('span')[0]
  const maxima = txtDescricao.maxLength

  mostraNumero(maxima)

  contadorContainer.style.display = 'block'

  function checkLength() {
    let numeroLetrasDigitadas = this.value.length
    let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas)
    mostraNumero(caracteresRestantes)
  }

  function mostraNumero(numero) {
    resta.textContent = numero
  }

  txtDescricao.addEventListener('input', checkLength)

  btn.disabled = true

  const chkAceito = document.getElementById('chkAceito')
  chkAceito.addEventListener('change', function() {
    btn.disabled = !this.checked
  })
})()