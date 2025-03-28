import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import ContactForm from './Components/ContactForm.jsx';

// Lazy load components
const Home = React.lazy(() => import('./Components/Home.jsx'));
const About = React.lazy(() => import('./Components/About.jsx'));
const Services = React.lazy(() => import('./Components/Services.jsx'));
const Contact = React.lazy(() => import('./Components/Contact.jsx'));

// Loader Component
function Loader() {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader}>
        <div style={styles.loaderSpinner}></div>
        <p style={styles.loaderText}>Loading...</p>
      </div>
    </div>
  );
}

// Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div style={styles.app}>
        <Navbar openContactForm={openContactForm} />
        
        <main style={styles.content}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home openContactForm={openContactForm} />} />
              <Route path="/about" element={<About openContactForm={openContactForm} />} />
              <Route path="/services" element={<Services openContactForm={openContactForm} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer openContactForm={openContactForm} />
        
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={closeContactForm} 
        />
      </div>
    </Router>
  );
}

const styles = {
  app: {
    fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
    color: '#1e293b',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(248, 250, 252, 0.9)',
    zIndex: 1000,
  },
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderSpinner: {
    width: '50px',
    height: '50px',
    border: '5px solid #3b82f6',
    borderTop: '5px solid #10b981',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loaderText: {
    marginTop: '15px',
    color: '#1e293b',
    fontWeight: '500',
  },
};

// Add keyframes for spinner animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

export default App;