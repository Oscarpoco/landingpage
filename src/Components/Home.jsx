import React, { useState, useEffect } from 'react';
import { Sparkles, Bug, ShieldCheck, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ openContactForm }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const responsiveStyles = {
        heroSection: {
            ...styles.heroSection,
            flexDirection: isMobile ? 'column' : 'row',
            padding: isMobile ? '0px' : styles.heroSection.padding,
        },
        heroContent: {
            ...styles.heroContent,
            width: isMobile ? '90%' : '40%',
            paddingRight: isMobile ? '0' : '40px',
            paddingTop: isMobile ? '40px' : '0px',
            textAlign: isMobile ? 'center' : 'left',
            // background: 'red'
        },
        heroImageContainer: {
            ...styles.heroImageContainer,
            width: isMobile ? '100%' : '40%',
            marginTop: isMobile ? '20px' : '0',
        },
        buttonGroup: {
            ...styles.buttonGroup,
            justifyContent: isMobile ? 'center' : 'flex-start',
        },
        stats: {
            ...styles.stats,
            flexDirection: isMobile ? 'row' : 'row',
            alignItems: isMobile ? 'center' : 'center',
            gap: isMobile ? '20px' : '16px',
        },
        divider: {
            ...styles.divider,
            display: isMobile ? 'none' : 'block',
        },
        featuresGrid: {
            ...styles.featuresGrid,
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
        },
        ctaContent: {
            ...styles.ctaContent,
            flexDirection: isMobile ? 'column' : 'row',
            textAlign: isMobile ? 'center' : 'left',
            alignItems: 'center',
            justifyContent: 'center',
        },
        ctaTitle: {
            ...styles.ctaTitle,
            textAlign: isMobile ? 'center' : 'left',
            fontSize: isMobile ? '1.8rem' : '2.25rem',
        },
        ctaDescription: {
            ...styles.ctaDescription,
            textAlign: isMobile ? 'center' : 'left',
        },
    };

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const featureAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: { 
            y: -10,
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    const buttonAnimation = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    return (
        <div style={styles.container}>
            <motion.div 
                style={responsiveStyles.heroSection}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div 
                    style={responsiveStyles.heroContent}
                    variants={fadeInUp}
                >
                    <motion.div 
                        style={styles.animatedBox}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span style={styles.tagline}>Premium Pest Solutions</span>
                    </motion.div>
                    <motion.h1 
                        style={{
                            ...styles.title,
                            fontSize: isMobile ? '34px' : '48px',
                            textAlign: isMobile ? 'center' : 'left'
                        }}
                        variants={fadeInUp}
                    >
                        Pest Control <motion.span 
                            style={styles.highlight}
                            animate={{ 
                                color: ["#3b82f6", "#38bdf8", "#3b82f6"],
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity,
                                repeatType: "reverse" 
                            }}
                        >And</motion.span> Cleaning Services
                    </motion.h1>
                    <motion.p 
                        style={{
                            ...styles.description,
                            textAlign: isMobile ? 'center' : 'left',
                            fontSize: isMobile ? '16px' : '18px',
                        }}
                        variants={fadeInUp}
                    >
                        Professional pest elimination, thorough sanitization, and comprehensive cleaning services in a safe, effective approach designed for residential and commercial properties.
                    </motion.p>
                    <motion.div 
                        style={responsiveStyles.buttonGroup}
                        variants={fadeInUp}
                    >
                        <motion.button 
                            style={{
                                ...styles.primaryButton,
                                width: isMobile ? '100%' : 'auto',
                                marginBottom: isMobile ? '0px' : '0',
                                padding: isMobile ? '16px' : 'auto',
                            }} 
                            onClick={openContactForm}
                            variants={buttonAnimation}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Schedule Service
                        </motion.button>
                        <motion.div
                            variants={buttonAnimation}
                            whileHover="hover"
                            whileTap="tap"
                            style={{ width: isMobile ? '100%' : 'auto' }}
                        >
                            <Link
                                to="/services"
                                style={{
                                    ...styles.secondaryButton,
                                    maxWidth: isMobile ? '290px' : '100%',
                                    width: '100%',
                                    display: 'inline-block',
                                    padding: isMobile ? '16px' : '16px',
                                    textAlign: 'center',
                                }}
                            >
                                View Plans
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        style={responsiveStyles.stats}
                        variants={fadeInUp}
                    >
                        <motion.div 
                            style={styles.statItem}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.span 
                                style={styles.statNumber}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >4+</motion.span>
                            <span style={styles.statLabel}>Years Experience</span>
                        </motion.div>
                        {!isMobile && <div style={responsiveStyles.divider}></div>}
                        <motion.div 
                            style={styles.statItem}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.span 
                                style={styles.statNumber}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >100%</motion.span>
                            <span style={styles.statLabel}>Satisfaction Guarantee</span>
                        </motion.div>
                        {!isMobile && <div style={responsiveStyles.divider}></div>}
                        <motion.div 
                            style={styles.statItem}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.span 
                                style={styles.statNumber}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >24/7</motion.span>
                            <span style={styles.statLabel}>Emergency Service</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    style={responsiveStyles.heroImageContainer}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <motion.div 
                        style={{ ...styles.heroImage, borderRadius: isMobile ? '0px' : '16px' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                    <motion.div 
                        style={{
                            ...styles.imageBadge,
                            position: isMobile ? 'static' : 'absolute',
                            marginTop: isMobile ? '-30px' : '0',
                            borderRadius: isMobile ? '0px' : '16px',
                            alignSelf: isMobile ? 'center' : 'auto',
                            textAlign: isMobile ? 'center' : 'left',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <span style={styles.badgeText}>Pest-Free Living Guaranteed</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                style={{
                    ...styles.featuresSection,
                    padding: isMobile ? '20px 3%' : '20px 5%'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <motion.div 
                    style={styles.featuresSectionHeader}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2 
                        style={{
                            ...styles.sectionTitle,
                            fontSize: isMobile ? '1.7rem' : '2.5rem',
                            textAlign: 'center'
                        }}
                    >
                        Why Choose The Mathe Projects Solutions?
                    </motion.h2>
                    <motion.p 
                        style={{
                            ...styles.sectionSubtitle,
                            fontSize: isMobile ? '14px' : '1.25rem'
                        }}
                    >
                        Experience the perfect blend of expertise, safety, and exceptional service
                    </motion.p>
                </motion.div>

                <motion.div 
                    style={responsiveStyles.featuresGrid}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div 
                        style={styles.feature}
                        variants={featureAnimation}
                        whileHover="hover"
                    >
                        <motion.div 
                            style={styles.serviceIconWrapper}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={styles.serviceIcon}><Bug size={24} /></div>
                        </motion.div>
                        <h3 style={styles.featureTitle}>Complete Pest Elimination</h3>
                        <p style={styles.featureDescription}>
                            Cutting-edge treatments and techniques to eliminate all types of pests from your property
                        </p>
                    </motion.div>
                    <motion.div 
                        style={styles.feature}
                        variants={featureAnimation}
                        whileHover="hover"
                    >
                        <motion.div 
                            style={styles.serviceIconWrapper}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={styles.serviceIcon}><Sparkles size={24} /></div>
                        </motion.div>
                        <h3 style={styles.featureTitle}>Deep Cleaning Services</h3>
                        <p style={styles.featureDescription}>
                            Thorough cleaning and sanitization for homes and businesses with eco-friendly products
                        </p>
                    </motion.div>
                    <motion.div 
                        style={styles.feature}
                        variants={featureAnimation}
                        whileHover="hover"
                    >
                        <motion.div 
                            style={styles.serviceIconWrapper}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={styles.serviceIcon}><ShieldCheck size={24} /></div>
                        </motion.div>
                        <h3 style={styles.featureTitle}>Preventative Protection</h3>
                        <p style={styles.featureDescription}>
                            Ongoing maintenance plans to ensure long-term protection against future infestations
                        </p>
                    </motion.div>
                    <motion.div 
                        style={styles.feature}
                        variants={featureAnimation}
                        whileHover="hover"
                    >
                        <motion.div 
                            style={styles.serviceIconWrapper}
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            <div style={styles.serviceIcon}><Info size={24} /></div>
                        </motion.div>
                        <h3 style={styles.featureTitle}>Certified Technicians</h3>
                        <p style={styles.featureDescription}>
                            Professionally trained and licensed specialists with years of industry experience
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                style={{
                    ...styles.ctaSection,
                    padding: isMobile ? '40px 5%' : '80px 5%',
                    borderRadius: isMobile ? '0px' : '16px',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
            >
                <motion.div 
                    style={responsiveStyles.ctaContent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div 
                        style={{
                            width: isMobile ? '100%' : 'auto',
                            marginBottom: isMobile ? '20px' : '0',
                        }}
                        variants={fadeInUp}
                    >
                        <motion.h2 
                            style={responsiveStyles.ctaTitle}
                            variants={fadeInUp}
                        >
                            Ready to enjoy a pest-free, clean environment?
                        </motion.h2>
                        <motion.p 
                            style={responsiveStyles.ctaDescription}
                            variants={fadeInUp}
                        >
                            Join thousands of satisfied customers who've made The Mathe Projects Solutions their trusted pest control and cleaning partner.
                        </motion.p>
                    </motion.div>
                    <motion.button 
                        style={{
                            ...styles.ctaButton,
                            width: isMobile ? '100%' : 'auto'
                        }} 
                        onClick={openContactForm}
                        variants={buttonAnimation}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Book Your Service Today
                    </motion.button>
                </motion.div>
            </motion.div>
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
        // flexWrap: 'wrap',
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
    },

    ctaButtonText: {
        marginRight: '10px',
    },

    ctaButtonIcon: {
        fontSize: '1.2rem',
        transition: 'transform 0.3s ease',
    }
};

export default Home;