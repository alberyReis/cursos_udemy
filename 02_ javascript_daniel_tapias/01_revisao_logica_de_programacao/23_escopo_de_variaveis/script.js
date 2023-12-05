let n = "Global."

function mostraN() {
   let  n01 = `n01 Local`
    
        if(true) {
            var n02 = `var n1 dentro do if com let`
        }   

        console.log(n02)
        console.log(`Valor de n01: ${n01}`)
        console.log(`Valor de n02: ${n02}`)
}

mostraN()

console.log(`Valor de n no escopo global: ${n}`)

function fnExt() {

    let n = `n local da função fnExt`

    function fnInt() {
        n = `n local da função fnInt`
        console.log(n)
    }

    fnInt()

    console.log(n)
}

fnExt()
