import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import ContactForm from './Components/ContactForm.jsx';

// Create a separate ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
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
      {/* Add ScrollToTop component */}
      <ScrollToTop />
      
      <div style={styles.app}>
        <Navbar openContactForm={openContactForm} />
        <main style={styles.content}>
          <Routes>
            <Route path="/" element={<Home openContactForm={openContactForm} />} />
            <Route path="/about" element={<About openContactForm={openContactForm} />} />
            <Route path="/services" element={<Services openContactForm={openContactForm} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
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
  }
};

export default App;