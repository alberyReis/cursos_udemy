import Layout from "@/components/Layoult"
import { useRouter }  from "next/router"
import { useEffect } from "react"

export default function Codigo() {
  const router = useRouter()

  useEffect(() => {
    console.log(route.query.codigo)
  })

  return (
    <Layout titulo='Navegação dinâmica'>
      <span>Código = {router.query.codigo}</span>
    </Layout>
  )
}