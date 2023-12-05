function funcionarOuNao(valor, chancheErro) {
    return new Promise((resolve, reject) => {
        try {
            confirm.log('temp')
            if (Math.random() < chancheErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (err) {
            reject(err)
        }
    })
}

funcionarOuNao('Testando', 0.5)
    .then(v => (`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro.: ${err}`)
    )
    .then(console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))