import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
  
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.logoLink}
          >
            Suraj Sonawane
          </Link>
        </div>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li key={item}>
              <Link 
                activeClass={styles.active}
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveSection(item)}
                className={`${styles.navLink} ${activeSection === item ? styles.active : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
