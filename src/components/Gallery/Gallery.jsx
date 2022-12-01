import Tags from '../Tags/Tags'
import fotos from './fotos.json'
import favorito from '../../assets/icons/favorito.png'
import open from '../../assets/icons/open.png'
import styles from './Gallery.module.scss'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <ul className={styles.gallery__cards}>
        {fotos.map(foto => (
          <li key={foto.id} className={styles.gallery__card}>
            <img className={styles.gallery__image} src={foto.imagem} alt={foto.titulo} />
            <p className={styles.gallery__description}>{foto.titulo}</p>
            <div>
              <p>{foto.creditos}</p>
              <span>
                <img src={favorito} alt='Ícone coração de curtir' />
                <img src={open} alt='Ícone de abrir imagem maior' />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}