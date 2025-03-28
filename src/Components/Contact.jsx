import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Send, User, AtSign, MessageSquare, FileText, AlignCenter } from "lucide-react"
import emailjs from '@emailjs/browser';

function Contact() {
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
  })

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
    container: {
      ...styles.container,
      padding: isMobile ? '40px 20px' : '60px 20px',
      paddingTop: isMobile ? '120px' : '180px',
      display: isMobile ? 'flex' : 'unset',
      flexDirection: isMobile ? 'column' : 'unset',
      alignItems: isMobile ? 'center' : 'unset',
    },
    headerSection: {
      ...styles.headerSection,
      marginBottom: isMobile ? '34px' : '70px'
    },
    title: {
      ...styles.title,
      fontSize: isMobile ? '32px' : '48px',
      textAlign: 'center'
    },
    description: {
      ...styles.description,
      fontSize: isMobile ? '14px' : '20px',
      padding: isMobile ? '5px 20px' : '0'
    },
    contactSection: {
      ...styles.contactSection,
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '40px' : '60px'
    },
    contactInfo: {
      ...styles.contactInfo,
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '100%' : '500px'
    },
    mapContainer: {
      ...styles.mapContainer,
      height: isMobile ? '200px' : '250px'
    },
    contactForm: {
      ...styles.contactForm,
      width: isMobile ? '100%' : 'auto',
      maxWidth: isMobile ? '100%' : '600px',
      // padding: isMobile ? '20px' : '40px',
    },

    form: {
      ...styles.form,
      width: isMobile ? '100%' : '100%',
      display: isMobile ? 'flex' : 'unset',
      flexDirection: isMobile ? 'column' : 'unset',
      alignItems: isMobile ? 'center' : 'unset',
    },
    socialSection: {
      ...styles.socialSection,
      marginBottom: isMobile ? '20px' : '40px'
    },
    socialIcons: {
      ...styles.socialIcons,
      gap: isMobile ? '10px' : '20px'
    },
    socialIcon: {
      ...styles.socialIcon,
      width: isMobile ? '40px' : '50px',
      height: isMobile ? '40px' : '50px'
    }
  };

  return (
    <div style={responsiveStyles.container}>
      <div style={styles.backgroundDecoration}></div>

      <div style={responsiveStyles.headerSection}>
        <div style={styles.animatedBox}>
          <span style={styles.tagline}>Get In Touch</span>
        </div>
        <h1 style={responsiveStyles.title}>Contact Us</h1>
        <p style={responsiveStyles.description}>
          Have questions or need assistance? Reach out to us and we'll be happy to help!
        </p>
      </div>

      <div style={responsiveStyles.contactSection}>
        <div style={responsiveStyles.contactInfo}>
          <h2 style={styles.subtitle}>Connect With Us</h2>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>
              <MapPin size={24} color="#3b82f6" />
            </div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Location</h3>
              <p style={styles.infoText}>4932 Masekwas Street, Olivenhoutbosch, Centurion 0157</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>
              <Phone size={24} color="#3b82f6" />
            </div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Phone</h3>
              <p style={styles.infoText}>(082) 341-4911</p>
              <p style={styles.infoText}>(076) 833-8082</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>
              <Mail size={24} color="#3b82f6" />
            </div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Email</h3>
              <p style={styles.infoText}>thematheprojects@gmail.com</p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <div style={styles.infoIcon}>
              <Clock size={24} color="#3b82f6" />
            </div>
            <div style={styles.infoContent}>
              <h3 style={styles.infoTitle}>Hours</h3>
              <p style={styles.infoText}>Open 24/7 Emergency Service</p>
            </div>
          </div>

          <div style={responsiveStyles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5995360548!2d28.265544!3d-25.860943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956213e11b0e7f%3A0x4a1cbf4c5d201b21!2s4932%20Masekwas%20St%2C%20Olivenhoutbosch%2C%20Centurion%2C%200157%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678393831349!5m2!1sen!2sus"
              style={{
                width: '100%',
                height: '100%',
                border: '0',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={styles.mapPin}>
              <MapPin size={32} color="#3b82f6" />
            </div>
          </div>
        </div>

        <div style={responsiveStyles.contactForm}>
          <h2 style={styles.subtitle}>Send Us a Message</h2>

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

      <div style={responsiveStyles.socialSection}>
        <h2 style={styles.socialTitle}>Connect With Us</h2>
        <div style={responsiveStyles.socialIcons}>
          <a href="#" style={responsiveStyles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" style={responsiveStyles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" style={responsiveStyles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M6 9H2V21H6V9Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" style={responsiveStyles.socialIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2.3H8C4.8 2.3 2.3 4.8 2.3 8V16C2.3 19.2 4.8 21.7 8 21.7H16C19.2 21.7 21.7 19.2 21.7 16V8C21.7 4.8 19.2 2.3 16 2.3Z"
                stroke="#3b82f6"
                strokeWidth="2"
              />
              <path
                d="M17.5 7C18.3284 7 19 6.32843 19 5.5C19 4.67157 18.3284 4 17.5 4C16.6716 4 16 4.67157 16 5.5C16 6.32843 16.6716 7 17.5 7Z"
                fill="#3b82f6"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1400px",
    margin: "0 auto",
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    color: "#0f172a",
    position: "relative",
    overflow: "hidden",
    paddingTop: '150px'
  },
  backgroundDecoration: {
    position: "absolute",
    top: "-300px",
    right: "-300px",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0) 70%)",
    zIndex: "-1",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "70px",
    position: "relative",
  },
  animatedBox: {
    display: "inline-block",
    background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
    borderRadius: "30px",
    padding: "10px 20px",
    marginBottom: "24px",
    border: "1px solid rgba(56, 189, 248, 0.2)",
    backdropFilter: "blur(10px)",
  },
  tagline: {
    background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "0.5px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "800",
    background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "24px",
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
  },
  description: {
    fontSize: "20px",
    color: "#64748b",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: "1.6",
    fontWeight: "400",
  },
  contactSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "60px",
    justifyContent: "center",
    marginBottom: "80px",
  },
  contactInfo: {
    flex: "1 1 400px",
    maxWidth: "500px",
  },
  subtitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "30px",
    position: "relative",
    paddingBottom: "12px",
  },
  infoItem: {
    display: "flex",
    marginBottom: "30px",
    alignItems: "flex-start",
  },
  infoIcon: {
    marginRight: "20px",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  infoContent: {
    flex: "1",
    gap: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  infoTitle: {
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
    color: "#0f172a",
  },
  infoText: {
    fontSize: "16px",
    color: "#64748b",
    margin: 0,
    lineHeight: "1.5",
  },

  mapContainer: {
    marginTop: "40px",
    width: "100%",
    height: "250px",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
  },
  map: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f1f5f9",
    backgroundImage:
      'url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l+3b82f6(0,0)/0,0,13,0/600x300@2x?access_token=pk.placeholder")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  mapPin: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: "bounce 2s infinite",
    "@keyframes bounce": {
      "0%, 100%": {
        transform: "translate(-50%, -50%)",
      },
      "50%": {
        transform: "translate(-50%, -60%)",
      },
    },
  },
  contactForm: {
    flex: "1 1 400px",
    maxWidth: "600px",
    backgroundColor: "white",
    borderRadius: "24px",
    padding: "20px 0",
    border: "1px solid rgba(226, 232, 240, 0.5)",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  form: {
    width: "100%",
  },
  formGroup: {
    marginBottom: "24px",
    display: 'flex',
    flexDirection: 'column',
    padding: "15px",
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f172a",
  },
  input: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none",
    ":focus": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  textarea: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    resize: "vertical",
    minHeight: "120px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none",
    ":focus": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
    },
  },
  submitButton: {
    background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
    color: "white",
    border: "none",
    padding: "14px 24px",
    marginLeft: "16px",
    marginBottom: "14px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 4px 10px rgba(59, 130, 246, 0.3)",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
    },
  },
  successMessage: {
    textAlign: "center",
    padding: "40px 20px",
  },
  successIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "30px",
    fontWeight: "bold",
  },
  successTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#0f172a",
  },
  successText: {
    fontSize: "16px",
    color: "#64748b",
    lineHeight: "1.6",
  },
  socialSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  socialTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  socialIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(59, 130, 246, 0.1)",
    },
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
}

export default Contact