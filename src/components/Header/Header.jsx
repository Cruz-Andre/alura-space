import logo from 'assets/images/logo.png'
import search from 'assets/icons/search.png'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header1}>
      <img src={logo} alt="Logo do Alura Space" />
      <div className={styles.header1__container}>
        <input className={styles.header1__input} type='text' placeholder="O que você procura?" />
        <img src={search} alt="ícone de busca" />
      </div>
    </header>
  )
}