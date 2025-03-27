import React from 'react';
import { Home, Info, Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';

function Footer({setActiveSection}) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Shield },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <div style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>
            <span style={styles.titleHighlight}>The</span> Mathe Projects
          </h3>
          <p style={styles.footerText}>
            Your trusted partner for comprehensive pest control and cleaning services. We eliminate pests and restore cleanliness to your space.
          </p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Quick Links</h3>
          <ul style={styles.footerLinks}>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} style={styles.footerLink}>
                  <button 
                    onClick={() => setActiveSection(item.id)}
                    style={styles.footerAnchor}
                  >
                    <IconComponent size={16} style={styles.icon} /> {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Working Hours</h3>
          <div style={styles.hoursContainer}>
            <div style={styles.hourGroup}>
              <p style={styles.hoursLabel}>
                <Clock size={16} style={styles.icon} /> Monday - Friday
              </p>
              <p style={styles.footerText}>8:00 AM - 6:00 PM</p>
            </div>
            <div style={styles.hourGroup}>
              <p style={styles.hoursLabel}>
                <Clock size={16} style={styles.icon} /> Saturday
              </p>
              <p style={styles.footerText}>9:00 AM - 4:00 PM</p>
            </div>
            <p style={styles.emergencyText}>24/7 Emergency Services Available</p>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contact</h3>
          <div style={styles.contactInfo}>
            <p style={styles.footerText}>
              <MapPin size={16} style={styles.icon} /> 4932 Masekwas Street, Olivenhoutbosch, Centurion 0157
            </p>
            <p style={styles.footerText}>
              <Phone size={16} style={styles.icon} /> (082) 341-4911 
            </p>
            <p style={styles.footerText}>
              <Mail size={16} style={styles.icon} /> matheprojects@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} The Mathe Projects. All rights reserved.
        </p>
        <div style={styles.socialLinks}>
          {[
            {icon: Facebook, link: "https://facebook.com"},
            {icon: Twitter, link: "https://twitter.com"},
            {icon: Instagram, link: "https://instagram.com"},
            {icon: Youtube, link: "https://youtube.com"}
          ].map(({icon: Icon, link}, index) => (
            <a 
              key={index} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #0f172a, #1e293b)',
    color: 'white',
    padding: '60px 20px 20px',
    boxShadow: '0 -10px 30px rgba(0,0,0,0.1)'
  },
  footerContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    margin: '0 auto',
    marginBottom: '40px',
    gap: '20px'
  },
  footerSection: {
    flex: '1 1 250px',
    marginBottom: '30px',
    paddingRight: '20px'
  },
  titleHighlight: {
    color: '#3b82f6',
    fontWeight: 'bold'
  },
  footerTitle: {
    fontSize: '20px',
    marginBottom: '20px',
    position: 'relative',
    paddingBottom: '10px',
    borderBottom: '2px solid rgba(59, 130, 246, 0.3)'
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#cbd5e1',
    margin: '5px 0'
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  footerLink: {
    marginBottom: '10px'
  },
  footerAnchor: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '5px 0',
    transition: 'color 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px'
  },
  hoursContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  hourGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  hoursLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#cbd5e1',
    marginBottom: '5px'
  },
  emergencyText: {
    color: '#3b82f6',
    fontSize: '13px',
    marginTop: '10px',
    fontWeight: 'bold'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '20px'
  },
  copyright: {
    fontSize: '14px',
    margin: '0',
    color: '#cbd5e1'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px'
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    color: '#3b82f6',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    hover: {
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      transform: 'scale(1.1)'
    }
  },
  icon: {
    marginRight: '5px',
    verticalAlign: 'middle'
  }
};

export default Footer;