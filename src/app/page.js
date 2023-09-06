import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  const href = "/links/detailArticle";
  return (
    <main className={styles.main}>
      <center><Link href={href}>Detail Article</Link></center>
    </main>
  )
}
