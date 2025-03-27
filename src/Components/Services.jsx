<<<<<<< HEAD
import React from "react"
import { Bug, Rat, Moon, Microscope, Droplets, Sparkles, Building, Brush, Shield } from 'lucide-react';

function Services() {
=======
import React, { useState, useEffect } from 'react';
import { Bug, Rat, Moon, Microscope, Droplets, Sparkles, Building, Brush, Shield } from 'lucide-react';

function Services() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

>>>>>>> master
    const serviceItems = [
      {
        id: 1,
        icon: <Bug size={24} />,
        title: "Insect Control",
        description:
          "Comprehensive solutions for all types of insect infestations, from cockroaches to flying insects.",
        details: ["Cockroaches", "Flying insects control", "Bedbugs", "Fleas", "Ticks"],
      },
      {
        id: 2,
        icon: <Rat size={24} />,
        title: "Rodent Management",
        description: "Effective elimination and prevention strategies for mice, rats, and other rodents.",
        details: [
          "Mice control",
          "Rat elimination",
          "Entry point sealing",
          "Preventative measures",
        ],
      },
      {
        id: 3,
        icon: <Microscope size={24} />,
        title: "Termite Treatment",
        description: "Specialized termite detection and elimination services to protect your property.",
        details: ["Harvest Termites", "Sub Terranean Termites", "Pre-construction poisoning", "Regular inspections"],
      },
      {
        id: 4,
        icon: <Moon size={24} />,
        title: "Fumigation Services",
        description: "Professional fumigation treatments for comprehensive pest elimination in all property types.",
        details: ["Residential fumigation", "Commercial fumigation", "Weeds control", "Safe chemical application", "Garden and Landscaping"],
      },
      {
        id: 5,
        icon: <Sparkles size={24} />,
        title: "Carpet & Upholstery Cleaning",
        description: "Deep cleaning services for carpets, rugs, and furniture to remove stains and allergens.",
        details: ["Dry & wet carpet cleaning", "Couch cleaning", "Stain removal", "Allergen reduction"],
      },
      {
        id: 6,
        icon: <Building size={24} />,
        title: "Commercial Cleaning",
        description: "Comprehensive cleaning solutions for offices, warehouses, and commercial properties.",
        details: ["Window offices", "Warehouse cleaning", "Contract cleaning", "Tile floor maintenance"],
      },
    ]
  
<<<<<<< HEAD
    return (
      <div style={styles.container}>
=======
    const responsiveStyles = {
        container: {
            ...styles.container,
            padding: isMobile ? '0 15px' : '100px 20px',
            maxWidth: isMobile ? '100%' : '1400px',
            paddingTop: '150px'
        },
        headerSection: {
            ...styles.headerSection,
            marginBottom: isMobile ? '40px' : '80px',
        },
        title: {
            ...styles.title,
            fontSize: isMobile ? '32px' : '48px',
            textAlign: 'center',
        },
        description: {
            ...styles.description,
            fontSize: isMobile ? '16px' : '20px',
            padding: isMobile ? '0 10px' : '0',
        },
        servicesGrid: {
            ...styles.servicesGrid,
            gridTemplateColumns: isMobile 
                ? '1fr' 
                : 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: isMobile ? '20px' : '40px',
        },
        pricingSection: {
            ...styles.pricingSection,
            padding: isMobile ? '40px 10px' : '80px 40px',
        },
        pricingGrid: {
            ...styles.pricingGrid,
            gridTemplateColumns: isMobile 
                ? '1fr' 
                : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '20px' : '30px',
        },
        ctaSection: {
            ...styles.ctaSection,
            padding: isMobile ? '40px 10px' : '80px 40px',
        },
        ctaTitle: {
            ...styles.ctaTitle,
            fontSize: isMobile ? '28px' : '36px',
            textAlign: 'center',
        },
        ctaDescription: {
            ...styles.ctaDescription,
            fontSize: isMobile ? '16px' : '18px',
            textAlign: 'center',
        },
        ctaButtons: {
            ...styles.ctaButtons,
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: isMobile ? '10px' : '20px',
        }
    };

    return (
      <div style={responsiveStyles.container}>
>>>>>>> master
        <div style={styles.backgroundDecoration}></div>
  
        <div style={styles.headerSection}>
          <div style={styles.animatedBox}>
            <span style={styles.tagline}>Professional Services</span>
          </div>
<<<<<<< HEAD
          <h1 style={styles.title}>Complete Pest Control & Cleaning Solutions</h1>
          <p style={styles.description}>
=======
          <h1 style={responsiveStyles.title}>
            Complete Pest Control & Cleaning Solutions
          </h1>
          <p style={responsiveStyles.description}>
>>>>>>> master
            Discover our comprehensive range of pest elimination and cleaning services designed to keep your environment safe and spotless
          </p>
        </div>
  
<<<<<<< HEAD
        <div style={styles.servicesGrid}>
=======
        <div style={responsiveStyles.servicesGrid}>
>>>>>>> master
          {serviceItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                ...styles.serviceCard,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div style={styles.serviceIconWrapper}>
                <div style={styles.serviceIcon}>{item.icon}</div>
              </div>
              <h3 style={styles.serviceTitle}>{item.title}</h3>
              <p style={styles.serviceDescription}>{item.description}</p>
              <ul style={styles.serviceDetails}>
                {item.details.map((detail, idx) => (
                  <li key={idx} style={styles.detailItem}>
                    <span style={styles.checkmark}>✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <button style={styles.learnMoreButton}>
                <span>Learn More</span>
                <span style={styles.buttonArrow}>→</span>
              </button>
            </div>
          ))}
        </div>
  
        <div style={styles.pricingSection}>
          <div style={styles.pricingSectionContent}>
            <div style={styles.pricingHeader}>
              <div style={styles.animatedBox}>
                <span style={styles.tagline}>Service Plans</span>
              </div>
              <h2 style={styles.sectionTitle}>Select Your Ideal Service Plan</h2>
              <p style={styles.pricingDescription}>
                Choose from our range of service packages designed to meet your specific pest control and cleaning needs
              </p>
            </div>
  
            <div style={styles.pricingGrid}>
              <div style={styles.pricingCard}>
                <div style={styles.pricingCardInner}>
                  <h3 style={styles.pricingTitle}>One-Time Service</h3>
<<<<<<< HEAD
                  <div style={styles.pricingAmount}>$149</div>
=======
                  <div style={styles.pricingAmount}>R3149</div>
>>>>>>> master
                  <p style={styles.pricingPeriod}>single visit</p>
                  <ul style={styles.pricingFeatures}>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Basic Pest Inspection</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Target Treatment</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>30-day Guarantee</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Follow-up Report</span>
                    </li>
                  </ul>
                  <button style={styles.pricingButton}>Book Now</button>
                </div>
              </div>
  
              <div style={styles.popularPricingCard}>
                <div style={styles.popularTag}>Most Popular</div>
                <div style={styles.pricingCardInner}>
                  <h3 style={styles.pricingTitle}>Quarterly Program</h3>
<<<<<<< HEAD
                  <div style={styles.pricingAmount}>$99</div>
=======
                  <div style={styles.pricingAmount}>R1899</div>
>>>>>>> master
                  <p style={styles.pricingPeriod}>per month</p>
                  <ul style={styles.pricingFeatures}>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Comprehensive Inspection</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Quarterly Treatments</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Multiple Pest Coverage</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Between-Visit Guarantees</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Free Emergency Visits</span>
                    </li>
                  </ul>
<<<<<<< HEAD
                  <button style={styles.popularPricingButton}>Get Started</button>
=======
                  <button style={styles.popularPricingButton}>Book Now</button>
>>>>>>> master
                </div>
              </div>
  
              <div style={styles.pricingCard}>
                <div style={styles.pricingCardInner}>
                  <h3 style={styles.pricingTitle}>Complete Package</h3>
<<<<<<< HEAD
                  <div style={styles.pricingAmount}>$249</div>
=======
                  <div style={styles.pricingAmount}>R4557</div>
>>>>>>> master
                  <p style={styles.pricingPeriod}>per month</p>
                  <ul style={styles.pricingFeatures}>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Full Pest Management</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Monthly Preventative Visits</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>All Pest Types Covered</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Bi-monthly Cleaning Service</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>24/7 Emergency Response</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Termite Monitoring Included</span>
                    </li>
                  </ul>
<<<<<<< HEAD
                  <button style={styles.pricingButton}>Get Started</button>
=======
                  <button style={styles.pricingButton}>Book Now</button>
>>>>>>> master
                </div>
              </div>
            </div>
          </div>
        </div>
  
<<<<<<< HEAD
        <div style={styles.ctaSection}>
          <div style={styles.ctaGlow}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready for a Pest-Free, Clean Environment?</h2>
            <p style={styles.ctaDescription}>
              Contact us today and discover why we're the trusted choice for residential and commercial properties
            </p>
            <div style={styles.ctaButtons}>
=======
        <div style={responsiveStyles.ctaSection}>
          <div style={styles.ctaGlow}></div>
          <div style={styles.ctaContent}>
            <h2 style={responsiveStyles.ctaTitle}>Ready for a Pest-Free, Clean Environment?</h2>
            <p style={responsiveStyles.ctaDescription}>
              Contact us today and discover why we're the trusted choice for residential and commercial properties
            </p>
            <div style={responsiveStyles.ctaButtons}>
>>>>>>> master
              <button style={styles.ctaPrimaryButton}>Schedule Service</button>
              <button style={styles.ctaSecondaryButton}>Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  const styles = {
      container: {
        padding: "100px 20px",
        maxWidth: "1400px",
        margin: "0 auto",
        fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        color: "#0f172a",
        position: "relative",
        overflow: "hidden",
        paddingTop: "150px", 
<<<<<<< HEAD
=======
        paddingBottom: "50px", 
>>>>>>> master
      },
      backgroundDecoration: {
        position: "absolute",
        top: "-300px",
        right: "-300px",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(56, 189, 248, 0) 70%)",
        zIndex: "-1",
      },
      headerSection: {
        textAlign: "center",
        marginBottom: "80px",
        position: "relative",
      },
      animatedBox: {
        display: "inline-block",
        background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        borderRadius: "30px",
        padding: "10px 20px",
        marginBottom: "24px",
        border: "1px solid rgba(56, 189, 248, 0.2)",
        backdropFilter: "blur(10px)",
      },
      tagline: {
        background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "600",
        fontSize: "16px",
        letterSpacing: "0.5px",
      },
      title: {
        fontSize: "48px",
        fontWeight: "800",
        background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "24px",
        lineHeight: "1.2",
        letterSpacing: "-0.02em",
      },
      description: {
        fontSize: "20px",
        color: "#64748b",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
        fontWeight: "400",
      },
      servicesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        gap: "40px",
        marginBottom: "100px",
      },
      serviceCard: {
        backgroundColor: "white",
        borderRadius: "24px",
        padding: "40px",
        paddingBottom: "20px",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.05)",
        display: "flex",
        flexDirection: "column",
<<<<<<< HEAD
        height: "100%",
=======
>>>>>>> master
        border: "1px solid rgba(226, 232, 240, 0.8)",
        borderTop: "5px solid rgba(0, 0, 0, 0.3)",
        position: "relative",
        overflow: "hidden",
        opacity: "1", 
        transform: "translateY(0)", 
      },
      serviceIconWrapper: {
        width: "50px",
        height: "50px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "24px",
        border: "1px solid rgba(56, 189, 248, 0.2)",
      },
      serviceIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      serviceTitle: {
        fontSize: "24px",
        fontWeight: "700",
        color: "#0f172a",
        marginBottom: "16px",
        position: "relative",
      },
      serviceDescription: {
        fontSize: "16px",
        color: "#64748b",
        marginBottom: "24px",
        lineHeight: "1.6",
      },
      serviceDetails: {
        listStyleType: "none",
        padding: "0",
        margin: "0 0 30px 0",
        flexGrow: "1",
      },
      detailItem: {
        padding: "10px 0",
        fontSize: "15px",
        color: "#475569",
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
      },
      checkmark: {
        color: "#3b82f6",
        fontWeight: "bold",
        fontSize: "16px",
      },
<<<<<<< HEAD
      learnMoreButton: {
        color: "#3b82f6",
        border: "none",
=======

      learnMoreButton: {
        // color: "#3b82f6",
>>>>>>> master
        marginBottom: "30px",
        backgroundColor: "white",
        color: "#333",
        textTransform: "uppercase",
<<<<<<< HEAD
        border: "2px solid #3b82f6",
=======
        border: "1px solid #3b82f6",
>>>>>>> master
        padding: "14px 28px",
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
        width: "100%",
        ":hover": {
<<<<<<< HEAD
          backgroundColor: "rgba(59, 130, 246, 0.05)",
=======
          backgroundColor: "rgba(59, 130, 246, 0.7)",
>>>>>>> master
          transform: "translateY(-2px)",
        },
      },
      buttonArrow: {
        display: "inline-block",
        marginLeft: '10px'
      },
    pricingSection: {
      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      borderRadius: "40px",
<<<<<<< HEAD
      padding: "80px 40px",
      marginBottom: "100px",
=======
      padding: "0",
      marginBottom: "60px",
>>>>>>> master
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 20px 80px rgba(0, 0, 0, 0.03)",
    },
    pricingSectionContent: {
      position: "relative",
      zIndex: "1",
    },
    pricingHeader: {
      textAlign: "center",
      marginBottom: "60px",
    },
    sectionTitle: {
      fontSize: "40px",
      fontWeight: "800",
      color: "#0f172a",
      marginBottom: "20px",
      lineHeight: "1.2",
      letterSpacing: "-0.02em",
    },
    pricingDescription: {
      fontSize: "18px",
      color: "#64748b",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    pricingCard: {
      borderRadius: "24px",
      background: "white",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.05)",
      border: "1px solid rgba(226, 232, 240, 0.8)",
      ":hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05)",
      },
    },
    popularPricingCard: {
      borderRadius: "24px",
      background: "white",
      overflow: "hidden",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      boxShadow: "0 20px 60px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)",
      border: "1px solid rgba(59, 130, 246, 0.2)",
      position: "relative",
      transform: "scale(1.05)",
      zIndex: "1",
      ":hover": {
        transform: "scale(1.05) translateY(-10px)",
        boxShadow: "0 30px 80px rgba(59, 130, 246, 0.15), 0 1px 3px rgba(0, 0, 0, 0.05)",
      },
    },
    pricingCardInner: {
      padding: "40px",
    },
    popularTag: {
      position: "absolute",
      top: "20px",
      right: "20px",
      background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
      color: "white",
      padding: "8px 16px",
      borderRadius: "20px",
      fontSize: "14px",
      fontWeight: "600",
      boxShadow: "0 4px 10px rgba(59, 130, 246, 0.3)",
    },
    pricingTitle: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "20px",
      color: "#0f172a",
    },
    pricingAmount: {
      fontSize: "56px",
      fontWeight: "800",
      background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      lineHeight: "1",
      marginBottom: "8px",
    },
    pricingPeriod: {
      color: "#64748b",
      marginBottom: "30px",
      fontSize: "16px",
    },
    pricingFeatures: {
      listStyleType: "none",
      padding: "0",
      margin: "0 0 30px 0",
      textAlign: "left",
      fontSize: "16px",
      color: "#475569",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    pricingButton: {
      backgroundColor: "white",
      color: "#3b82f6",
      border: "2px solid #3b82f6",
      padding: "14px 28px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      ":hover": {
        backgroundColor: "rgba(59, 130, 246, 0.05)",
        transform: "translateY(-2px)",
      },
    },
    popularPricingButton: {
      background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
      color: "white",
      border: "none",
      padding: "16px 28px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      width: "100%",
      boxShadow: "0 4px 10px rgba(59, 130, 246, 0.3)",
      ":hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
      },
    },
    ctaSection: {
      borderRadius: "30px",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      padding: "80px 40px",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 20px 80px rgba(0, 0, 0, 0.1)",
    },
    ctaGlow: {
      position: "absolute",
      top: "-100px",
      right: "-100px",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, rgba(56, 189, 248, 0) 70%)",
      filter: "blur(40px)",
    },
    ctaContent: {
      position: "relative",
      zIndex: "1",
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    },
    ctaTitle: {
      fontSize: "36px",
      fontWeight: "800",
      color: "white",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    ctaDescription: {
      fontSize: "18px",
      color: "#cbd5e1",
      marginBottom: "40px",
      lineHeight: "1.6",
    },
    ctaButtons: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    ctaPrimaryButton: {
      background: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)",
      color: "white",
      border: "none",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 10px rgba(59, 130, 246, 0.3)",
      ":hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
      },
    },
    ctaSecondaryButton: {
      backgroundColor: "transparent",
      color: "white",
      border: "2px solid rgba(255, 255, 255, 0.2)",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        transform: "translateY(-2px)",
      },
    },
  }
  
  export default Services
  
<<<<<<< HEAD
  
=======
  
>>>>>>> master
