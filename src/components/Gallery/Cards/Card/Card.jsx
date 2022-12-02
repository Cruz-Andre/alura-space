import fav from 'assets/icons/favorito.png'
import open from 'assets/icons/open.png'

import styles from './Card.module.scss'

export default function Card({ photo }) {
  return (
    <li key={photo.id} className={styles.card}>
      <img className={styles.card__image} src={photo.imagem} alt={photo.titulo} />
      <p className={styles.card__description}>{photo.titulo}</p>
      <div>
        <p>{photo.creditos}</p>
        <span>
          <img src={fav} alt='Ícone coração de curtir' />
          <img src={open} alt='Ícone de abrir imagem maior' />
        </span>
      </div>
    </li>
  )
}