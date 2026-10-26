
"use client";
import { useState } from "react";
import {
    Menu,
    X,
    ChevronDown,
    ArrowUpRight,
} from "lucide-react";

import {
    ArrowRight,
    Target,
    Eye,
    ShieldCheck,
    Globe2,
    Handshake,
    TrendingUp,
} from "lucide-react";

const leaders = [
    {
        name: "Dr Salam Ahmad Raza",
        role: "CEO",
        image: "/team-salam.jpg",
        description:
            "Leads Hunters Group's vision, strategy, and business direction. Focused on sustainable growth, strong partnerships, and global opportunities.",
    },
    {
        name: "M Huzaifa Attari",
        role: "Founder",
        image: "/team-huzaifa.jpg",
        description:
            "Founded Hunters Group in 2021 with a vision to connect businesses and create new opportunities.",
    },
    {
        name: "M Matiullah Sultani",
        role: "Co-Founder",
        image: "/team-matiullah.jpg",
        description:
            "Shares the vision of growing Hunters Group through partnership, teamwork, and business development.",
    },
    {
        name: "Zunaira Atta ur Rehman",
        role: "Managing Director",
        image: "/team-zunaira.jpg",
        description:
            "Oversees business coordination and daily operations, supporting effective management and organizational growth.",
    },
];

const teamMembers = [
    {
        name: "Zhang Yun (张云)",
        role: "Head of Import & Export",
        image: "/team-zhang-yun.jpg",
        description:
            "Leads import and export operations, focusing on international trade and cross-border coordination.",
    },
    {
        name: "Mirza Kashan Ali",
        role: "Head of IT",
        image: "/team-kashan.jpg",
        description:
            "Leads technology and digital development, focusing on website experience and technical solutions.",
    },
];

const values = [
    {
        icon: Handshake,
        title: "Long-Term Partnerships",
        description:
            "We value lasting business relationships built on communication, trust, and mutual understanding.",
    },
    {
        icon: ShieldCheck,
        title: "Professional Integrity",
        description:
            "We approach our work with responsibility, transparency, and respect for our business partners.",
    },
    {
        icon: TrendingUp,
        title: "Business Growth",
        description:
            "We help businesses explore opportunities, strengthen their digital presence, and reach new markets.",
    },
];

export default function AboutPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setServiceOpen(false);
    };
    return (
        <main className="about-page">

            <header className="site-header">
                <div className="nav-shell container">
                    <a href="/" className="brand" aria-label="Hunters Group home">
                        <img
                            src="/hunters-logo.png"
                            alt="Hunters Group logo"
                            className="brand-image"
                        />
                        <span className="brand-copy">
                            <strong>HUNTERS</strong>
                            <span>GROUP</span>
                        </span>
                    </a>

                    <button
                        className="mobile-toggle"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={23} /> : <Menu size={23} />}
                    </button>

                    <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                        <a href="/" onClick={closeMenu}>Home</a>
                        <a href="/about" onClick={closeMenu}>About Us</a>

                        <div className="nav-dropdown">
                            <button
                                className="nav-dropdown-trigger"
                                onClick={() => setServiceOpen(!serviceOpen)}
                                aria-expanded={serviceOpen}
                            >
                                Services <ChevronDown size={14} />
                            </button>

                            {serviceOpen && (
                                <div className="dropdown-panel">
                                    <a href="/services/ecommerce" onClick={closeMenu}>E-Commerce Solutions</a>
                                    <a href="/services/import" onClick={closeMenu}>Import Services</a>
                                    <a href="/services/export" onClick={closeMenu}>Export Services</a>
                                    <a href="/services/warehousing" onClick={closeMenu}>Warehousing</a>
                                    <a href="/services/logistics" onClick={closeMenu}>Logistics & Shipping</a>
                                    <a href="/services/buyer-sourcing" onClick={closeMenu}>Buyer & Sourcing</a>
                                    <a href="/services/web-development" onClick={closeMenu}>Web Development</a>
                                </div>
                            )}
                        </div>

                        <a href="/#why-us" onClick={closeMenu}>Why Hunters</a>
                        <a href="/#process" onClick={closeMenu}>Our Process</a>
                        <a href="/contact" onClick={closeMenu}>Contact</a>
                    </nav>

                    <a
                        href="https://wa.me/923238874539"
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary nav-cta"
                    >
                        Get a Quote <ArrowUpRight size={16} />
                    </a>
                </div>
            </header>

            {/* HERO */}
            <section className="about-hero">
                <div className="about-container">
                    <span className="about-eyebrow">
                        ABOUT HUNTERS GROUP
                    </span>

                    <h1>
                        Building Businesses.
                        <span> Connecting the World.</span>
                    </h1>

                    <p>
                        Empowering businesses through innovation, technology,
                        e-commerce solutions, digital services, and global trade.
                    </p>

                    <div className="about-hero-actions">
                        <a href="/contact" className="about-primary-btn">
                            Connect With Us <ArrowRight size={18} />
                        </a>

                        <a
                            href="#about-hunters"
                            className="about-secondary-btn"
                        >
                            Discover Our Story
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT HUNTERS GROUP */}
            <section className="about-story" id="about-hunters">
                <div className="about-container about-story-grid">
                    <div className="about-story-heading">
                        <span className="about-eyebrow">
                            WHO WE ARE
                        </span>

                        <h2>
                            About
                            <span> Hunters Group</span>
                        </h2>

                        <div className="about-blue-line" />
                    </div>

                    <div className="about-story-copy">
                        <p>
                            Hunters Group is a multi-service business and digital
                            solutions company established in 2021, with a vision to
                            empower businesses through innovation, technology, and
                            global trade. We specialize in Amazon, eBay, Etsy,
                            Shopify, Digital Marketing, Website Development, and
                            Import & Export Services.
                        </p>

                        <p>
                            Our mission is to help businesses grow locally and
                            internationally by providing innovative e-commerce
                            solutions, digital services, and global business
                            opportunities. We are committed to building long-term
                            partnerships, developing talent, and connecting
                            businesses with new markets.
                        </p>

                        <h3 className="about-tagline">
                            Hunters Group — Building Businesses, Creating
                            Opportunities, Connecting the World.
                        </h3>
                    </div>
                </div>
            </section>

            {/* MISSION AND VISION */}
            <section className="about-mission-section">
                <div className="about-container about-mission-grid">
                    <article className="about-mission-card">
                        <div className="about-icon">
                            <Target size={27} />
                        </div>

                        <span className="about-card-label">
                            OUR MISSION
                        </span>

                        <h3>Helping Businesses Grow</h3>

                        <p>
                            To help businesses grow locally and internationally
                            through innovative e-commerce solutions, digital
                            services, and global business opportunities.
                        </p>
                    </article>

                    <article className="about-mission-card about-vision-card">
                        <div className="about-icon">
                            <Eye size={27} />
                        </div>

                        <span className="about-card-label">
                            OUR VISION
                        </span>

                        <h3>Connecting the World</h3>

                        <p>
                            To empower businesses through innovation, technology,
                            and global trade while building lasting partnerships
                            and connecting companies with new markets.
                        </p>
                    </article>
                </div>
            </section>

            {/* COMPANY VALUES */}
            <section className="about-values-section">
                <div className="about-container">
                    <div className="about-section-heading">
                        <span className="about-eyebrow">
                            WHAT GUIDES US
                        </span>

                        <h2>
                            The Values Behind
                            <span> Our Work</span>
                        </h2>

                        <p>
                            The principles that shape how we work with our clients
                            and business partners.
                        </p>
                    </div>

                    <div className="about-values-grid">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article
                                    className="about-value-card"
                                    key={value.title}
                                >
                                    <div className="about-icon">
                                        <Icon size={25} />
                                    </div>

                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section
                className="about-team-section about-leadership-section"
                id="leadership"
            >
                <div className="about-container">
                    <div className="about-section-heading">
                        <span className="about-eyebrow">
                            LEADERSHIP
                        </span>

                        <h2>
                            Meet Our
                            <span> Leadership Team</span>
                        </h2>

                        <p>
                            The people guiding Hunters Group's vision, management,
                            and business direction.
                        </p>
                    </div>

                    <div className="about-leaders-grid">
                        {leaders.map((member) => (
                            <article
                                className="about-team-card"
                                key={member.name}
                            >
                                <div className="about-team-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="about-team-content">
                                    <span className="about-team-role">
                                        {member.role}
                                    </span>

                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM MEMBERS */}
            <section
                className="about-team-section about-members-section"
                id="team-members"
            >
                <div className="about-container">
                    <div className="about-section-heading">
                        <span className="about-eyebrow">
                            DEPARTMENT HEADS
                        </span>

                        <h2>
                            Our Team
                            <span> Members</span>
                        </h2>

                        <p>
                            Meet the department heads supporting our trade
                            operations and technology.
                        </p>
                    </div>

                    <div className="about-members-grid">
                        {teamMembers.map((member) => (
                            <article
                                className="about-team-card"
                                key={member.name}
                            >
                                <div className="about-team-image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="about-team-content">
                                    <span className="about-team-role">
                                        {member.role}
                                    </span>

                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="about-cta">
                <div className="about-container">
                    <Globe2 size={36} />

                    <h2>
                        Let's Build
                        <span> New Opportunities</span>
                    </h2>

                    <p>
                        Have a business requirement or want to explore a
                        partnership? Let's start a conversation.
                    </p>

                    <a href="/contact" className="about-primary-btn">
                        Contact Hunters Group <ArrowRight size={18} />
                    </a>
                </div>
            </section>
        </main>
    );
}
