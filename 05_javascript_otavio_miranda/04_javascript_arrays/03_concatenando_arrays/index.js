const a01 = [1, 2, 3]
const a02 = [4, 5, 6]
const a03 = a01.concat(a02, [7, 8, 9], 'Albery')
console.log(a03)

const a04 = [...a01, ...a02, ...[7, 8, 9]]
console.log(a04)


