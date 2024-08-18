import Layout from "@/components/Layoult"

export default function Codigo({ params }) {
  return (
    <Layout titulo='Navegação dinâmica'>
      <span>Código = {params.codigo}</span>
    </Layout>
  )

}