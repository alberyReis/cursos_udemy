function fn(cb) {
    console.log('Executar ação de callback')
    console.log(typeof cb)
    typeof cb === 'function' && cb()
}

function callback() {
    console.log('funcao passada por parametro')
}

fn(callback)

const obj = {
    callback 
}

obj.callback()

function fn02(n1) {
    return function(n2) {
        return n1 * n2
    }
}

const funcao02 = fn02(10)
const mult = funcao02(2)

console.log(mult)

function fn03() {
    fn03.count++
    return function() {
        console.log('funcao retornada por parametro')
    }
}

fn03.count = 0

const funcao03 = fn03()
const funcao03a = fn03()
const funcao03b = fn03()
const funcao03c = fn03()
funcao03()
console.log(fn03.count)

