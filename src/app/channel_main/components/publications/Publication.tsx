import styles from './publications.module.css'
import Image from 'next/image'

type Props = {
    publication: Publication
}

export default function Publication({ publication }: Props) {
  return (
    <div className={styles.publication}>

        <Image 
            src={publication.image_src} 
            width={500}
            height={500}
            alt="Publication Image" 
        />

        <p>
            {publication.text}
        </p>

        <div className={styles.metrics}>
            <span><Image src="/static/images/eye.png" width={500} height={500} alt="Просмотров"/>  {publication.views}К</span>
            <span><Image src="/static/images/repost.png" width={500} height={500}  alt="Поделилось"/> {publication.shared}</span>
            <span><Image src="/static/images/like.png" width={500} height={500}  alt="Реакций"/>  {publication.reactions}</span>
        </div>
    </div>
  )
}
