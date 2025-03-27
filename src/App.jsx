import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div style={styles.app}>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main style={styles.content}>
        {renderSection()}
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
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