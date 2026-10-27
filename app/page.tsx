"use client";

import { useState } from "react";


import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Headphones,
  Menu,
  PackageCheck,
  ShieldCheck,
  Ship,
  ShoppingCart,
  Truck,
  Warehouse,
  X,
  Plane,
  Boxes,
  Handshake,
  MoveUpRight,
  MessageCircle,
  Code2,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "E-Commerce Solutions",
    slug: "ecommerce",
    description:
      "Build, manage and grow your online business with reliable sourcing and end-to-end fulfilment support.",
    icon: ShoppingCart,
  },
  {
    number: "02",
    title: "Import Services",
    slug: "import",
    description:
      "Source products from international suppliers and navigate the import process with greater confidence.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Export Services",
    slug: "export",
    description:
      "Take your products into new markets with export coordination and international trade support.",
    icon: Plane,
  },
  {
    number: "05",
    title: "Logistics & Shipping",
    slug: "logistics",
    description:
      "Coordinate the movement of goods with practical shipping and supply-chain solutions.",
    icon: Truck,
  },
  {
    number: "06",
    title: "Buyer & Sourcing Support",
    slug: "buyer-sourcing",
    description:
      "Connect with suitable suppliers, evaluate sourcing options and simplify your purchasing process.",
    icon: Handshake,
  },

  {
    number: "07",
    title: "Web Development",
    description:
      "Modern, responsive websites and professional digital solutions designed to strengthen your brand and grow your business online.",
    icon: Code2,
    slug: "web-development",
  },

];

const advantages = [
  {
    icon: Globe2,
    title: "Global Perspective",
    text: "Solutions designed for businesses working across borders.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable Support",
    text: "A professional approach to every stage of the process.",
  },
  {
    icon: Boxes,
    title: "Connected Services",
    text: "Trade, sourcing and warehousing under one roof.",
  },
  {
    icon: Headphones,
    title: "Personal Assistance",
    text: "Clear communication and support when you need it.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Us Your Needs",
    text: "Share your product, sourcing, shipping or business requirements.",
  },
  {
    number: "02",
    title: "Plan the Solution",
    text: "We discuss suitable options, requirements and the next steps.",
  },
  {
    number: "03",
    title: "Move Forward",
    text: "Coordinate the agreed services with clear communication.",
  },
  {
    number: "04",
    title: "Grow Your Business",
    text: "Build stronger operations and explore new opportunities.",
  },
];
const tradeFlagsImage =
  "https://placehold.co/600x300/ffffff/0b1b35.png?text=PAKISTAN+%E2%9C%95+CHINA";

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    image: string;
    description?: string;
  } | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);

  };

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell container">
          <a href="#home" className="brand" aria-label="Hunters Group home">
            <img
              src="/hunters-logo.png"
              alt="Hunters Group logo"
              className="brand-image"
            />
            <span className="brand-copy">
              <strong>HUNTER$</strong>
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
            <a href="#home" onClick={closeMenu}>Home</a>
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
                  {services.map((service) => (
                    <a
                      key={service.number}
                      href={`/services/${service.slug}`}
                      onClick={closeMenu}
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/results">Results</a>
            <a href="/events" onClick={closeMenu}>
              Events
            </a>
            <a href="/brands">Brands</a>
            <a href="#process" onClick={closeMenu}>Our Process</a>
            <a href="/contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a
            href="https://wa.me/923238874539?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="button button-primary nav-cta">
            Get a Quote <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      {/* Homepage update */}
      <section className="hero hero-premium" id="home">
        <div className="hero-premium-image" aria-hidden="true" />

        <div className="hero-premium-content container">
          <div className="hero-premium-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              GLOBAL TRADE · E-COMMERCE · LOGISTICS
            </div>

            <h1>
              Your Business.
              <br />
              <span>Beyond Borders.</span>
            </h1>

            <p className="hero-description">
              From e-commerce and international sourcing to import, export
              and warehousing — we help connect your business to new
              opportunities across global markets.
            </p>

            <div className="hero-actions">
              <a href="#services" className="button button-primary">
                Explore Our Services <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/923238874539"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                <MessageCircle size={17} /> Let&apos;s Talk
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-premium-points">
              <span><ShieldCheck size={19} /> Business-focused solutions</span>
              <span><Globe2 size={19} /> Global trade support</span>
              <span><Handshake size={19} /> Multiple services, one partner</span>
            </div>

            <a href="#services" className="hero-scroll-link">
              <span>↓</span> SCROLL TO DISCOVER
            </a>
          </div>
        </div>

        <div className="hero-premium-caption">
          <span className="caption-dot" />
          CONNECTING BUSINESS TO OPPORTUNITY
        </div>
      </section>

      <div className="trade-partnership-card">
        <div className="trade-partnership-image">
          <img
            src="/pakistan-china.png"
            alt="Pakistan and China flags representing international trade"
          />
        </div>

        <div className="trade-partnership-content">
          <span className="trade-partnership-label">
            INTERNATIONAL PARTNERSHIP
          </span>

          <h3>Pakistan × China</h3>

          <p>Connecting Markets. Creating Opportunities.</p>
        </div>
      </div>


      <section className="trust-strip" aria-label="Our approach">
        <div className="container trust-grid">
          <div><Globe2 /><span>Global Trade Support</span></div>
          <div><ShieldCheck /><span>Professional Approach</span></div>
          <div><Ship /><span>Shipping Coordination</span></div>
          <div><Warehouse /><span>Storage Solutions</span></div>
        </div>
      </section>


      <section className="section services-section" id="services">
        <div className="container">
          <div className="services-redesign-heading">
            <div>
              <span className="eyebrow">OUR SERVICES</span>
              <h2>
                Solutions built for
                <br />
                <span>your next stage of growth.</span>
              </h2>
            </div>

            <div className="services-redesign-intro">
              <p>
                From online marketplaces to international trade, explore
                business solutions designed around your goals.
              </p>
              <a href="/contact" className="services-view-all">
                Discuss your requirements <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="services-redesign-grid">
            {services.map((service) => {
              const Icon = service.icon;

              const serviceImages: Record<string, string> = {
                ecommerce:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
                import:
                  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=85",
                export:
                  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
                logistics:
                  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=85",
                "buyer-sourcing": "/buyer-support.jpg",
                "web-development":
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85",
              };

              return (
                <article
                  className="service-redesign-card"
                  key={service.number}
                >
                  <a
                    href={`/services/${service.slug}`}
                    className="service-redesign-image"
                    aria-label={`Explore ${service.title}`}
                  >
                    <img
                      src={serviceImages[service.slug]}
                      alt={service.title}
                      loading="lazy"
                    />
                    <span className="service-redesign-number">
                      {service.number}
                    </span>
                    <span className="service-redesign-image-arrow">
                      <ArrowUpRight size={20} />
                    </span>
                  </a>

                  <div className="service-redesign-content">
                    <div className="service-redesign-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a
                      href={`/services/${service.slug}`}
                      className="service-redesign-link"
                    >
                      Explore Service <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="services-redesign-bottom">
            <span>ONE PARTNER. MULTIPLE BUSINESS SOLUTIONS.</span>
            <a href="/contact">
              Let&apos;s discuss your goals <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* Registrations & Affiliations */}
      <section className="registrations-section section" id="registrations">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR OFFICIAL REGISTRATIONS</span>
              <h2>
                Registrations & <span>Affiliations.</span>
              </h2>
            </div>
          </div>

          <div className="registrations-grid">
            {[
              { name: "State Administration for Market Regulation", short: "SAMR" },
              { name: "Administration for Market Regulation", short: "AMR" },
              { name: "Ministry of Commerce", short: "MOFCOM" },
              { name: "Lahore Chamber of Commerce & Industry", short: "LCCI" },
              { name: "Federal Board of Revenue", short: "FBR" },
              { name: "Pakistan Single Window", short: "PSW" },
              { name: "Trade Development Authority of Pakistan", short: "TDAP" },
            ].map((org) => (
              <div className="registration-card" key={org.short}>
                <div className="registration-logo">
                  <img
                    src={`/${org.short.toLowerCase()}.png`}
                    alt={`${org.name} logo`}
                    loading="lazy"
                  />
                </div>
                <h3>{org.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section section" id="why-us">
        <div className="container why-layout">
          <div className="why-intro">
            <span className="eyebrow">WHY HUNTERS GROUP</span>
            <h2>
              Business is complex.
              <br />
              Your support shouldn&apos;t be.
            </h2>
            <p>
              We bring related services together, so you can spend less time
              coordinating separate moving parts and more time focusing on
              your business.
            </p>
            <a
              href="https://wa.me/923238874539?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="text-link">
              Let&apos;s work together <ArrowRight size={16} />
            </a>
          </div>

          <div className="advantages-grid">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="advantage" key={item.title}>
                  <span className="advantage-icon"><Icon size={22} /></span>
                  <div>
                    <span className="advantage-index">
                      0{index + 1} / BENEFIT
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="process-section section" id="process">
        <div className="container">
          <div className="section-heading process-heading">
            <div>
              <span className="eyebrow">A CLEAR WAY FORWARD</span>
              <h2>Simple steps. <span>Real progress.</span></h2>
            </div>
            <p>
              A straightforward process designed around your requirements
              and the services you need.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <article className="process-step" key={step.number}>
                <div className="step-top">
                  <span className="step-number">{step.number}</span>
                  {index !== steps.length - 1 && (
                    <span className="step-connector" />
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-panel">
          <div className="contact-orb orb-one" />
          <div className="contact-orb orb-two" />
          <div className="contact-copy">
            <span className="eyebrow">LET&apos;S START A CONVERSATION</span>
            <h2>
              Have a business goal
              <br />
              <span>in mind?</span>
            </h2>
            <p>
              Tell us what you need. Let&apos;s explore the right solution for
              your business together.
            </p>
          </div>

          <a
            href="https://wa.me/923238874539?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
            target="_blank"
            rel="noreferrer"
            className="button button-white"
          >
            Discuss Your Project <ArrowUpRight size={17} />
          </a>

        </div>
      </section>


      <footer className="site-footer">
        <div className="container footer-main">
          {/* Brand */}
          <div className="footer-brand-column">
            <a href="#home" className="brand footer-brand">
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

            <p className="footer-description">
              Connecting businesses with practical trade, sourcing and
              logistics solutions across global markets.
            </p>

            <div className="social-links">
              <a
                href="https://www.instagram.com/hunters_group71/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram <ArrowUpRight size={15} />
              </a>
              <a
                href="https://www.facebook.com/Huntersgroup71/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook <ArrowUpRight size={15} />
              </a>
            </div>

            <a className="footer-phone" href="tel:+923238874539">
              +92 323 8874539
            </a>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="/about">About Us</a>
            <a href="#why-us">Why Hunters</a>
            <a href="#process">Our Process</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <a href="/services/ecommerce">E-Commerce</a>
            <a href="/services/import">Import Services</a>
            <a href="/services/export">Export Services</a>
            <a href="/services/logistics">Logistics</a>
            <a href="/services/buyer-sourcing">Buyer Sourcing</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <span className="footer-eyebrow">LET&apos;S CONNECT</span>
            <h4>Have a project in mind?</h4>
            <p>
              Tell us about your business requirements. Let&apos;s explore
              how Hunters Group can help.
            </p>

            <a
              href="https://wa.me/923238874539?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link"
            >
              Chat on WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Hunters Group. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/923238874539?text=Assalam-o-Alaikum%2C%20I%20want%20to%20know%20more%20about%20Hunters%20Group%20services."
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hunters Group on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .2 5.34.2 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9a11.8 11.8 0 0 0-3.49-8.42ZM12.1 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.74.98 1-3.64-.23-.38a9.85 9.85 0 0 1-1.51-5.27C2.21 6.46 6.67 2 12.11 2a9.87 9.87 0 0 1 9.88 9.9c0 5.45-4.44 9.9-9.89 9.9Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>

    </main>
  );
}