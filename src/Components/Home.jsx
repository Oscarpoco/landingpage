import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.animatedBox}>
            <span style={styles.tagline}>Premium Tech Space</span>
          </div>
          <h1 style={styles.title}>Experience Next-Gen <span style={styles.highlight}>Digital</span> Environment</h1>
          <p style={styles.description}>
            High-performance workstations, lightning-fast internet, and cutting-edge gaming setups in a modern, comfortable space designed for productivity and entertainment.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.primaryButton}>Book a Station</button>
            <button style={styles.secondaryButton}>View Plans</button>
          </div>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>50+</span>
              <span style={styles.statLabel}>Premium Stations</span>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>1 Gbps</span>
              <span style={styles.statLabel}>Internet Speed</span>
            </div>
            <div style={styles.divider}></div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>24/7</span>
              <span style={styles.statLabel}>Open Hours</span>
            </div>
          </div>
        </div>
        <div style={styles.heroImageContainer}>
          <div style={styles.heroImage}></div>
          <div style={styles.imageBadge}>
            <span style={styles.badgeText}>Unlock Your Digital Experience</span>
          </div>
        </div>
      </div>
      
      <div style={styles.featuresSection}>
        <div style={styles.featuresSectionHeader}>
          <h2 style={styles.sectionTitle}>Why Choose CyberHub?</h2>
          <p style={styles.sectionSubtitle}>
            Experience the perfect blend of technology, comfort, and service
          </p>
        </div>
        
        <div style={styles.featuresGrid}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🖥️</div>
            <h3 style={styles.featureTitle}>High-Performance Workstations</h3>
            <p style={styles.featureDescription}>
              State-of-the-art computers with the latest hardware and software for all your needs
            </p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🎮</div>
            <h3 style={styles.featureTitle}>Premium Gaming Experience</h3>
            <p style={styles.featureDescription}>
              Top-tier gaming rigs with the latest titles and peripherals for competitive gaming
            </p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>📶</div>
            <h3 style={styles.featureTitle}>Ultra-Fast Connectivity</h3>
            <p style={styles.featureDescription}>
              Fiber optic internet with 1 Gbps speeds for smooth streaming and downloads
            </p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>☕</div>
            <h3 style={styles.featureTitle}>Refreshment Zone</h3>
            <p style={styles.featureDescription}>
              Complimentary beverages and snacks to keep you fueled during intense sessions
            </p>
          </div>
        </div>
      </div>
      
      <div style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to elevate your digital experience?</h2>
          <p style={styles.ctaDescription}>Join thousands of satisfied customers who've made CyberHub their tech destination of choice.</p>
          <button style={styles.ctaButton}>Get Started Today</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    paddingTop: '80px',
  },
  heroSection: {
    minHeight: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: '40px 5%',
    width: '100%',
    margin: '0 auto',
    gap: '10px'
  },
  heroContent: {
    width: '40%',
    paddingRight: '40px',
  },
  animatedBox: {
    display: 'inline-block',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '30px',
    padding: '8px 16px',
    marginBottom: '24px'
  },
  tagline: {
    color: '#3b82f6',
    fontWeight: '600',
    fontSize: '16px'
  },
  title: {
    fontSize: '48px',
    lineHeight: '1.2',
    fontWeight: '800',
    marginBottom: '24px',
    letterSpacing: '-0.5px'
  },
  highlight: {
    color: '#3b82f6',
    position: 'relative'
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#64748b',
    marginBottom: '32px',
    maxWidth: '600px'
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    marginBottom: '40px',
    flexWrap: 'wrap'
  },
  primaryButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
  },
  secondaryButton: {
    backgroundColor: 'white',
    color: '#1e293b',
    border: '1px solid #e2e8f0',
    padding: '14px 32px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column'
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0f172a'
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b'
  },
  divider: {
    width: '1px',
    height: '40px',
    backgroundColor: 'red',
  },
  heroImageContainer: {
    width: '40%',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '500px',
    backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.4), rgba(30, 41, 59, 0.4)), url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
  },
  imageBadge: {
    position: 'absolute',
    bottom: '-20px',
    right: '30px',
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
  },
  badgeText: {
    fontWeight: '600',
    fontSize: '16px'
  },
  featuresSection: {
    padding: '80px 5%',
    backgroundColor: 'white',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  featuresSectionHeader: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 60px auto'
  },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '16px'
  },
  sectionSubtitle: {
    fontSize: '18px',
    color: '#64748b',
    lineHeight: '1.6'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px'
  },
  feature: {
    padding: '32px 24px',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default'
  },
  featureIcon: {
    fontSize: '32px',
    marginBottom: '24px',
    display: 'inline-block',
    padding: '12px',
    borderRadius: '12px',
    backgroundColor: 'rgba(59, 130, 246, 0.1)'
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px'
  },
  featureDescription: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#64748b'
  },
  ctaSection: {
    padding: '100px 5%',
    backgroundImage: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    color: 'white',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.3'
  },
  ctaDescription: {
    fontSize: '18px',
    marginBottom: '32px',
    opacity: '0.9'
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#2563eb',
    border: 'none',
    padding: '16px 36px',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
  }
};

export default Home;