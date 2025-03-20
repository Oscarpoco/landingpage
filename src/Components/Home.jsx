import React from 'react';
import { Sparkles, Bug, ShieldCheck, Info } from 'lucide-react';

function Home() {
    return (
        <div style={styles.container}>
            <div style={styles.heroSection}>
                <div style={styles.heroContent}>
                    <div style={styles.animatedBox}>
                        <span style={styles.tagline}>Premium Pest Solutions</span>
                    </div>
                    <h1 style={styles.title}>Pest Control <span style={styles.highlight}>And</span> Cleaning Services</h1>
                    <p style={styles.description}>
                        Professional pest elimination, thorough sanitization, and comprehensive cleaning services in a safe, effective approach designed for residential and commercial properties.
                    </p>
                    <div style={styles.buttonGroup}>
                        <button style={styles.primaryButton}>Schedule Service</button>
                        <button style={styles.secondaryButton}>View Plans</button>
                    </div>
                    <div style={styles.stats}>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>15+</span>
                            <span style={styles.statLabel}>Years Experience</span>
                        </div>
                        <div style={styles.divider}></div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>100%</span>
                            <span style={styles.statLabel}>Satisfaction Guarantee</span>
                        </div>
                        <div style={styles.divider}></div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>24/7</span>
                            <span style={styles.statLabel}>Emergency Service</span>
                        </div>
                    </div>
                </div>
                <div style={styles.heroImageContainer}>
                    <div style={styles.heroImage}></div>
                    <div style={styles.imageBadge}>
                        <span style={styles.badgeText}>Pest-Free Living Guaranteed</span>
                    </div>
                </div>
            </div>

            <div style={styles.featuresSection}>
                <div style={styles.featuresSectionHeader}>
                    <h2 style={styles.sectionTitle}>Why Choose PestPro Solutions?</h2>
                    <p style={styles.sectionSubtitle}>
                        Experience the perfect blend of expertise, safety, and exceptional service
                    </p>
                </div>

                <div style={styles.featuresGrid}>
                    <div style={styles.feature}>
                        <div style={styles.serviceIconWrapper}>
                            <div style={styles.serviceIcon}><Bug size={24} /></div>
                        </div>
                        <h3 style={styles.featureTitle}>Complete Pest Elimination</h3>
                        <p style={styles.featureDescription}>
                            Cutting-edge treatments and techniques to eliminate all types of pests from your property
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <div style={styles.serviceIconWrapper}>
                            <div style={styles.serviceIcon}><Sparkles size={24} /></div>
                        </div>
                        <h3 style={styles.featureTitle}>Deep Cleaning Services</h3>
                        <p style={styles.featureDescription}>
                            Thorough cleaning and sanitization for homes and businesses with eco-friendly products
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <div style={styles.serviceIconWrapper}>
                            <div style={styles.serviceIcon}><ShieldCheck size={24} /></div>
                        </div>
                        <h3 style={styles.featureTitle}>Preventative Protection</h3>
                        <p style={styles.featureDescription}>
                            Ongoing maintenance plans to ensure long-term protection against future infestations
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <div style={styles.serviceIconWrapper}>
                            <div style={styles.serviceIcon}><Info size={24} /></div>
                        </div>
                        <h3 style={styles.featureTitle}>Certified Technicians</h3>
                        <p style={styles.featureDescription}>
                            Professionally trained and licensed specialists with years of industry experience
                        </p>
                    </div>
                </div>
            </div>

            <div style={styles.ctaSection}>
                <div style={styles.ctaContent}>
                    <h2 style={styles.ctaTitle}>Ready to enjoy a pest-free, clean environment?</h2>
                    <p style={styles.ctaDescription}>Join thousands of satisfied customers who've made PestPro Solutions their trusted pest control and cleaning partner.</p>
                    <button style={styles.ctaButton}>Book Your Service Today</button>
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
        display: "inline-block",
        background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
        borderRadius: "30px",
        padding: "10px 20px",
        marginBottom: "24px",
        border: "1px solid rgba(56, 189, 248, 0.2)",
        backdropFilter: "blur(10px)",
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
        width: '2px',
        height: '70px',
        backgroundColor: 'rgba(0, 0, 0, .2)',
    },
    heroImageContainer: {
        width: '40%',
        position: 'relative',
    },
    heroImage: {
        width: '100%',
        height: '500px',
        backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.4), rgba(30, 41, 59, 0.4)), url("https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
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
        padding: '20px 5%',
        backgroundColor: '#f8fafc',
        borderRadius: '16px',
        margin: '0 auto 80px',
        maxWidth: '1400px',
    },

    featuresSectionHeader: {
        textAlign: 'center',
        marginBottom: '60px',
    },

    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1e293b',
        marginBottom: '16px',
        position: 'relative',
        display: 'inline-block',
    },

    sectionSubtitle: {
        fontSize: '1.25rem',
        color: '#64748b',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6',
    },

    featuresGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
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

    feature: {
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
        },
    },

    featureIconContainer: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eef2ff',
        marginBottom: '24px',
    },

    featureIcon: {
        fontSize: '28px',
    },

    featureContent: {
        flex: '1',
    },

    featureTitle: {
        fontSize: '1.25rem',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '12px',
    },

    featureDescription: {
        fontSize: '1rem',
        color: '#64748b',
        lineHeight: '1.6',
    },

    // CTA Section
    ctaSection: {
        padding: '80px 5%',
        background: '#0f172a',
        borderRadius: '16px',
        margin: '0 auto 80px',
        maxWidth: '1250px',
    },

    ctaContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            textAlign: 'center',
        },
    },

    ctaTextContent: {
        flex: '1',
        minWidth: '300px',
    },

    ctaTitle: {
        fontSize: '2.25rem',
        fontWeight: '700',
        color: 'white',
        marginBottom: '16px',
        lineHeight: '1.2',
    },

    ctaDescription: {
        fontSize: '1.1rem',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '600px',
        lineHeight: '1.6',
    },

    ctaButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: '#2563eb',
        border: 'none',
        borderRadius: '8px',
        padding: '16px 32px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 15px 20px -3px rgba(0, 0, 0, 0.15)',
        },
    },

    ctaButtonText: {
        marginRight: '10px',
    },

    ctaButtonIcon: {
        fontSize: '1.2rem',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'translateX(4px)',
        },
    }
};

export default Home;