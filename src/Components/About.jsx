import React, { useState, useEffect } from "react";
import { Shield, Sparkles, Clock } from 'lucide-react';

function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getResponsiveStyle = (baseStyle, mobileOverrides = {}) => {
        return isMobile 
            ? { ...baseStyle, ...mobileOverrides }
            : baseStyle;
    };

    return (
        <div style={getResponsiveStyle(styles.container, { 
            paddingTop: isMobile ? '140px' : '80px' 
        })}>
            <div style={getResponsiveStyle(styles.headerSection, {
                padding: isMobile ? '0px 3%' : '0px 5%'
            })}>
                <div style={styles.headerContent}>
                    <div style={styles.animatedBox}>
                        <span style={styles.tagline}>Our Mission</span>
                    </div>
                    <h1 style={getResponsiveStyle(styles.title, {
                        fontSize: isMobile ? '28px' : '32px',
                        textAlign: isMobile ? 'center' : 'left'
                    })}>About CleanPest Solutions</h1>
                    <p style={getResponsiveStyle(styles.subtitle, {
                        fontSize: isMobile ? '16px' : '18px',
                        textAlign: isMobile ? 'center' : 'left'
                    })}>
                        Providing superior pest control and cleaning services since 2010, creating healthier spaces for families and businesses
                    </p>
                </div>
            </div>

            <div style={getResponsiveStyle(styles.contentSection, {
                padding: isMobile ? '20px 5%' : '80px 5%'
            })}>
                <div style={getResponsiveStyle(styles.storyContainer, {
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '20px' : '40px'
                })}>
                    <div style={getResponsiveStyle(styles.storyContent, {
                        flex: isMobile ? '1 1 100%' : '1 1 700px'
                    })}>
                        <h2 style={styles.sectionTitle}>Our Story</h2>
                        <div style={styles.underline}></div>
                        <p style={styles.paragraph}>
                            Founded in 2010, CleanPest Solutions began with a simple goal: to provide effective and environmentally responsible pest control and cleaning services. What started as a small family business with just 2 service vehicles has grown into a trusted provider with a fleet of 20+ fully equipped vans serving the entire metro area.
                        </p>
                        <p style={styles.paragraph}>
                            As community needs evolved, so did our services. We've continuously expanded our expertise, upgraded our equipment, and refined our eco-friendly approach to create healthier living and working environments for our customers.
                        </p>

                        <h2 style={styles.sectionTitle}>Our Vision</h2>
                        <div style={styles.underline}></div>
                        <p style={styles.paragraph}>
                            We aim to be the region's most trusted name in integrated pest management and cleaning services. Our goal is to provide solutions that are effective against pests while being safe for families, pets, and the environment. 
                        </p>
                        <p style={styles.paragraph}>
                            We envision a future where pest control and cleaning work together harmoniously to create truly healthy spaces. Our comprehensive approach addresses both visible cleanliness and invisible threats like bacteria, allergens, and pests.
                        </p>
                    </div>
                    <div style={getResponsiveStyle(styles.storyImage, {
                        flex: isMobile ? '1 1 100%' : '1 1 700px',
                        height: isMobile ? '300px' : '500px'
                    })}></div>
                </div>

                <div style={styles.valuesSection}>
                    <h2 style={styles.valuesSectionTitle}>Our Core Values</h2>
                    <div style={getResponsiveStyle(styles.valuesGrid, {
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))'
                    })}>
                        <div style={styles.valueCard}>
                            <div style={styles.serviceIconWrapper}>
                                <div style={styles.serviceIcon}><Shield size={24} /></div>
                            </div>
                            <h3 style={styles.valueTitle}>Safety</h3>
                            <p style={styles.valueDescription}>
                                We prioritize the safety of your family, pets, and the environment with our eco-friendly products and methods.
                            </p>
                        </div>
                        <div style={styles.valueCard}>
                            <div style={styles.serviceIconWrapper}>
                                <div style={styles.serviceIcon}><Sparkles size={24} /></div>
                            </div>
                            <h3 style={styles.valueTitle}>Thoroughness</h3>
                            <p style={styles.valueDescription}>
                                We deliver comprehensive solutions that address both immediate problems and prevent future issues.
                            </p>
                        </div>
                        <div style={styles.valueCard}>
                            <div style={styles.serviceIconWrapper}>
                                <div style={styles.serviceIcon}><Clock size={24} /></div>
                            </div>
                            <h3 style={styles.valueTitle}>Reliability</h3>
                            <p style={styles.valueDescription}>
                                Our services are dependable, consistent, and always delivered with professionalism and respect for your property.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={styles.teamSection}>
                    <h2 style={styles.teamSectionTitle}>Meet Our Team</h2>
                    <p style={styles.teamSectionSubtitle}>
                        Our staff consists of certified pest control specialists and cleaning professionals with years of experience
                    </p>
                    <div style={getResponsiveStyle(styles.teamGrid, {
                        gap: isMobile ? '20px' : '30px'
                    })}>
                        <div style={getResponsiveStyle(styles.teamMember, {
                            width: isMobile ? '100%' : '350px'
                        })}>
                            <div style={styles.teamMemberImage}></div>
                            <h3 style={styles.teamMemberName}>Robert Williams</h3>
                            <p style={styles.teamMemberRole}>Founder & CEO</p>
                        </div>
                        <div style={getResponsiveStyle(styles.teamMember, {
                            width: isMobile ? '100%' : '350px'
                        })}>
                            <div style={styles.teamMemberImage}></div>
                            <h3 style={styles.teamMemberName}>Maria Rodriguez</h3>
                            <p style={styles.teamMemberRole}>Operations Director</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={getResponsiveStyle(styles.statsSection, {
                padding: isMobile ? '40px 3%' : '60px 5%',
                borderRadius: isMobile ? '0' : '16px',
            })}>
                <div style={getResponsiveStyle(styles.statsGrid, {
                    gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))'
                })}>
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>20+</div>
                        <div style={styles.statLabel}>Service Vehicles</div>
                    </div>
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>100%</div>
                        <div style={styles.statLabel}>Satisfaction Guarantee</div>
                    </div>
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>24/7</div>
                        <div style={styles.statLabel}>Emergency Service</div>
                    </div>
                    <div style={styles.statCard}>
                        <div style={styles.statNumber}>15,000+</div>
                        <div style={styles.statLabel}>Happy Clients</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    container: {
        width: "100%",
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        paddingTop: "80px",
    },
    headerSection: {
        padding: "0px 5%",
        paddingTop: "80px",
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
        fontSize: "32px",
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
        maxWidth: "1400px",
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
        flex: "1 1 700px",
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
        flex: "1 1 700px",
        height: "500px",
        backgroundColor: "#e2e8f0",
        borderRadius: "16px",
        backgroundImage:
            'url("https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: "cover",
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
        display: "flex",
        gap: "30px",
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    teamMember: {
        textAlign: "center",
        transition: "transform 0.3s ease",
        width: '350px'
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


export default About;