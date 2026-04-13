import {
  FaCode,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGithub,
  FaLaptopCode,
  FaMapMarkedAlt,
  FaNewspaper,
  FaStar,
  FaTasks,
  FaUser,
  FaUserShield,
  FaWallet
} from 'react-icons/fa';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "GrownXT.AI - Marketing Automation Platform",
      description: "Live production platform built at KONCPT AI with multi-channel social media integration, content scheduling, and support ticketing system.",
      features: [
        "Integrated 5 social media APIs (Facebook, Instagram, LinkedIn, X/Twitter, YouTube)",
        "Full-featured content publishing & scheduling module with React Calendar View",
        "Post Now and Schedule for Later features",
        "Complete full-stack support ticketing system with user & admin workflows",
        "Real-time dispatch tracking module for shipment updates",
        "Scalable REST APIs with MongoDB integration"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Calendar.js"],
      liveLink: "https://grownxt.ai/",
      githubLink: "https://github.com/Suraj051198",
      icon: <FaLaptopCode />
    },
    {
      title: "iNotebook - Cloud Note-Taking App",
      description: "Secure cloud-based notes application with JWT authentication and responsive UI.",
      features: [
        "User authentication with JWT and bcrypt password hashing",
        "Create, read, update, and delete notes",
        "Secure API endpoints",
        "Global state management with Context API",
        "Fully responsive UI with Bootstrap",
        "MongoDB database integration for data persistence"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Bootstrap"],
      githubLink: "https://github.com/Suraj051198/iNotebook",
      icon: <FaFileAlt />
    },
    {
      title: "Store Rating System - Role-Based Web App",
      description: "Multi-role web application with distinct dashboards and Role-Based Access Control.",
      features: [
        "Role-based login (Admin, Normal User, Store Owner)",
        "Distinct dashboards for each user role",
        "Protected routes per role using React Router",
        "Rate, edit & filter store ratings",
        "Client-side data persistence with localStorage",
        "Comprehensive validation & session handling"
      ],
      technologies: ["React.js", "Bootstrap", "React Router", "localStorage", "RBAC"],
      liveLink: "https://store-rating.netlify.app/login",
      githubLink: "https://github.com/Suraj051198/roxiler-store-rating.git",
      icon: <FaStar />
    },
    {
      title: "Expense Tracker - Full Stack MERN App",
      description: "Full-stack app for recording, categorizing, and visualizing personal expenses with Chart.js analytics.",
      features: [
        "Add, categorize, and delete transactions",
        "Calculate total income and expenses",
        "Monthly trend charts with Chart.js visualization",
        "Real-time balance updates",
        "REST API backend with MongoDB",
        "Responsive and user-friendly interface"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Bootstrap"],
      githubLink: "https://github.com/Suraj051198/Expense-Tracker-App",
      icon: <FaWallet />
    },
    {
      title: "TextUtil - Text Utility App",
      description: "A feature-rich text manipulation tool built with React and Bootstrap.",
      features: [
        "Convert text to Uppercase & Lowercase",
        "Remove extra spaces",
        "Copy text to clipboard",
        "Count words and characters",
        "Dark mode support",
        "Real-time text analysis"
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "CSS3"],
      liveLink: "https://texemodify.netlify.app/",
      githubLink: "https://github.com/Suraj051198/TextUtil-React-JS-",
      icon: <FaFileAlt />
    },
    {
      title: "News App - API Integration",
      description: "React-based news application with category filtering and real-time news updates.",
      features: [
        "Category-based news filtering",
        "Latest headlines from multiple sources",
        "Responsive design for all devices",
        "External news API integration",
        "Search functionality",
        "Smooth scrolling and navigation"
      ],
      technologies: ["React.js", "API Integration", "Bootstrap", "JavaScript"],
      liveLink: "https://newsapp-react-js.netlify.app/",
      githubLink: "https://github.com/Suraj051198/New-App-React-js-",
      icon: <FaNewspaper />
    },
    {
      title: "Task Manager Application",
      description: "Feature-rich task management with multiple views and real-time updates.",
      features: [
        "Kanban board, calendar, and list views",
        "Drag-and-drop task management",
        "Search and filter capabilities",
        "Dark/Light mode support",
        "Real-time task updates",
        "Responsive design"
      ],
      technologies: ["React.js", "Tailwind CSS", "Context API", "Moment.js"],
      liveLink: "https://task-tracker-appli.netlify.app/",
      githubLink: "https://github.com/Suraj051198/task-tracker.git",
      icon: <FaTasks />
    },
    {
      title: "Travel Maharashtra - Travel Booking Platform",
      description: "Explore and book travel experiences across Maharashtra with responsive UI and testimonials.",
      features: [
        "View destinations and travel packages",
        "Filter and search experiences",
        "Responsive design for all devices",
        "Customer testimonials section",
        "Smooth navigation and animations",
        "User-friendly booking interface"
      ],
      technologies: ["React.js", "React Router", "CSS3", "HTML5"],
      liveLink: "https://travel-app-by.netlify.app/",
      githubLink: "https://github.com/Suraj051198/travel.git",
      icon: <FaMapMarkedAlt />
    },
    {
      title: "User Management App",
      description: "Full-stack user management system with JWT authentication and profile management.",
      features: [
        "JWT-based authentication",
        "User profile management",
        "Secure password hashing with bcrypt",
        "Full CRUD operations for users",
        "Centralized error handling",
        "RESTful API design"
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "JavaScript"],
      liveLink: "https://all-password-manager-app.netlify.app/",
      githubLink: "https://github.com/Suraj051198/user-management-app",
      icon: <FaUserShield />
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderH2}>Projects</h2>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <div className={styles.projectImage}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectThumbnail}
                />
              ) : (
                <div className={styles.projectIcon}>{project.icon}</div>
              )}
              <div className={styles.projectOverlay}>
                <div className={styles.projectLinks}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <FaGithub /> View Code
                  </a>
                  {project.liveLink && project.title !== "Expense Tracker Application" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectCardH3}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <ul className={styles.projectFeatures}>
                {project.features.map((feature, featureIndex) => (
                  <li className={styles.projectFeaturesLi} key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className={styles.techStack}>
                {project.technologies.map((tech, techIndex) => (
                  <span className={styles.techTag} key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
