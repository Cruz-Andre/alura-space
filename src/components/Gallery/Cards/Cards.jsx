import Card from './Card/Card'

import styles from './Cards.module.scss'

export default function Cards({photos}) {
  
  return (
    <ul className={styles.cards}>
      {photos.map(photo => (
        <Card key={photo.id} photo={photo} />
      ))}
    </ul>
  )
}