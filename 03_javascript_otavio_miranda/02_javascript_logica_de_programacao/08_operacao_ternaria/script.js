// ? :
const pontuacaoUsuario = 999
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Usuario ViP` : `Usuário normal`
console.log(nivelUsuario)

const corUsuario = `Rosa`
const corPadrao = corUsuario || `Preta`
console.log(nivelUsuario, corPadrao)

/*
if(pontuacaoUsuario >= 1000) {
    console.log(`usuário VIP`)
} else {
    console.log(`Usuário normal`)
}
*/