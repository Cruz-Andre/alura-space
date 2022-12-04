import logo from 'assets/images/logo.png'
import iconSearch from 'assets/icons/search.png'
import styles from './Header.module.scss'

export default function Header({search, setSearch}) {
  return (
    <header className={styles.header1}>
      <img src={logo} alt="Logo do Alura Space" />
      <div className={styles.header1__container}>
        <input 
          className={styles.header1__input} 
          type='text' 
          placeholder="O que você procura?"
          value={search} 
          onChange={(event) => setSearch(event.target.value)}
        />
        <img src={iconSearch} alt="ícone de busca" />
      </div>
    </header>
  )
}