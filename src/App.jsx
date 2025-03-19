import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

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