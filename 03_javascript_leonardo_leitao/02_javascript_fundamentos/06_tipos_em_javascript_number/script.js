const peso01 = 1.0
const peso02 = Number("2.0")

console.log(peso01, peso02)
console.log(Number.isInteger(peso01))
console.log(Number.isInteger(peso02))

const avaliacao01 = 9.871
const avaliacao02 = 6.871

const total = avaliacao01 * peso01 * avaliacao02 * peso02
const media = total / (peso01, peso02)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(media)
console.log(typeof media)
console.log(typeof Number)