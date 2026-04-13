import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Certificates.module.css';

const Certificates = () => {
  const certificates = [
    {
      title: "SQL (Intermediate)",
      provider: "HackerRank",
      description: "Complex joins, unions, and sub-queries",
      link: "https://www.hackerrank.com/certificates/9020d928c317",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "CSS (Basic)",
      provider: "HackerRank",
      description: "Cascading, inheritance, text styling, layouts, and box model",
      link: "https://www.hackerrank.com/certificates/e60b2407db09",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "Java (Basic)",
      provider: "HackerRank",
      description: "Classes, data structures, inheritance, and exception handling",
      link: "https://www.hackerrank.com/certificates/6781866e6938",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "JavaScript (Basic)",
      provider: "HackerRank",
      description: "Functions, currying, hoisting, scope, inheritance, and error handling",
      link: "https://www.hackerrank.com/certificates/f3399ae0ce2a",
      icon: <FaAward />,
      date: "2023"
    },
    {
      title: "React (Basic)",
      provider: "HackerRank",
      description: "Routing, rendering elements, state management, handling events, and form validation",
      link: "https://www.hackerrank.com/certificates/612ffe5ee87b",
      icon: <FaAward />,
      date: "2023"
    }
  ];

  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderH2}>Certificates</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.certificatesContainer}>
        {certificates.map((certificate, index) => (
          <div className={styles.certificateCard} key={index}>
            <div className={styles.certificateIcon}>
              {certificate.icon}
            </div>
            <div className={styles.certificateContent}>
              <h3 className={styles.certificateCardH3}>{certificate.title}</h3>
              <p className={styles.certificateProvider}>{certificate.provider} • {certificate.date}</p>
              <p className={styles.certificateDescription}>{certificate.description}</p>
              <a 
                href={certificate.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.certificateLink}
              >
                View Certificate <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
