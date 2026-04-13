import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  const resumeUrl = "https://drive.google.com/file/d/1OMZEhmhCSMZhqpzH3BSOqh5R1rpjPlr-/view?usp=sharing";

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroH1}>Hi, I&apos;m <span className={styles.highlight}>Suraj Sonawane</span></h1>
          <h2 className={styles.heroH2}>MERN Stack Developer (1.6+ Years)</h2>
          <div className={styles.divider}></div>
          <p className={styles.heroP}>Building scalable, production-grade web applications</p>
          <p className={styles.heroP}>React.js | Node.js | Express.js | MongoDB | REST APIs</p>
        </div>
        
        <div className={styles.heroButtons}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
          >
            <FaDownload /> Download Resume
          </a>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
          >
            View My Work
          </Link>
        </div>
        
        <div className={styles.scrollIndicator}>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            {/* <FaArrowDown className={styles.bounce} /> */}
            <span className={styles.scrollText}>Scroll Down</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
