import React, { useState, useEffect } from 'react';

// ICONS
import { User, AtSign, FileText, MessageSquare, Send, MapPin, Phone, Mail, Clock, X } from "lucide-react";
import { IoMdClose } from "react-icons/io";
// ENDS
import emailjs from '@emailjs/browser';

function ContactForm({ isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_SERVICE_KEY,  
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: import.meta.env.VITE_COMPANY_EMAIL
        }
      );

      // If email sent successfully
      setFormSubmitted(true);
      setSubmitError(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitError(true);
      setFormSubmitted(false);
    } finally {
        setLoading(false);
    }
  };

  const responsiveStyles = {
    overlay: {
      ...styles.overlay,
      padding: isMobile ? '0' : '0',
      overflowX: isMobile ? 'hidden' : 'unset',
    },
    popup: {
      ...styles.popup,
      width: isMobile ? '100%' : '100%',
      maxHeight: isMobile ? '100vh' : '90vh',
      borderRadius: isMobile ? '0' : '24px',
      maxWidth: isMobile ? '500px' : '800px',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'unset',
      padding: isMobile ? '10px' : 'unset',
      boxSizing: isMobile ? 'border-box' : 'unset',
      overflowX: isMobile ? 'hidden' : 'unset',
    },
    contactInfo: {
      display: isMobile ? 'none' : 'block',
      width: '40%',
      backgroundColor: 'rgba(59, 130, 246, 0.05)',
      padding: '40px 30px',
      borderTopLeftRadius: '24px',
      borderBottomLeftRadius: '24px',
    },
    popupContent: {
      ...styles.popupContent,
      width: isMobile ? '100%' : '60%',
      padding: isMobile ? '10px' : '40px',
    },
    title: {
      ...styles.title,
      fontSize: isMobile ? '28px' : '32px',
    },
  };

  if (!isOpen) return null;

  return (
    <div style={responsiveStyles.overlay}>
      <div style={responsiveStyles.popup}>
        {!isMobile && (
          <div style={responsiveStyles.contactInfo}>
            <h2 style={styles.infoTitle}>Additional Contact Information</h2>
            
            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <MapPin size={24} color="#3b82f6" />
              </div>
              <div style={styles.infoContent}>
                <h3 style={styles.infoSubtitle}>Location</h3>
                <p style={styles.infoText}>4932 Masekwas Street, Olivenhoutbosch, Centurion 0157</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <Phone size={24} color="#3b82f6" />
              </div>
              <div style={styles.infoContent}>
                <h3 style={styles.infoSubtitle}>Phone</h3>
                <p style={styles.infoText}>(082) 341-4911</p>
                <p style={styles.infoText}>(076) 833-8082</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <Mail size={24} color="#3b82f6" />
              </div>
              <div style={styles.infoContent}>
                <h3 style={styles.infoSubtitle}>Email</h3>
                <p style={styles.infoText}>thematheprojects@gmail.com</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <Clock size={24} color="#3b82f6" />
              </div>
              <div style={styles.infoContent}>
                <h3 style={styles.infoSubtitle}>Hours</h3>
                <p style={styles.infoText}>Open 24/7 Emergency Service</p>
              </div>
            </div>
          </div>
        )}

        <div style={responsiveStyles.popupContent}>
          <button 
            onClick={onClose} 
            style={styles.closeButton}
          >
            <span style={{ 
              color: 'red', 
              fontSize: '34px', 
              width: '100%', 
              height: '100%', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              }}>
                ×
              </span>
          </button>

          <h2 style={responsiveStyles.title}>Book Now</h2>
          <p style={styles.description}>
            Get in touch with us to book your appointment today.
          </p>

          {submitError && (
            <div style={styles.errorMessage}>
              <p style={styles.errorText}>Failed to send message. Please try again.</p>
            </div>
          )}

          {formSubmitted ? (
            <div style={styles.successMessage}>
              <div style={styles.successIcon}>✓</div>
              <h3 style={styles.successTitle}>Message Sent!</h3>
              <p style={styles.successText}>Thank you for your message. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  <User size={16} color="#64748b" />
                  <span>Full Name</span>
                </label>
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
                <label htmlFor="email" style={styles.label}>
                  <AtSign size={16} color="#64748b" />
                  <span>Email Address</span>
                </label>
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
                <label htmlFor="subject" style={styles.label}>
                  <FileText size={16} color="#64748b" />
                  <span>Subject</span>
                </label>
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
                <label htmlFor="message" style={styles.label}>
                  <MessageSquare size={16} color="#64748b" />
                  <span>Message</span>
                </label>
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
                <span> {loading ? 'Sending Message' : 'Send Message'}</span>
                {loading ? null : <Send size={16} color="white" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    backdropFilter: 'blur(5px)',
  },
  popup: {
    backgroundColor: 'white',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    borderRadius: '24px',
    display: 'flex',
  },
  closeButton: {
    position: 'absolute',
    top: '25px',
    right: '30px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'rgba(100, 116, 139, 0.0)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
  },

  popupContent: {
    textAlign: 'center',
    position: 'relative',
  },
  title: {
    fontSize: '32px',
    fontWeight: '800',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxSizing: 'border-box'
  },
  formGroup: {
    textAlign: 'left',
    boxSizing: 'border-box'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f172a',
  },
  input: {
    width: '90%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    fontSize: '16px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
    ':focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
  },
  textarea: {
    width: '90%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    outline: 'none',
    ':focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
  },
  submitButton: {
    background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 20px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
    },
    boxSizing: 'border-box'
  },
  successMessage: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  successIcon: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    fontSize: '30px',
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#0f172a',
  },
  successText: {
    fontSize: '16px',
    color: '#64748b',
    lineHeight: '1.6',
  },
  infoItem: {
    display: 'flex',
    marginBottom: '30px',
    alignItems: 'flex-start',
  },
  infoIcon: {
    marginRight: '20px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    border: '1px solid rgba(59, 130, 246, 0.2)',
  },
  infoContent: {
    flex: '1',
    gap: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  infoTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '30px',
    color: '#0f172a',
  },
  infoSubtitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: 0,
    color: '#0f172a',
  },
  infoText: {
    fontSize: '16px',
    color: '#64748b',
    margin: 0,
    lineHeight: '1.5',
  },

  errorMessage: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  errorText: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '500',
  },
};

export default ContactForm;