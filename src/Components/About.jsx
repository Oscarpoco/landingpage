function About() {
    return (
      <div style={styles.container}>
        <div style={styles.headerSection}>
          <div style={styles.headerContent}>
            <div style={styles.animatedBox}>
              <span style={styles.tagline}>Our Journey</span>
            </div>
            <h1 style={styles.title}>About CyberHub</h1>
            <p style={styles.subtitle}>
              Creating innovative digital spaces since 2015, bringing technology and community together
            </p>
          </div>
        </div>
  
        <div style={styles.contentSection}>
          <div style={styles.storyContainer}>
            <div style={styles.storyContent}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <div style={styles.underline}></div>
              <p style={styles.paragraph}>
                Founded in 2015, CyberHub began with a simple mission: to create a comfortable space where technology and
                community intersect. What started as a small internet cafe with just 10 computers has grown into a tech
                haven with over 50 high-end stations.
              </p>
              <p style={styles.paragraph}>
                As technology evolved, so did we. We've continuously upgraded our facilities, expanded our services, and
                refined our approach to create the ultimate digital experience for our customers.
              </p>
  
              <h2 style={styles.sectionTitle}>Our Vision</h2>
              <div style={styles.underline}></div>
              <p style={styles.paragraph}>
                We aim to bridge the digital divide by providing access to cutting-edge technology and fast internet
                connections for everyone. Whether you're a student, professional, gamer, or just need to check your email,
                CyberHub is your technological home away from home.
              </p>
              <p style={styles.paragraph}>
                We envision a future where technology enhances human connection rather than replacing it. Our space is
                designed to foster collaboration, creativity, and community.
              </p>
            </div>
            <div style={styles.storyImage}></div>
          </div>
  
          <div style={styles.valuesSection}>
            <h2 style={styles.valuesSectionTitle}>Our Core Values</h2>
            <div style={styles.valuesGrid}>
              <div style={styles.valueCard}>
                <div style={styles.valueIcon}>⚡</div>
                <h3 style={styles.valueTitle}>Innovation</h3>
                <p style={styles.valueDescription}>
                  We constantly push the boundaries of what's possible, bringing the latest technology to our customers.
                </p>
              </div>
              <div style={styles.valueCard}>
                <div style={styles.valueIcon}>👥</div>
                <h3 style={styles.valueTitle}>Community</h3>
                <p style={styles.valueDescription}>
                  We foster a welcoming environment where people can connect, collaborate, and learn together.
                </p>
              </div>
              <div style={styles.valueCard}>
                <div style={styles.valueIcon}>🛡️</div>
                <h3 style={styles.valueTitle}>Reliability</h3>
                <p style={styles.valueDescription}>
                  Our services are dependable, consistent, and always available when you need them most.
                </p>
              </div>
            </div>
          </div>
  
          <div style={styles.teamSection}>
            <h2 style={styles.teamSectionTitle}>Meet Our Team</h2>
            <p style={styles.teamSectionSubtitle}>
              Our staff consists of tech enthusiasts and IT professionals who are always ready to help
            </p>
            <div style={styles.teamGrid}>
              <div style={styles.teamMember}>
                <div
                  style={{
                    ...styles.teamMemberImage,
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                  }}
                ></div>
                <h3 style={styles.teamMemberName}>Alex Johnson</h3>
                <p style={styles.teamMemberRole}>Founder & CEO</p>
              </div>
              <div style={styles.teamMember}>
                <div
                  style={{
                    ...styles.teamMemberImage,
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                  }}
                ></div>
                <h3 style={styles.teamMemberName}>Sarah Chen</h3>
                <p style={styles.teamMemberRole}>Operations Manager</p>
              </div>
              <div style={styles.teamMember}>
                <div
                  style={{
                    ...styles.teamMemberImage,
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                  }}
                ></div>
                <h3 style={styles.teamMemberName}>Michael Rivera</h3>
                <p style={styles.teamMemberRole}>Technical Director</p>
              </div>
              <div style={styles.teamMember}>
                <div
                  style={{
                    ...styles.teamMemberImage,
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")',
                  }}
                ></div>
                <h3 style={styles.teamMemberName}>Emily Patel</h3>
                <p style={styles.teamMemberRole}>Customer Experience</p>
              </div>
            </div>
          </div>
        </div>
  
        <div style={styles.statsSection}>
          <div style={styles.statsGrid}>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statLabel}>High-End Workstations</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>1 Gbps</div>
              <div style={styles.statLabel}>Internet Speed</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>24/7</div>
              <div style={styles.statLabel}>Open Hours</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statNumber}>10,000+</div>
              <div style={styles.statLabel}>Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  const styles = {
    container: {
      width: "100%",
      fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      paddingTop: "80px", 
    },
    headerSection: {
      backgroundColor: "#f1f5f9",
      padding: "80px 5%",
      textAlign: "center",
    },
    headerContent: {
      maxWidth: "800px",
      margin: "0 auto",
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
      color: "#3b82f6",
      fontWeight: "600",
      fontSize: "16px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "800",
      marginBottom: "16px",
      color: "#0f172a",
    },
    subtitle: {
      fontSize: "18px",
      color: "#64748b",
      lineHeight: "1.6",
      maxWidth: "600px",
      margin: "0 auto",
    },
    contentSection: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 5%",
    },
    storyContainer: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "40px",
      marginBottom: "80px",
    },
    storyContent: {
      flex: "1 1 500px",
    },
    sectionTitle: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "16px",
    },
    underline: {
      width: "60px",
      height: "4px",
      backgroundColor: "#3b82f6",
      marginBottom: "20px",
      borderRadius: "2px",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#475569",
      marginBottom: "24px",
    },
    storyImage: {
      flex: "1 1 400px",
      height: "400px",
      backgroundColor: "#e2e8f0",
      borderRadius: "16px",
      backgroundImage:
        'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    },
    valuesSection: {
      marginBottom: "80px",
    },
    valuesSectionTitle: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#0f172a",
      textAlign: "center",
      marginBottom: "40px",
    },
    valuesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
    },
    valueCard: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    valueIcon: {
      fontSize: "36px",
      marginBottom: "16px",
    },
    valueTitle: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#0f172a",
      marginBottom: "12px",
    },
    valueDescription: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#64748b",
    },
    teamSection: {
      marginBottom: "80px",
    },
    teamSectionTitle: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#0f172a",
      textAlign: "center",
      marginBottom: "16px",
    },
    teamSectionSubtitle: {
      fontSize: "18px",
      color: "#64748b",
      textAlign: "center",
      marginBottom: "40px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "30px",
    },
    teamMember: {
      textAlign: "center",
      transition: "transform 0.3s ease",
    },
    teamMemberImage: {
      width: "100%",
      height: "280px",
      borderRadius: "12px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginBottom: "16px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.5s ease",
    },
    teamMemberName: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#0f172a",
      marginBottom: "4px",
    },
    teamMemberRole: {
      fontSize: "14px",
      color: "#3b82f6",
      fontWeight: "500",
    },
    statsSection: {
      backgroundColor: "#0f172a",
      padding: "60px 5%",
      borderRadius: "20px",
      maxWidth: "1200px",
      margin: "0 auto 80px",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
    },
    statCard: {
      textAlign: "center",
      padding: "20px",
    },
    statNumber: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "8px",
    },
    statLabel: {
      fontSize: "16px",
      color: "#94a3b8",
    },
  }
  
  export default About
  
  