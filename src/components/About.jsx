import { Link } from 'react-scroll';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderH2}>About Me</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <div className={styles.imageContainer}>
            <img 
              src="/my-pic.png" 
              alt="Suraj Sonawane - Full Stack Developer" 
              className={styles.profileImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400?text=Suraj+Sonawane";
              }}
            />
          </div>
        </div>
        <div className={styles.aboutText}>
          <h3 className={styles.aboutTextH3}>MERN Stack Developer | Pune, India</h3>
          <p className={styles.aboutTextP}>
            I&apos;m a passionate Full Stack Web Developer with 1.6+ years of professional experience building and deploying scalable, production-grade web applications. 
            I specialize in React.js, Node.js, Express.js, MongoDB, and REST API integrations.
          </p>
          
          <div className={styles.aboutHighlightsHeader}>
            <h4 className={styles.aboutHighlightsHeaderH4}>💼 Professional Experience:</h4>
          </div>
          
          <ul className={styles.aboutList}>
            <li className={styles.aboutListLi}>Currently working at <strong>SEV Technologies</strong> - developing SEV Mobility application</li>
            <li className={styles.aboutListLi}>Previously at <strong>KONCPT AI</strong> - built GrownXT.AI marketing automation platform with 5 social media API integrations</li>
            <li className={styles.aboutListLi}>Interned at <strong>Giri&apos;s Tech Hub</strong> - built responsive full-stack applications</li>
          </ul>

          <div className={styles.aboutHighlightsHeader}>
            <h4 className={styles.aboutHighlightsHeaderH4}>🎯 Key Achievements:</h4>
          </div>

          <ul className={styles.aboutList}>
            <li className={styles.aboutListLi}>Integrated 5 social media APIs (Facebook, Instagram, LinkedIn, X/Twitter, YouTube)</li>
            <li className={styles.aboutListLi}>Built full-featured content publishing & scheduling system</li>
            <li className={styles.aboutListLi}>Developed complete support ticketing system with admin workflows</li>
            <li className={styles.aboutListLi}>Created real-time dispatch tracking module for live shipment updates</li>
          </ul>
          
          <div className={styles.aboutButtons}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`${styles.aboutButton} ${styles.aboutButtonPrimary}`}
            >
              Contact Me
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`${styles.aboutButton} ${styles.aboutButtonSecondary}`}
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
