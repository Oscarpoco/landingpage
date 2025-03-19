import React from 'react';
import { Home, Info, Settings, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Gamefuxion</h3>
          <p style={styles.footerText}>
            Your premium internet cafe experience with high-speed internet, gaming stations, and more.
          </p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Quick Links</h3>
          <ul style={styles.footerLinks}>
            <li style={styles.footerLink}>
              <a href="/" style={styles.footerAnchor}>
                <Home size={16} style={styles.icon} /> Home
              </a>
            </li>
            <li style={styles.footerLink}>
              <a href="/about" style={styles.footerAnchor}>
                <Info size={16} style={styles.icon} /> About Us
              </a>
            </li>
            <li style={styles.footerLink}>
              <a href="/services" style={styles.footerAnchor}>
                <Settings size={16} style={styles.icon} /> Services
              </a>
            </li>
            <li style={styles.footerLink}>
              <a href="/contact" style={styles.footerAnchor}>
                <Phone size={16} style={styles.icon} /> Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Working Hours</h3>
          <p style={styles.footerText}>
            <Clock size={16} style={styles.icon} /> Monday - Sunday
          </p>
          <p style={styles.footerText}>
            Open 24 Hours
          </p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contact</h3>
          <p style={styles.footerText}>
            123 Tech Street, Digital City
          </p>
          <p style={styles.footerText}>
            <Phone size={16} style={styles.icon} /> Phone: (123) 456-7890
          </p>
          <p style={styles.footerText}>
            <Mail size={16} style={styles.icon} /> Email: info@cyberhub.com
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} CyberHub Internet Cafe. All rights reserved.
        </p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" style={styles.socialLink}>
            <Facebook size={18} />
          </a>
          <a href="https://twitter.com" style={styles.socialLink}>
            <Twitter size={18} />
          </a>
          <a href="https://instagram.com" style={styles.socialLink}>
            <Instagram size={18} />
          </a>
          <a href="https://youtube.com" style={styles.socialLink}>
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    background: '#0f172a',
    color: 'white',
    padding: '60px 20px 20px'
  },
  footerContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    marginBottom: '40px'
  },
  footerSection: {
    flex: '1 1 250px',
    marginBottom: '30px',
    paddingRight: '20px'
  },
  footerTitle: {
    fontSize: '18px',
    marginBottom: '20px',
    position: 'relative',
    paddingBottom: '10px'
  },
  footerText: {
    fontSize: '14px',
    lineHeight: '1.6'
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
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  copyright: {
    fontSize: '14px',
    margin: '0'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px'
  },
  socialLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '35px',
    height: '35px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    color: 'white',
    textDecoration: 'none',
    transition: 'background-color 0.3s'
  },
  icon: {
    marginRight: '5px',
    verticalAlign: 'middle'
  }
};

export default Footer;