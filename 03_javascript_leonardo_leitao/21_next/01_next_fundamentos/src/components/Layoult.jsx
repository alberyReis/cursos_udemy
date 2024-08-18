import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout({ children, titulo }) {
  return (
    <div className={styles.layoult}>
      <div className={styles.cabecalho}>
        <h1>{titulo ?? 'Mais um exemplo'}</h1>
        <Link href='/'>Voltar</Link>
      </div>
      <div className={styles.conteudo}>
        {children}
      </div>
    </div>
  )
}