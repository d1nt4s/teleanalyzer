/* Нужно разобраться с подключениями стилей, либо для каждого модуля свой стиль, либо проверить что многомерное подключение одного файла не накладывается и не ест ресурсы */
import styles from '../../channel_main.module.css'
import Image from 'next/image'

export default function Avatar() {
  return (
    <div className={styles.avatar}>
        <Image 
          src="https://static7.tgstat.ru/channels/_0/71/71cf36170ca5f8d629afe63a6a509396.jpg" 
          width={500}
          height={500}
          alt="Channel Avatar" 
        />
    </div>
  )
}
