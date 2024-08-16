import Link from "next/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador({ destino, texto, cor }) {
  return (
    <Link href={destino} >
      <div className={styles.navegador}
        style={{ backgroundColor: cor ?? 'dodgerblue' }}
      >
        {texto}
      </div>
    </Link >
  )
}