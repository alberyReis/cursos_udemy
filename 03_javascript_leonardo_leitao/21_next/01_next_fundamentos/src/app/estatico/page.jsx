import Layout from "@/components/Layoult";

export default function Estatico() {
  return (
    <Layout titulo='Conteúdo estático'>
      <div>{Math.random()}</div>
    </Layout>
  )
}