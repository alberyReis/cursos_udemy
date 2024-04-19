const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()
    await esperarPor(2000)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor * 2}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor * 3}...`)
    await esperarPor(2000)
    console.log(`Async/Await ${valor * 4}...`)
    return valor * 5
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()