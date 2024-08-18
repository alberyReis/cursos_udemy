'use client'

import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario({ cliente, clienteMudou, cancelado }: FormularioProps) {
  const id = cliente?.id

  const [nome, setNome] = useState(cliente?.nome ?? '')
  const [idade, setIdade] = useState(cliente?.idade ?? '')

  return (
    <>
      <div>
        {id ? (
          <Entrada somenteLeitura texto="Código" valor={id} className="mb-4" />
        ) : false}
        <Entrada className="mb-4" texto="Nome" valor={nome} valorMudou={setNome} />
        <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />
      </div>
      <div className="flex justify-end mt-3">
        <Botao
          onClick={() => clienteMudou?.(new Cliente(nome, +idade, id))}
          cor="blue"
          className="mr-2"
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={cancelado} cor="gray">Cacelar</Botao>
      </div>
    </>
  )
}