import Navegador from "@/components/Navegador";
import styles from "../styles/Home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navegador texto='Estiloso' destino='/estiloso' />
      <Navegador texto='Exemplo' destino='/exemplo' cor='darkviolet' />
      <Navegador texto='Jsx' destino='/jsx' cor='crimson'/>
      <Navegador texto='Navegação #01' destino='/navegacao' cor='violet' />
      <Navegador texto='Navegação #02' destino='/cliente/123' cor='green' />
    </div>
  )
}
