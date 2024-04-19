function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }
            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

function baixarPagina() {
    const emCache = true
    if(emCache) {
        return Promise.resolve('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixarPagina()
    .then(dadosPagina => [
        console.log(dadosPagina)
    ])
    .catch(e => console.log('ERRO', e))
