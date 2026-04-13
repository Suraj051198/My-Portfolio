import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaDatabase, FaGitAlt, FaJava, FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiRedux, SiExpress, SiPostman } from 'react-icons/si';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 95 },
        { name: "JavaScript", icon: <FaJs />, level: 95 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 95 },
        { name: "Redux", icon: <SiRedux />, level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 95 },
        { name: "Express.js", icon: <SiExpress />, level: 95 },
        { name: "MongoDB", icon: <SiMongodb />, level: 90 },
        { name: "RESTful APIs", icon: <FaNodeJs />, level: 95 },
        { name: "JWT Auth", icon: <FaNodeJs />, level: 90 },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 95 },
        { name: "GitHub", icon: <FaGithub />, level: 95 },
        { name: "Postman", icon: <SiPostman />, level: 90 },
        { name: "VS Code", icon: <FaJs />, level: 95 },
        { name: "Vercel", icon: <FaJs />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderH2}>Skills</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, index) => (
          <div className={styles.skillCategory} key={index}>
            <h3 className={styles.skillCategoryH3}>{category.title}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <div className={styles.skillItem} key={skillIndex}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <h4 className={styles.skillInfoH4}>{skill.name}</h4>
                    <div className={styles.skillProgressContainer}>
                      <div 
                        className={styles.skillProgress} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
