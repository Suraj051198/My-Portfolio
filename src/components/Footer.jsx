import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.backToTop}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.topLink}
        >
          <FaArrowUp className={styles.topIcon} />
        </Link>
      </div>
      
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <h3 className={styles.footerName}>Suraj Sonawane</h3>
          <p className={styles.footerDescription}>Full Stack Developer based in Pune, India</p>
        </div>
        
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/Suraj051198" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <FaGithub className={`${styles.socialIcon} ${styles.socialIconGithub}`} />
          </a>
          <a 
            href="https://www.linkedin.com/in/sonawane-suraj/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <FaLinkedin className={`${styles.socialIcon} ${styles.socialIconLinkedin}`} />
          </a>
          <a 
            href="mailto:surajsonawane172@gmail.com" 
            aria-label="Email"
            className={styles.socialLink}
          >
            <FaEnvelope className={`${styles.socialIcon} ${styles.socialIconEmail}`} />
          </a>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Suraj Sonawane. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
