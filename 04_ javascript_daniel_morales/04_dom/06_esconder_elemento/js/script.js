(function(){
    const nomeUsuario = null
    const bemVindo = document.querySelector('.top-bar p')
    if(nomeUsuario) {
        bemVindo.innerHTML += `<b>${nomeUsuario}</b>`
    } else {
        bemVindo.parentNode.style.display = 'none'
    }
})()