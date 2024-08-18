'use client'

import Layout from "@/components/Layoult"
import { useState } from "react"

export default function Integracao() {
  const [codigo, setCodigo] = useState(1)
  const [cliente, setCliente] = useState({})

  async function obterCliente() {
    const resp = await fetch(`http://localhost:3000/api/cliente/${codigo}`)
    const dados = await resp.json()
    setCliente(dados)
  }

  // function obterCliente() {
  //   fetch(`http://localhost:3000/api/cliente/${codigo}`)
  //     .then(resp => resp.json())
  //     .then(dados => setCliente(dados))
  // }

  return (
    <Layout titulo='Integração API'>
      <div>
        <input
          style={{ color: 'black', padding: '10px', fontSize: '16px' }}
          type="number"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
        />
        <button
          style={{ color: 'black', padding: '10px', marginBottom: '40px', fontSize: '16px' }}
          onClick={obterCliente}
        >
          Obter Cliente
        </button>
      </div>
      <ul>
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Idade: {cliente.idade}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  )
}