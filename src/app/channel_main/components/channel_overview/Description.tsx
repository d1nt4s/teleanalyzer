import styles from '../../channel_main.module.css'
import Link from "next/link"

export default function Description() {
  return (
    <div className={styles.description}>
        <p>⚡️Все самое важное в одном канале. Новости России и Мира</p>
        <p>Предложить новость: <Link href="https://t.me/pryamoy_bot" className="tag">@pryamoy_bot</Link></p>
        <p>Обратная связь: <Link href="https://t.me/pryamoy_bot" className="tag">@rob_lower</Link></p>
    </div>
  )
}
