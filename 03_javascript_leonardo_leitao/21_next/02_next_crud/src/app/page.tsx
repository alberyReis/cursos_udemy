"use client"

import Botao from "@/components/Botao"
import Formulario from "@/components/Formulario"
import Layout from "@/components/Layout"
import Tabela from "@/components/Tabela"
import useClientes from "@/hooks/useClientes"

export default function Home() {
  const {
    cliente,
    clientes,
    tabelaVisivel,
    novoCliente,
    selecionarClientes,
    salvarCliente,
    excluirCliente,
    exibirTabela,
  } = useClientes()

  return (
    <div className="
      flex 
      h-screen 
      justify-center 
      items-center 
      bg-gradient-to-r 
      from-purple-500 
      to-blue-600"
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarClientes}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
            cliente={cliente}
          />
        )}
      </Layout>
    </div>
  )
}
