import styles from './top_publications.module.css'
import Image from 'next/image'

type Props = {
    publication: Publication
}

export default function TopPublications( { publication }: Props) {
  return (
    <div className={styles.popularpost}>

        <Image 
            src={publication.image_src}
            width={500}
            height={500}
            alt="Small Image 1"
        />

        <div className={styles.posttext}>
            <p>
                {publication.text}
            </p>
        </div>
    </div>
  )
}
