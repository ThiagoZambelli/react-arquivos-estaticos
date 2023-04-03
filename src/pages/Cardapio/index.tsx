import styles from './Cardapio.module.scss';
import {ReactComponent as Logo} from 'assets/logoLithtleZ.svg'


function Cardapio() {
  return (
    <main>
        <nav className={styles.nav}>
          <Logo  className={styles.logo}/>
        </nav>
    </main>
  )
}

export default Cardapio