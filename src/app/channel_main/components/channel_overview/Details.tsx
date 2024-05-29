import styles from './channel_overview.module.css'
import Link from "next/link"

export default function Details() {
  return (
    <div className={styles.details}>
        <h1>Прямой Эфир</h1>
        <p><Link href="https://t.me/novosti_efir" className="tag">#novosti_efir</Link></p>
        <p><Link href="/channel_main/stats/" className={styles.linkStat}>Посмотреть статистику</Link></p>
    </div>
  )
}
