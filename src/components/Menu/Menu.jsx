import home from '../../assets/icons/home-ativo.png'
import maisCurtidas from '../../assets/icons/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icons/mais-vistas-inativo.png'
import novas from '../../assets/icons/novas-inativo.png'
import surpreendaMe from '../../assets/icons/surpreenda-me-inativo.png'

import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="Imagem do ícone home" />
          <a href="/">Início</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisCurtidas} alt="Imagem do ícone Mais curtidas" />
          <a href="/">Mais curtidas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={maisVistas} alt="Imagem do ícone Mais vistas" />
          <a href="/">Mais vistas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={novas} alt="Imagem do ícone Novas" />
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surpreendaMe} alt="Imagem do ícone Surpreenda-me" />
          <a href="/">Surpreenda-me</a>
        </li>
      </ul>
    </nav>
  )
}