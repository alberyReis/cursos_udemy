import Layout from "@/components/Layoult";
import Cabecalho from "../../components/Cabecalho";

export default function Exemplo() {
  return (
    <Layout titulo='Usando componentes'>
      <div>
        <h1>Exemplo</h1>
        <Cabecalho titulo='Next.js & React' />
        <Cabecalho titulo='Aprenda Next.js na prática' />
      </div>
    </Layout>
  )
}