import Button from 'components/Button/Button'
import popularPhotos from './popular-photos.json'

import styles from './Popular.module.scss'

export default function Popular() {
  return (
    <aside className={styles.popular}>
      <h2>Populares</h2>
      <ul className={styles.popular__images}>
        {popularPhotos.map(photo => (
          <li key={photo.id}>
            <img src={photo.path} alt={photo.alt} />
          </li>
        ))}
      </ul>
      <Button>Ver mais fotos</Button>
    </aside>
  )
}