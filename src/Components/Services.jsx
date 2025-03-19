import React from 'react';

function Services() {
  const serviceItems = [
    {
      id: 1,
      icon: '🖥️',
      title: 'Computer Workstations',
      description: 'High-performance computers equipped with the latest software for browsing, work, and entertainment.',
      details: [
        'Intel Core i7/i9 processors',
        '32GB RAM',
        'NVIDIA RTX graphics',
        'Dual monitors'
      ]
    },
    {
      id: 2,
      icon: '🎮',
      title: 'Gaming Zone',
      description: 'Top-tier gaming stations with the latest games and accessories for the ultimate gaming experience.',
      details: [
        'Latest PC games library',
        'Gaming consoles (PS5, Xbox Series X)',
        'VR gaming equipment',
        'Gaming tournaments'
      ]
    },
    {
      id: 3,
      icon: '🖨️',
      title: 'Printing Services',
      description: 'High-quality printing, scanning, and copying services for all your document needs.',
      details: [
        'Color and B&W printing',
        'Document scanning',
        'Photocopying',
        'Large format printing'
      ]
    },
    {
      id: 4,
      icon: '☕',
      title: 'Cafe Area',
      description: 'Refreshments and snacks to keep you energized during your work or gaming sessions.',
      details: [
        'Hot and cold beverages',
        'Pastries and snacks',
        'Sandwiches and light meals',
        'Free water refills'
      ]
    },
    {
      id: 5,
      icon: '👥',
      title: 'Meeting Rooms',
      description: 'Private meeting spaces for group work, interviews, or small gatherings with all necessary tech.',
      details: [
        'Video conferencing equipment',
        'Projectors and screens',
        'Whiteboards',
        'Catering options'
      ]
    },
    {
      id: 6,
      icon: '📶',
      title: 'High-Speed WiFi',
      description: 'Blazing fast internet connection for all your browsing, streaming, and download needs.',
      details: [
        'Fiber optic connection',
        '1 Gbps download/upload speeds',
        'Secure network',
        'Technical support'
      ]
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Our Services</h1>
        <div style={styles.underline}></div>
        <p style={styles.description}>
          We offer a comprehensive range of technology services to meet all your needs
        </p>
      </div>
      
      <div style={styles.servicesGrid}>
        {serviceItems.map(item => (
          <div key={item.id} style={styles.serviceCard}>
            <div style={styles.serviceIcon}>{item.icon}</div>
            <h3 style={styles.serviceTitle}>{item.title}</h3>
            <p style={styles.serviceDescription}>{item.description}</p>
            <ul style={styles.serviceDetails}>
              {item.details.map((detail, index) => (
                <li key={index} style={styles.detailItem}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div style={styles.pricingSection}>
        <h2 style={styles.sectionTitle}>Pricing Plans</h2>
        <div style={styles.pricingGrid}>
          <div style={styles.pricingCard}>
            <h3 style={styles.pricingTitle}>Hourly</h3>
            <div style={styles.pricingAmount}>$5</div>
            <p style={styles.pricingPeriod}>per hour</p>
            <ul style={styles.pricingFeatures}>
              <li>Computer Workstation</li>
              <li>High-Speed Internet</li>
              <li>Basic Software</li>
              <li>Technical Support</li>
            </ul>
            <button style={styles.pricingButton}>Choose Plan</button>
          </div>
          
          <div style={{...styles.pricingCard, ...styles.popularPlan}}>
            <div style={styles.popularTag}>Most Popular</div>
            <h3 style={styles.pricingTitle}>Day Pass</h3>
            <div style={styles.pricingAmount}>$25</div>
            <p style={styles.pricingPeriod}>full day</p>
            <ul style={styles.pricingFeatures}>
              <li>Computer Workstation</li>
              <li>High-Speed Internet</li>
              <li>All Software</li>
              <li>Gaming Access</li>
              <li>Free Beverage</li>
            </ul>
            <button style={{...styles.pricingButton, ...styles.popularButton}}>Choose Plan</button>
          </div>
          
          <div style={styles.pricingCard}>
            <h3 style={styles.pricingTitle}>Membership</h3>
            <div style={styles.pricingAmount}>$199</div>
            <p style={styles.pricingPeriod}>per month</p>
            <ul style={styles.pricingFeatures}>
              <li>Unlimited Access</li>
              <li>Premium Workstations</li>
              <li>Priority Booking</li>
              <li>Gaming Tournaments</li>
              <li>Free Printing (100 pages)</li>
              <li>Discounted Meeting Rooms</li>
            </ul>
            <button style={styles.pricingButton}>Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px'
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  title: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '15px'
  },
  underline: {
    width: '80px',
    height: '4px',
    backgroundColor: '#2563eb',
    margin: '0 auto',
    marginBottom: '20px'
  },
  description: {
    fontSize: '18px',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '60px'
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
    }
  },
  serviceIcon: {
    fontSize: '40px',
    marginBottom: '20px'
  },
  serviceTitle: {
    fontSize: '22px',
    color: '#2563eb',
    marginBottom: '15px'
  },
  serviceDescription: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
    lineHeight: '1.5'
  },
  serviceDetails: {
    listStyleType: 'none',
    padding: '0',
    margin: '0'
  },
  detailItem: {
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
    color: '#666',
    ':last-child': {
      borderBottom: 'none'
    },
    ':before': {
      content: '"✓ "',
      color: '#2563eb',
      fontWeight: 'bold'
    }
  },
  pricingSection: {
    backgroundColor: '#f8f9fa',
    padding: '50px 30px',
    borderRadius: '8px'
  },
  sectionTitle: {
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '40px'
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  pricingCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative'
  },
  popularPlan: {
    borderTop: '4px solid #2563eb',
    transform: 'scale(1.05)',
    zIndex: '1'
  },
  popularTag: {
    position: 'absolute',
    top: '-15px',
    right: '20px',
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '14px'
  },
  pricingTitle: {
    fontSize: '24px',
    marginBottom: '20px'
  },
  pricingAmount: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#2563eb'
  },
  pricingPeriod: {
    color: '#888',
    marginBottom: '25px'
  },
  pricingFeatures: {
    listStyleType: 'none',
    padding: '0',
    margin: '0 0 30px 0',
    textAlign: 'left'
  },
  pricingButton: {
    backgroundColor: 'white',
    color: '#2563eb',
    border: '2px solid #2563eb',
    padding: '10px 25px',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  popularButton: {
    backgroundColor: '#2563eb',
    color: 'white'
  }
};

export default Services;