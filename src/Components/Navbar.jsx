import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
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
      <Link to="/" style={styles.logoContainerLink}>
          <div style={styles.logoContainer}>
            <div className='logoPicture' style={styles.logoPictureContainer}>
              <img 
                src={logo} 
                alt="Mathe Projects Logo" 
                style={{
                  ...styles.logoImage,
                  ...(isMobile ? styles.mobileLogoImage : {})
                }} 
              />
            </div>
            <h1 style={{
              ...styles.logoText,
              ...(isMobile ? styles.mobileLogoText : {})
            }}>
              <span style={styles.logoHighlight}>MATHE</span> PROJECTS
            </h1>
          </div>
        </Link>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <div style={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
            <div style={styles.hamburger}>
              <span style={{...styles.hamburgerLine, ...(mobileMenuOpen ? styles.hamburgerTopActive : {})}}></span>
              <span style={{...styles.hamburgerLine, ...(mobileMenuOpen ? styles.hamburgerMiddleActive : {})}}></span>
              <span style={{...styles.hamburgerLine, ...(mobileMenuOpen ? styles.hamburgerBottomActive : {})}}></span>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <ul style={styles.desktopNav}>
            {navItems.map(item => (
              <li key={item.path} style={styles.navItem}>
                <Link
                  to={item.path}
                  style={{
                    ...styles.navLink,
                    ...(location.pathname === item.path ? styles.activeLink : {})
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li style={styles.navItem}>
              <Link
                to="/contact"
                style={styles.contactBtn}
              >
                Book Now
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div style={{
          ...styles.mobileNav,
          ...(mobileMenuOpen ? styles.mobileNavOpen : {})
        }}>
          <ul style={styles.mobileNavList}>
            {navItems.map(item => (
              <li key={item.path} style={styles.mobileNavItem}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    ...styles.mobileNavLink,
                    ...(location.pathname === item.path ? styles.mobileActiveLink : {})
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li style={styles.mobileNavItem}>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={styles.mobileCta}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
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
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
    alignItems: 'center',
    gap: '10px'
  },
  logoContainerLink: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  logoSvg: {
    display: 'none',
    transition: 'transform 0.3s ease',
  },
  logoText: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#10b981'
  },

  mobileLogoText: {
    fontSize: '17px', 
    fontWeight: '900',
    color: '#10b981'
  },

  logoHighlight: {
    color: '#3b82f6'
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    margin: 0,
    padding: 0
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
    cursor: 'pointer',
    zIndex: 1001
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
    top: '70px',
    left: 0,
    width: '70%',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    clipPath: 'circle(0px at calc(100% - 32px) 32px)',
    visibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
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
    textAlign: 'start'
  },
  mobileNavLink: {
    color: '#1e293b',
    textDecoration: 'none',
    fontSize: '18px',
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
    padding: '14px 28px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    width: '100%',
    cursor: 'pointer',
    marginTop: '20px'
  },

  logoPictureContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    height: '40px',
    width: 'auto',
    objectFit: 'contain',
    transition: 'all 0.3s ease'
  },
  mobileLogoImage: {
    height: '30px'
  },
  
};

export default Navbar;