var altura = 0
var largura = 0
var vidas = 1
var tempo = 50

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
  criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
  criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
  criaMosquitoTempo = 750
}

var criaMosquito = setInterval(posicaoRandomica, criaMosquitoTempo)

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}

window.addEventListener("resize", ajustaTamanhoPalcoJogo())

var conometro = setInterval(() => {
  if (tempo < 0) {
    clearInterval(conometro)
    clearInterval(criaMosquito)
    window.location.href = 'vitoria.html'
  } else {
    document.getElementById('conometro').innerHTML = tempo
    tempo--
  }
}, 1000)

function posicaoRandomica() {
  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

    if (vidas > 3) {
      window.location.href = 'fim_de_jogo.html'
    } else {
      document.getElementById(`v${vidas}`).src = './imagens/coracao_vazio.png'
      vidas++
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  var imagemMosquito = document.createElement('img')
  imagemMosquito.src = './imagens/mosca.png'
  imagemMosquito.classList.add(ajustaTamanhoAleatorio(), ladoAleatorio())
  imagemMosquito.style.left = `${posicaoX}px`
  imagemMosquito.style.top = `${posicaoY}px`
  imagemMosquito.style.position = 'absolute'
  imagemMosquito.id = 'mosquito'
  imagemMosquito.onclick = function () {
    this.remove()
  }
  document.body.append(imagemMosquito)

  console.log(ladoAleatorio())
}

function ajustaTamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}