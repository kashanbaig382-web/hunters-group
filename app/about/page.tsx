"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Globe2,
  Handshake,
  TrendingUp,
} from "lucide-react";

const services = [
  { label: "E-Commerce Solutions", href: "/services/ecommerce" },
  { label: "Import Services", href: "/services/import" },
  { label: "Export Services", href: "/services/export" },
  { label: "Warehousing", href: "/services/warehousing" },
  { label: "Logistics & Shipping", href: "/services/logistics" },
  { label: "Buyer & Sourcing", href: "/services/buyer-sourcing" },
  { label: "Web Development", href: "/services/web-development" },
];

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
];

const teamMembers = [
  {
    name: "Zunaira Atta ur Rehman",
    role: "Managing Director",
    image: "/team-zunaira.jpg",
    description:
      "Oversees business coordination and daily operations, supporting effective management and organizational growth.",
  },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <main className="about-page">
      {/* NAVIGATION */}
      <header className="site-header">
        <div className="nav-shell container">
          <Link
            href="/"
            className="brand"
            aria-label="Hunters Group home"
            onClick={closeMenu}
          >
            <img
              src="/hunters-logo.png"
              alt="Hunters Group"
              className="brand-logo"
            />
            <span className="brand-copy">
              <strong>HUNTERS GROUP</strong>
              <small>Building Global Opportunities</small>
            </span>
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav
            className={`nav-links ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <Link
              href="/about"
              className="active"
              onClick={closeMenu}
            >
              About Us
            </Link>

            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown
                  size={15}
                  className={servicesOpen ? "rotate-chevron" : ""}
                />
              </button>

              <div
                className={`nav-dropdown-menu ${
                  servicesOpen ? "is-open" : ""
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={closeMenu}
                  >
                    {service.label}
                    <ArrowUpRight size={14} />
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/#why-us" onClick={closeMenu}>
              Why Us
            </Link>

            <Link href="/events" onClick={closeMenu}>
              Events
            </Link>

            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <a
              href="https://wa.me/923238874539"
              target="_blank"
              rel="noreferrer"
              className="nav-quote-btn"
              onClick={closeMenu}
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-eyebrow">GET TO KNOW US</span>

          <h1>
            Building Businesses.
            <span>Connecting the World.</span>
          </h1>

          <p>
            Empowering businesses through innovation, technology,
            e-commerce solutions, digital services, and global trade.
          </p>

          <div className="about-hero-actions">
            <Link href="/contact" className="about-primary-btn">
              Let's Work Together
              <ArrowUpRight size={17} />
            </Link>

            <a href="#about-hunters" className="about-secondary-btn">
              Discover Our Story
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story" id="about-hunters">
        <div className="about-container about-story-grid">
          <div>
            <span className="about-eyebrow">WHO WE ARE</span>

            <h2>
              About
              <span>Hunters Group</span>
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

            <p className="about-tagline">
              Hunters Group — Building Businesses, Creating
              Opportunities, Connecting the World.
            </p>
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
            <span className="about-eyebrow">LEADERSHIP</span>

            <h2>
              Meet Our
              <span>Leaderships</span>
            </h2>

            <p>
              The people guiding Hunters Group's vision, management,
              and business direction.
            </p>
          </div>

          <div className="about-leaders-grid">
            {leaders.map((leader) => (
              <article className="about-team-card" key={leader.name}>
                <div className="about-team-image">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                  />
                </div>

                <div className="about-team-content">
                  <span className="about-team-role">
                    {leader.role}
                  </span>

                  <h3>{leader.name}</h3>

                  <p>{leader.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENT HEADS */}
      <section
        className="about-team-section about-members-section"
        id="team-members"
      >
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">DEPARTMENT HEADS</span>

            <h2>
              Our
              <span>Team Members</span>
            </h2>

            <p>
              Meet the department heads supporting our trade
              operations and technology.
            </p>
          </div>

          <div className="about-members-grid">
            {teamMembers.map((member) => (
              <article className="about-team-card" key={member.name}>
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

      {/* MISSION & VISION */}
      <section className="about-mission-section">
        <div className="about-container about-mission-grid">
          <article className="about-mission-card">
            <div className="about-icon">
              <Target size={27} />
            </div>

            <span className="about-card-label">OUR MISSION</span>

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

            <span className="about-card-label">OUR VISION</span>

            <h3>Connecting the World</h3>

            <p>
              To build lasting partnerships, develop talent, and
              connect businesses with opportunities across
              international markets.
            </p>
          </article>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT GUIDES US</span>

            <h2>
              The Values
              <span>Behind Our Work</span>
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
                <article className="about-value-card" key={value.title}>
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

      {/* CONTACT CTA */}
      <section className="about-cta">
        <div className="about-container">
          <Globe2 size={39} strokeWidth={1.6} />

          <h2>
            Let's Build New
            <span>Opportunities</span>
          </h2>

          <p>
            Have a business requirement or want to explore a
            partnership? Let's start a conversation.
          </p>

          <Link href="/contact" className="about-primary-btn">
            Contact Hunters Group
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}