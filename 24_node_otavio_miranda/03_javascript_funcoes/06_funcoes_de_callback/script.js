function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max-min) + min
    return Math.floor(num)
}

function f01(callback) {
    setTimeout(function() {
        console.log('f01')
        if(callback) callback()
    }, rand())
}

function f02(callback) {
    setTimeout(function() {
        console.log('f02')
        if(callback) callback()
    }, rand())
}

function f03(callback) {
    setTimeout(function() {
        console.log('f03')
        if(callback) callback()
    }, rand())
}

f01(f1Callback)

function f1Callback() {
    f02(f2Callback)
}

function f2Callback() {
    f03(f3Callback)
}

function f3Callback() {
    console.log('Olá mundo')
}