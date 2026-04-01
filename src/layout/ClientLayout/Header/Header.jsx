import styles from './Header.module.css';
import logoImg from '../../../assets/react.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logoImg} alt="Logo" />
    </div>
  )
}

export default Header;