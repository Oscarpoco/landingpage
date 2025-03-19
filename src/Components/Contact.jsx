import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Contact Us</h1>
        <div style={styles.underline}></div>
        <p style={styles.description}>
          Have questions or need assistance? Reach out to us and we'll be happy to help!
        </p>
      </div>
      
      <div style={styles.contactSection}>
        <div style={styles.contactInfo}>
          <h2 style={styles.subtitle}>Get In Touch</h2>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📍</div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Location</h3>
              <p style={styles.infoText}>123 Tech Street, Digital City, DC 10101</p>
            </div>
          </div>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>📞</div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Phone</h3>
              <p style={styles.infoText}>(123) 456-7890</p>
            </div>
          </div>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>✉️</div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Email</h3>
              <p style={styles.infoText}>info@cyberhub.com</p>
            </div>
          </div>
          
          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>🕒</div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Hours</h3>
              <p style={styles.infoText}>Open 24/7</p>
            </div>
          </div>
          
          <div style={styles.mapContainer}>
            <div style={styles.map}></div>
          </div>
        </div>
        
        <div style={styles.contactForm}>
          <h2 style={styles.subtitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Your name"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Your email"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="subject" style={styles.label}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Subject of your message"
              />
            </div>
            
            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  title: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '15px'
  },
  underline: {
    width: '80px',
    height: '4px',
    backgroundColor: '#2563eb',
    margin: '0 auto',
    marginBottom: '20px'
  },
  description: {
    fontSize: '18px',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto'
  },
  contactSection: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center'
  },
  contactInfo: {
    flex: '1 1 400px',
    maxWidth: '500px'
  },
  subtitle: {
    fontSize: '24px',
    color: '#2563eb',
    marginBottom: '25px'
  },
  infoItem: {
    display: 'flex',
    marginBottom: '30px',
    alignItems: 'flex-start'
  },
  infoIcon: {
    fontSize: '24px',
    marginRight: '15px',
    backgroundColor: '#e6f0ff',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  infoContent: {
    flex: 1
  },
  infoTitle: {
    fontSize: '18px',
    marginBottom: '5px',
    color: '#333'
  },
  infoText: {
    fontSize: '16px',
    color: '#666',
    margin: 0
  },
  mapContainer: {
    marginTop: '30px',
    width: '100%',
    height: '250px',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  map: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e1e7ef'
  },
  contactForm: {
    flex: '1 1 400px',
    maxWidth: '600px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  },
  form: {
    width: '100%'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px',
    color: '#444'
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px'
  },
  textarea: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
    resize: 'vertical'
  },
  submitButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

export default Contact;