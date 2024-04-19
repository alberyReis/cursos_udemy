function compras(trabalho01, trabalho02) {
    const comprarSorvete = trabalho01 || trabalho02
    const comprarTv50 = trabalho01 && trabalho02
    // const comprarTv32 = !!(trabalho01 ^ trabalho02) // Bitwise xor
    const comprarTv32 = trabalho01 != trabalho02
    const manterSaudavel = !comprarSorvete // Operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))