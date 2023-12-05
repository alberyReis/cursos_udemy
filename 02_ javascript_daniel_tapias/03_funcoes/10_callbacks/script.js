const teste = function(cb) {
    console.log('Função teste')
    console.log(cb)
    typeof cb === "function" && cb(30)
}

const fn = function(param) {
    console.log('Função anônima de callback')
    console.log(param)
}

// fn(30)
teste(fn)
