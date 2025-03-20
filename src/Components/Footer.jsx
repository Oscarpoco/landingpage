import React from 'react';
import { Home, Info,  Trash2, Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';

function Footer() {
  return (
    <div style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>PestCare Professionals</h3>
          <p style={styles.footerText}>
            Your trusted partner for comprehensive pest control and cleaning services. We eliminate pests and restore cleanliness to your space.
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
              <a href="/pest-control" style={styles.footerAnchor}>
                <Shield size={16} style={styles.icon} /> Pest Control
              </a>
            </li>
            <li style={styles.footerLink}>
              <a href="/cleaning" style={styles.footerAnchor}>
                <Trash2 size={16} style={styles.icon} /> Cleaning Services
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
            <Clock size={16} style={styles.icon} /> Monday - Friday
          </p>
          <p style={styles.footerText}>
            8:00 AM - 6:00 PM
          </p>
          <p style={styles.footerText}>
            <Clock size={16} style={styles.icon} /> Saturday
          </p>
          <p style={styles.footerText}>
            9:00 AM - 4:00 PM
          </p>
          <p style={styles.footerText}>
            24/7 Emergency Services Available
          </p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contact</h3>
          <p style={styles.footerText}>
            <MapPin size={16} style={styles.icon} /> 4932 Masekwas Street, Olivenhoutbosch, Centurion 0157
          </p>
          <p style={styles.footerText}>
            <Phone size={16} style={styles.icon} /> Phone: (082) 341-4911 
          </p>
          <p style={styles.footerText}>
            <Mail size={16} style={styles.icon} /> Email: info@pestawaypro.com
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} PestCare Professionals. All rights reserved.
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
    maxWidth: '1400px',
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