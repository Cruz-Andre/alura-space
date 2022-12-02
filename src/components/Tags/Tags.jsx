import styles from './Tags.module.scss'
import photos from '../Gallery/fotos.json'

export default function Tags({tags, photosFilter, setPhotosObj}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__list}>
        {tags.map(tag => (
          <li onClick={() => photosFilter(tag)} key={tag}>{tag}</li>
        ))}
        <li onClick={() => setPhotosObj(photos)}>Todas</li>
      </ul>
    </div>
  )
}