import styles from './analysis_section.module.css'

export default function Graph() {
  return (
    <div className={styles.analysissection}>
        <h2>График изменения подписчиков</h2>
        <p>Подписчиков: <span className={styles.subscriberscount}>4 025 318</span></p>
        <div className={styles.subscribers}>
            <div className={styles.analysisgraph}>
                <canvas id="subscribersChart" width="700" height="200"></canvas>
            </div>
        </div>
    </div>
  )
}
