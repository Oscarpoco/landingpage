import React from "react"
import { Monitor, Gamepad, Printer, Coffee, Users, Wifi } from 'lucide-react';

function Services() {
    const serviceItems = [
      {
        id: 1,
        icon: <Monitor size={35} />,
        title: "Computer Workstations",
        description:
          "High-performance computers equipped with the latest software for browsing, work, and entertainment.",
        details: ["Intel Core i7/i9 processors", "32GB RAM", "NVIDIA RTX graphics", "Dual monitors"],
      },
      {
        id: 2,
        icon: <Gamepad size={35} />,
        title: "Gaming Zone",
        description: "Top-tier gaming stations with the latest games and accessories for the ultimate gaming experience.",
        details: [
          "Latest PC games library",
          "Gaming consoles (PS5, Xbox Series X)",
          "VR gaming equipment",
          "Gaming tournaments",
        ],
      },
      {
        id: 3,
        icon: <Printer size={35} />,
        title: "Printing Services",
        description: "High-quality printing, scanning, and copying services for all your document needs.",
        details: ["Color and B&W printing", "Document scanning", "Photocopying", "Large format printing"],
      },
      {
        id: 4,
        icon: <Coffee size={35} />,
        title: "Cafe Area",
        description: "Refreshments and snacks to keep you energized during your work or gaming sessions.",
        details: ["Hot and cold beverages", "Pastries and snacks", "Sandwiches and light meals", "Free water refills"],
      },
      {
        id: 5,
        icon: <Users size={35} />,
        title: "Meeting Rooms",
        description: "Private meeting spaces for group work, interviews, or small gatherings with all necessary tech.",
        details: ["Video conferencing equipment", "Projectors and screens", "Whiteboards", "Catering options"],
      },
      {
        id: 6,
        icon: <Wifi size={35} />,
        title: "High-Speed WiFi",
        description: "Blazing fast internet connection for all your browsing, streaming, and download needs.",
        details: ["Fiber optic connection", "1 Gbps download/upload speeds", "Secure network", "Technical support"],
      },
    ]
  
    return (
      <div style={styles.container}>
        <div style={styles.backgroundDecoration}></div>
  
        <div style={styles.headerSection}>
          <div style={styles.animatedBox}>
            <span style={styles.tagline}>Premium Services</span>
          </div>
          <h1 style={styles.title}>Elevate Your Digital Experience</h1>
          <p style={styles.description}>
            Discover our comprehensive range of cutting-edge technology services designed to meet your every need
          </p>
        </div>
  
        <div style={styles.servicesGrid}>
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
                <span>Explore</span>
                <span style={styles.buttonArrow}>→</span>
              </button>
            </div>
          ))}
        </div>
  
        <div style={styles.pricingSection}>
          <div style={styles.pricingSectionContent}>
            <div style={styles.pricingHeader}>
              <div style={styles.animatedBox}>
                <span style={styles.tagline}>Flexible Plans</span>
              </div>
              <h2 style={styles.sectionTitle}>Choose Your Perfect Plan</h2>
              <p style={styles.pricingDescription}>
                Select the option that best suits your needs, from hourly sessions to premium memberships
              </p>
            </div>
  
            <div style={styles.pricingGrid}>
              <div style={styles.pricingCard}>
                <div style={styles.pricingCardInner}>
                  <h3 style={styles.pricingTitle}>Hourly Access</h3>
                  <div style={styles.pricingAmount}>$5</div>
                  <p style={styles.pricingPeriod}>per hour</p>
                  <ul style={styles.pricingFeatures}>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Computer Workstation</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>High-Speed Internet</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Basic Software</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Technical Support</span>
                    </li>
                  </ul>
                  <button style={styles.pricingButton}>Get Started</button>
                </div>
              </div>
  
              <div style={styles.popularPricingCard}>
                <div style={styles.popularTag}>Most Popular</div>
                <div style={styles.pricingCardInner}>
                  <h3 style={styles.pricingTitle}>Day Pass</h3>
                  <div style={styles.pricingAmount}>$25</div>
                  <p style={styles.pricingPeriod}>full day</p>
                  <ul style={styles.pricingFeatures}>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Computer Workstation</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>High-Speed Internet</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>All Software</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Gaming Access</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Free Beverage</span>
                    </li>
                  </ul>
                  <button style={styles.popularPricingButton}>Get Started</button>
                </div>
              </div>
  
              <div style={styles.pricingCard}>
                <div style={styles.pricingCardInner}>
                  <h3 style={styles.pricingTitle}>Membership</h3>
                  <div style={styles.pricingAmount}>$199</div>
                  <p style={styles.pricingPeriod}>per month</p>
                  <ul style={styles.pricingFeatures}>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Unlimited Access</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Premium Workstations</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Priority Booking</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Gaming Tournaments</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Free Printing (100 pages)</span>
                    </li>
                    <li>
                      <span style={styles.checkmark}>✓</span>
                      <span>Discounted Meeting Rooms</span>
                    </li>
                  </ul>
                  <button style={styles.pricingButton}>Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div style={styles.ctaSection}>
          <div style={styles.ctaGlow}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Ready to Experience the Difference?</h2>
            <p style={styles.ctaDescription}>
              Join us today and discover why we're the preferred choice for tech enthusiasts and professionals alike
            </p>
            <div style={styles.ctaButtons}>
              <button style={styles.ctaPrimaryButton}>Book Now</button>
              <button style={styles.ctaSecondaryButton}>Contact Us</button>
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
        height: "100%",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        borderTop: "5px solid rgba(0, 0, 0, 0.3)",
        position: "relative",
        overflow: "hidden",
        opacity: "1", 
        transform: "translateY(0)", 
      },
      serviceIconWrapper: {
        width: "80px",
        height: "80px",
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
        fontSize: "24px",
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
      learnMoreButton: {
        backgroundColor: "transparent",
        color: "#3b82f6",
        border: "none",
        padding: "10px 0",
        fontSize: "16px",
        cursor: "pointer",
        fontWeight: "600",
        textAlign: "left",
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      },
      buttonArrow: {
        display: "inline-block",
      },
    pricingSection: {
      background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
      borderRadius: "40px",
      padding: "80px 40px",
      marginBottom: "100px",
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
  
  