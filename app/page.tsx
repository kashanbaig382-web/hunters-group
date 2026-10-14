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

            <a href="#team">Our Team</a>
            <a href="#results">Results</a>
            <a href="#why-us" onClick={closeMenu}>Why Hunters</a>
            <a href="#process" onClick={closeMenu}>Our Process</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a
            href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services."
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
                href="https://wa.me/923250930059"
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

              const serviceImages: Record<string, string> = {
                ecommerce:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
                import:
                  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=85",
                export:
                  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85",
                warehousing:
                  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
                logistics:
                  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=85",
                "buyer-sourcing":
                  "/buyer-support.jpg",
              };

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-image">
                    <img
                      src={serviceImages[service.slug]}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="service-card-content">
                    <div className="service-topline">
                      <span className="service-number">{service.number}</span>
                      <span className="service-icon">
                        <Icon size={22} />
                      </span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a
                      href={`/services/${service.slug}`}
                      className="service-link"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <ArrowUpRight size={17} />
                    </a>
                  </div>
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


      {/* Premium Team Section */}
      <section className="team-section section" id="team">
        <div className="container">
          <div className="section-heading team-heading">
            <div>
              <span className="eyebrow">OUR TEAM</span>
              <h2>
                Meet the People Behind <span>Hunters Group</span>
              </h2>
              <p>
                A dedicated team working together to support our business
                operations and global trade goals.
              </p>
            </div>
          </div>

          <div className="team-grid">
            {
              [

                {
                  name: "M huzaifa attari",
                  role: "Founder",
                  image: "/team-huzaifa.jpg",
                  description:
                    "Started Hunters Group in 2021 with a vision to connect businesses and create new opportunities. Driven by ambition to build a brand beyond borders.",
                },
                {
                  name: "M Matiullah sultani",
                  role: "Co-Founder",
                  image: "/team-matiullah.jpg",
                  description:
                    "Joined the journey of Hunters Group with a shared vision for growth and partnership. Focused on teamwork, business development, and future opportunities.",
                },
                {
                  name: "Dr Salam Ahmad Raza",
                  role: "CEO",
                  image: "/team-salam.jpg",
                  description:
                    "Leads Hunters Group’s vision, strategy, and business direction. Focused on sustainable growth, strong partnerships, and long-term opportunities.",
                },
                {
                  name: "Zunaira atta ur Rehman",
                  role: "Managing Director",
                  image: "/team-zunaira.jpg",
                  description:
                    "Supports the company’s management, coordination, and daily operations. Dedicated to effective teamwork and smooth business processes.",
                },
                {
                  name: "Zhang Yun (张云)",
                  role: "Head of Import & Export Department",
                  image: "/team-zhang-yun.jpg",
                  description:
                    "Leads the Import & Export Department and supports international trade operations. Focused on cross-border business coordination and global trade opportunities.",
                },
                {
                  name: "Mirza Kashan Ali",
                  role: "Head of IT & Web Development",
                  image: "/team-kashan.jpg",
                  description:
                    "Oversees technology and digital development at Hunters Group. Focused on improving the company’s digital presence, website experience, and technical solutions.",
                },
              ]

                .map((member) => (
                  <article
                    className={`team-card ${member.role === "CEO" ? "team-card-ceo" : ""
                      }`}
                    key={member.name}
                    onClick={() => setSelectedMember(member)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedMember(member);
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="team-photo">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="team-info">
                      <span className="team-role">{member.role}</span>
                      <h3>{member.name}</h3>
                      <p>{member.description ?? "Learn more about this team member."}</p>
                    </div>
                  </article>
                ))}
          </div>
          {selectedMember && (
            <div
              className="team-modal-overlay"
              onClick={() => setSelectedMember(null)}
            >
              <div
                className="team-modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedMember.name} profile`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="team-modal-close"
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close profile"
                >
                  ×
                </button>

                <div className="team-modal-photo">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                  />
                </div>

                <div className="team-modal-content">
                  <span className="team-role">{selectedMember.role}</span>
                  <h2>{selectedMember.name}</h2>

                  <h3>About</h3>
                  <p>
                    {selectedMember.description ??
                      `${selectedMember.name} serves as ${selectedMember.role} at Hunters Group, contributing to the company's business operations and objectives.`}
                  </p>

                  <p>
                    At Hunters Group, our team works together to support
                    business growth, international trade, and client relationships.
                  </p>
                </div>
              </div>
            </div>
          )}
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
      {/* Results & Achievements */}
      <section className="results-section section" id="results">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR WORK IN ACTION</span>
              <h2>
                Results & <span>Achievements.</span>
              </h2>
              <p>
                A look at our work, progress, and business achievements.
              </p>
            </div>
          </div>

          <div className="results-grid">
            {[
              {
                image: "/results/result-1.png",
                title: "Business Results",
              },
              {
                image: "/results/result-2.png",
                title: "Project Performance",
              },
              {
                image: "/results/result-3.png",
                title: "Growth & Progress",
              },
              {
                image: "/results/result-4.png",
                title: "Our Achievements",
              },
            ].map((result) => (
              <article className="result-card" key={result.image}>
                <div className="result-image">
                  <img
                    src={result.image}
                    alt={result.title}
                    loading="lazy"
                  />
                </div>
                <h3>{result.title}</h3>
              </article>
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

            <a className="footer-phone" href="tel:+923250930059">
              +92 325 0930059
            </a>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#why-us">Why Hunters</a>
            <a href="#process">Our Process</a>
            <a href="#team">Our Team</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>Our Services</h4>
            <a href="/services/ecommerce">E-Commerce</a>
            <a href="/services/import">Import Services</a>
            <a href="/services/export">Export Services</a>
            <a href="/services/warehousing">Warehousing</a>
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
              href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services"
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
    </main>
  );
}
