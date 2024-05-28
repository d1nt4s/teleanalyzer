import Link from 'next/link';
import styles from './Header.module.css'

const Header = () => {
    return (
      <header>
        <div className={styles.logo}><Link href="/">TeleAnalyser</Link></div>
        <div className={styles.searchbar}>
          <input type="text" placeholder="Поиск..." />
        </div>
        <div className={styles.authButtonContainer}>
        <button className={styles.authButton}>Вход</button>
        <button className={styles.authButton}>Регистрация</button>
      </div>
      </header>
    );
  };
  
  export default Header;