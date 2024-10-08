import Cliente from "@/core/Cliente"
import ClienteRepositorio from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import ColecaoCliente from "@/backend/db/ColecaoCliente"
import useTabelaForm from "./useTabelaForm"

export default function useClientes() {
  const {
    tabelaVisivel,
    exibirTabela,
    exibirFormulario,
  } = useTabelaForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const repo: ClienteRepositorio = new ColecaoCliente()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarClientes(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    tabelaVisivel,
    novoCliente,
    selecionarClientes,
    salvarCliente,
    excluirCliente,
    obterTodos,
    exibirTabela,
  }

}