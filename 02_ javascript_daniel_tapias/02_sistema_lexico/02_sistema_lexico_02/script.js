// "use strict" deixa o JS nasi seguro
"use strict"
// let y = 10

function foo() {
    // "use strict"
    let x = 20
}
foo()
// console.log(y)

// function dobrar(n01, n01) {
    // "use strict"
    // return n01 * n01
// }
       
// console.log(dobrar(5))

function teste() {
    // "use strict"
    console.log(this)
    // this.a = "a"
}
teste()

// "use strict"
let msg = "Uma string."
msg.count = 0
console.log(msg)