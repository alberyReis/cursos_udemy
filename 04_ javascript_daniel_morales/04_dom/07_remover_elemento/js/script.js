(function(){
    const nomeUsuario = null
    const bemVindo = document.querySelector('.top-bar p')
    const pai = document.querySelector('.hero')
    if(nomeUsuario) {
        bemVindo.innerHTML += `<b>${nomeUsuario}</b>`
    } else {
        bemVindo.parentNode.remove()
    }
    bemVindo.pai.removeChild(bemVindo)
})()