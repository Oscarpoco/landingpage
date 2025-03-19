import React, { useState, useEffect } from 'react';

function Navbar({ setActiveSection, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav style={{
      ...styles.navbar,
      ...(scrolled ? styles.scrolled : {})
    }}>
      <div style={styles.navbarContainer}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logoText}>
            <span style={styles.logoHighlight}>Cyber</span>Hub
          </h1>
        </div>
        
        {/* Mobile Menu Button */}
        <div style={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
          <div style={styles.hamburger}>
            <span style={{...styles.hamburgerLine, ...(mobileMenuOpen ? styles.hamburgerTopActive : {})}}></span>
            <span style={{...styles.hamburgerLine, ...(mobileMenuOpen ? styles.hamburgerMiddleActive : {})}}></span>
            <span style={{...styles.hamburgerLine, ...(mobileMenuOpen ? styles.hamburgerBottomActive : {})}}></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul style={styles.desktopNav}>
          {navItems.map(item => (
            <li key={item.id} style={styles.navItem}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                }}
                style={{
                  ...styles.navLink,
                  ...(activeSection === item.id ? styles.activeLink : {})
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={styles.navItem}>
            <button
              onClick={() => setActiveSection('contact')}
              style={styles.contactBtn}
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div style={{
        ...styles.mobileNav,
        ...(mobileMenuOpen ? styles.mobileNavOpen : {})
      }}>
        <ul style={styles.mobileNavList}>
          {navItems.map(item => (
            <li key={item.id} style={styles.mobileNavItem}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  ...styles.mobileNavLink,
                  ...(activeSection === item.id ? styles.mobileActiveLink : {})
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={styles.mobileNavItem}>
            <button
              onClick={() => {
                setActiveSection('contact');
                setMobileMenuOpen(false);
              }}
              style={styles.mobileCta}
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: '0 5%',
    height: '80px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    color: '#1e293b',
    zIndex: 1000,
    transition: 'all 0.3s ease'
  },
  scrolled: {
    height: '70px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  logoText: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '700',
    letterSpacing: '-0.5px'
  },
  logoHighlight: {
    color: '#3b82f6'
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    '@media (max-width: 768px)': {
      display: 'none'
    }
  },
  navItem: {
    margin: '0 5px'
  },
  navLink: {
    color: '#1e293b',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  },
  activeLink: {
    color: '#3b82f6',
    backgroundColor: 'rgba(59, 130, 246, 0.08)'
  },
  contactBtn: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  mobileMenuBtn: {
    display: 'none',
    cursor: 'pointer',
    zIndex: 1001,
    '@media (max-width: 768px)': {
      display: 'block'
    }
  },
  hamburger: {
    width: '24px',
    height: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  hamburgerLine: {
    display: 'block',
    width: '100%',
    height: '2px',
    backgroundColor: '#1e293b',
    transition: 'all 0.3s ease'
  },
  hamburgerTopActive: {
    transform: 'translateY(8px) rotate(45deg)'
  },
  hamburgerMiddleActive: {
    opacity: 0
  },
  hamburgerBottomActive: {
    transform: 'translateY(-8px) rotate(-45deg)'
  },
  mobileNav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
    clipPath: 'circle(0px at calc(100% - 32px) 32px)',
    visibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 1000
  },
  mobileNavOpen: {
    clipPath: 'circle(100% at center)',
    visibility: 'visible'
  },
  mobileNavList: {
    listStyleType: 'none',
    padding: '0 24px',
    margin: 0
  },
  mobileNavItem: {
    margin: '20px 0',
    textAlign: 'center'
  },
  mobileNavLink: {
    color: '#1e293b',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: '600',
    padding: '12px',
    display: 'block'
  },
  mobileActiveLink: {
    color: '#3b82f6'
  },
  mobileCta: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '16px 28px',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: '600',
    width: '100%',
    cursor: 'pointer',
    marginTop: '20px'
  }
};

export default Navbar;