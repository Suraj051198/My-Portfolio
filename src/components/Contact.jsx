import { useState } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionHeaderH2}>Contact Me</h2>
        <div className={styles.underline}></div>
      </div>
      
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaMapMarkerAlt />
            </div>
            <h3 className={styles.contactCardH3}>Location</h3>
            <p className={styles.contactCardP}>Pune, Maharashtra, India</p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaEnvelope />
            </div>
            <h3 className={styles.contactCardH3}>Email</h3>
            <p className={styles.contactCardP}>
              <a href="mailto:surajsonawane172@gmail.com" className={styles.contactCardA}>
                surajsonawane172@gmail.com
              </a>
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaWhatsapp />
            </div>
            <h3 className={styles.contactCardH3}>WhatsApp</h3>
            <p className={styles.contactCardP}>
              <a href="https://wa.me/919860055304" className={styles.contactCardA}>
                +91 9860055304
              </a>
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaGithub />
            </div>
            <h3 className={styles.contactCardH3}>GitHub</h3>
            <p className={styles.contactCardP}>
              <a href="https://github.com/Suraj051198" target="_blank" rel="noopener noreferrer" className={styles.contactCardA}>
                github.com/Suraj051198
              </a>
            </p>
          </div>
          
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <FaLinkedin />
            </div>
            <h3 className={styles.contactCardH3}>LinkedIn</h3>
            <p className={styles.contactCardP}>
              <a href="https://www.linkedin.com/in/sonawane-suraj/" target="_blank" rel="noopener noreferrer" className={styles.contactCardA}>
                linkedin.com/in/sonawane-suraj
              </a>
            </p>
          </div>
        </div>
        
        <div className={styles.contactFormContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formGroupLabel}>Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className={styles.formGroupInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formGroupLabel}>Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className={styles.formGroupInput}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formGroupLabel}>Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
                className={styles.formGroupTextarea}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus.submitted && (
              <div className={styles.successMessage}>
                <p className={styles.successMessageP}>Thank you! Your message has been received.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
