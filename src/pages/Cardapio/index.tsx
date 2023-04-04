import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import { ReactComponent as Logo } from 'assets/logoLithtleZ.svg'
import { useState } from 'react'


function Cardapio() {
  const [busca, setBusca] = useState("");

  return (
    <main>
      <nav className={styles.nav}>
        <Logo className={styles.logo} />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Codificando a sua fome!</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador 
          busca={busca} 
          setBusca={setBusca} 
        />
      </section>
    </main>
  )
}

export default Cardapio