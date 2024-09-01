function salvar(req, res) {
  res.send('Usauarui > salvar')
}
function obter(req, res) {
  res.send('Usuario > obter')
}

module.exports = { salvar, obter }