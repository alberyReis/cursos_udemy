// Indexada     
let umaString = `Um texto`

console.log(umaString[4])
console.log(umaString[8])
console.log(umaString[-1])
console.log(umaString.charAt(4))
console.log(umaString.charAt(8))
console.log(umaString.charAt(-1))
console.log(umaString.concat(" em um " + "lindo dia."))
console.log(umaString + " em um lindo dia.")
console.log(`${umaString} em um lindo dia.`)
console.log(umaString.indexOf("texto"))
console.log(umaString.indexOf("Um"))
console.log(umaString.indexOf("o", 3))
console.log(umaString.lastIndexOf("o"))
console.log(umaString.lastIndexOf("m", 3))
console.log(umaString.match(/[a-z]/))
console.log(umaString.match(/[a-z]/g))
console.log(umaString.search(/[a-z]/))
console.log(umaString.search(/x/))

umaString = `O rato roeu a roupa do rei do rei de Roma.`

console.log(umaString.replace("Um", "Outra"))
console.log(umaString.replace(/Um/, "Outra"))
console.log(umaString.replace(/r/g, "#"))
console.log(umaString.length)
console.log(umaString.slice(2, 5))
console.log(umaString.slice(2, 6))
console.log(umaString.slice(- 3))
console.log(umaString.slice(32))
console.log(umaString.slice(- 5))
console.log(umaString.slice(- 5, umaString.length - 1))
console.log(umaString.slice(- 5, - 1))
console.log(umaString.substring(umaString.length - 5, umaString.length - 1))
console.log(umaString.split(" "))
console.log(umaString.split("r"))
console.log(umaString.split(" ", 2))
console.log(umaString.split(" ", 3))
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())


