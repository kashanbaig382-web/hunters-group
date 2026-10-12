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
    number: "04",
    title: "Warehousing",
    slug: "warehousing",
    description:
      "Organised storage, inventory handling and dependable warehouse support for your business.",
    icon: Warehouse,
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

export default function Home() {
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
            <a href="#about" onClick={closeMenu}>About Us</a>

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

            <a href="#why-us" onClick={closeMenu}>Why Hunters</a>
            <a href="#process" onClick={closeMenu}>Our Process</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a href="#contact" className="button button-primary nav-cta">
            Get a Quote <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />

        <div className="container hero-content">
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
            From e-commerce and international sourcing to import, export and
            warehousing — we help connect your business to new possibilities.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button button-primary">
              Explore Our Services <ArrowRight size={17} />
            </a>
            <a href="#contact" className="button button-secondary">
              Let&apos;s Talk <MoveUpRight size={16} />
            </a>
          </div>

          <div className="hero-proof">
            <span><Check size={15} /> Business-focused solutions</span>
            <span><Check size={15} /> Multiple services, one partner</span>
          </div>
        </div>

        <div className="hero-caption">
          <span className="caption-dot" />
          CONNECTING BUSINESS TO OPPORTUNITY
        </div>

        <a href="#services" className="scroll-cue" aria-label="Scroll to services">
          <ArrowDownRight size={19} />
        </a>
      </section>

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
          <div className="section-heading services-heading">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2>
                Everything your business
                <br />
                needs to <span>move forward.</span>
              </h2>
            </div>
            <div className="heading-aside">
              <p>
                Practical business services, thoughtfully connected to help
                simplify the way you source, sell, store and ship.
              </p>
              <a
                href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
                target="_blank"
                rel="noreferrer"
                className="text-link">
                Discuss your requirements <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-topline">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon size={22} /></span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a
                    href={`/services/${service.slug}`}
                    className="service-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=85"
              alt="Organised warehouse shelves and logistics operations"
              loading="lazy"
            />
            <div className="image-label">
              <span className="image-label-icon"><Boxes size={20} /></span>
              <span>
                <strong>Trade meets efficiency.</strong>
                <small>One connected approach</small>
              </span>
            </div>
            <div className="visual-corner">HG.</div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">ABOUT HUNTERS GROUP</span>
            <h2>
              More than services.
              <br />
              <span>A partner in progress.</span>
            </h2>
            <p>
              Every business has different goals. Hunters Group brings
              together e-commerce support, import and export services,
              sourcing and warehousing to help businesses manage their
              operations with greater clarity.
            </p>
            <p>
              Our focus is simple: understand your requirements, identify
              practical solutions and help you take the next step with
              confidence.
            </p>
            <a
              href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="button button-primary about-button">
              Get to Know Us <ArrowRight size={17} />
            </a>

            <div className="about-note">
              <span className="note-line" />
              <span>Built around your business needs.</span>
            </div>
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
              href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
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
            href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
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
          <div className="footer-brand-column">
            <a href="#home" className="brand footer-brand">
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
            <p>
              Connecting businesses with practical trade, sourcing and
              logistics solutions.
            </p>


            <div className="social-links">
              <a
                href="https://www.instagram.com/hunters_group71/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/Huntersgroup71/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>

            <a className="footer-phone" href="tel:+923250930059">
              +92 325 0930059
            </a>


          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#why-us">Why Hunters</a>
            <a href="#process">Our Process</a>
          </div>

          <div className="footer-column">
            <h4>Our Services</h4>
            <a href="/services/ecommerce">E-Commerce</a>
            <a href="/services/import">Import & Export</a>
            <a href="/service/warehousing">Warehousing</a>
            <a href="/services/buyer-sourcing">Buyer & Logistics</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>Get in Touch</h4>
            <p>Have a requirement? We&apos;d be glad to hear from you.</p>
            <a
              href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="footer-contact-link"
            >
              Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Hunters Group. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
