"use client";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Gauge,
  Search,
  MessageCircle,
  CheckCircle2,
  Globe2,
  ShoppingCart,
  LayoutTemplate,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Globe2,
    title: "Business Websites",
    description:
      "Professional websites that build trust and showcase your business online.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "A smooth browsing experience across phones, tablets and desktops.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Focused landing pages designed to turn visitors into inquiries.",
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    description:
      "Improve website speed, usability and the overall user experience.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description:
      "Organized website pages that are easier for search engines to understand.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    description:
      "Online stores that showcase products and make shopping easier.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business, goals and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "We plan a modern design that matches your brand.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build a responsive and user-friendly website.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We review your website and prepare it to go live.",
  },
];

const serviceLinks = [
  { label: "E-Commerce", href: "/services/ecommerce" },
  { label: "Import", href: "/services/import" },
  { label: "Export", href: "/services/export" },
  { label: "Warehousing", href: "/services/warehousing" },
  { label: "Logistics", href: "/services/logistics" },
  { label: "Buyer Sourcing", href: "/services/buyer-sourcing" },
  { label: "Web Development", href: "/services/web-development" },
];

export default function WebDevelopmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="wd-page">
      <header className="wd-nav">
        <a href="/" className="wd-logo">
          <img src="/hunters-logo.png" alt="Hunters Group" />
        </a>

        <button
          type="button"
          className="wd-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={`wd-nav-links ${menuOpen ? "wd-nav-open" : ""}`}>
          <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/#team" onClick={() => setMenuOpen(false)}>Our Team</a>

          <div className="wd-nav-dropdown">
            <button
              type="button"
              className="wd-dropdown-toggle"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span>⌄</span>
            </button>

            <div className={`wd-dropdown-menu ${servicesOpen ? "wd-dropdown-open" : ""}`}>
              {serviceLinks.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>

          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a
            href="https://wa.me/923250930059"
            target="_blank"
            rel="noopener noreferrer"
            className="wd-nav-cta"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="wd-hero">
          <div className="wd-hero-copy">
            <span className="wd-eyebrow">
              <Code2 size={17} /> WEB DEVELOPMENT SERVICES
            </span>

            <h1>
              Websites That Make Your
              <span> Business Stand Out.</span>
            </h1>

            <p>
              We create modern, responsive and user-friendly websites
              that strengthen your brand, showcase your services and
              help your business grow online.
            </p>

            <div className="wd-actions">
              <a
                className="wd-btn wd-btn-primary"
                href="https://wa.me/923250930059?text=Hi%20Hunters%20Group%2C%20I%20want%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss Your Project <ArrowRight size={18} />
              </a>

              <a className="wd-btn wd-btn-outline" href="#wd-services">
                Explore Services
              </a>
            </div>

            <div className="wd-points">
              <span><CheckCircle2 size={17} /> Modern Design</span>
              <span><CheckCircle2 size={17} /> Mobile Friendly</span>
              <span><CheckCircle2 size={17} /> Business Focused</span>
            </div>
          </div>

          <div className="wd-hero-visual">
            <div className="wd-browser">
              <div className="wd-browser-bar">
                <span />
                <span />
                <span />
                <div>yourbusiness.com</div>
              </div>

              <div className="wd-browser-content">
                <div className="wd-demo-nav">
                  <strong>YOUR BRAND</strong>
                  <span>HOME&nbsp;&nbsp; ABOUT&nbsp;&nbsp; SERVICES</span>
                </div>

                <div className="wd-demo-hero">
                  <small>WELCOME TO YOUR WEBSITE</small>
                  <h2>Build Your Digital Presence.</h2>
                  <p>A better online experience starts here.</p>
                  <span className="wd-demo-button">Get Started ↗</span>
                </div>

                <div className="wd-demo-cards">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="wd-floating-card">
              <div className="wd-floating-icon"><Code2 size={23} /></div>
              <div>
                <strong>Built for Your Business</strong>
                <p>Design · Development · Growth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="wd-section" id="wd-services">
          <div className="wd-section-heading">
            <span className="wd-eyebrow">WHAT WE OFFER</span>
            <h2>Everything Your Website <span>Needs to Succeed</span></h2>
            <p>
              From your first business website to a complete online store,
              we turn your ideas into a professional digital experience.
            </p>
          </div>

          <div className="wd-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="wd-service-card" key={service.title}>
                  <div className="wd-service-icon"><Icon size={25} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="/contact">
                    Discuss Your Project <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="wd-section wd-process-section">
          <div className="wd-section-heading">
            <span className="wd-eyebrow">OUR WORK PROCESS</span>
            <h2>From Idea to <span>Launch</span></h2>
            <p>A straightforward process to keep your project organized.</p>
          </div>

          <div className="wd-process-grid">
            {process.map((step) => (
              <article className="wd-process-card" key={step.number}>
                <span className="wd-step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wd-benefits">
          <div className="wd-benefits-copy">
            <span className="wd-eyebrow">WHY HUNTERS GROUP</span>
            <h2>A Website That Works <span>for Your Business</span></h2>
            <p>
              Your website is often the first impression customers have
              of your business. We focus on creating an online presence
              that looks professional and is easy to use.
            </p>

            <ul>
              <li><CheckCircle2 /> Modern and professional design</li>
              <li><CheckCircle2 /> Responsive layouts for different screens</li>
              <li><CheckCircle2 /> Clear navigation and user-friendly structure</li>
              <li><CheckCircle2 /> SEO-friendly website structure</li>
              <li><CheckCircle2 /> Solutions tailored to your goals</li>
            </ul>

            <a href="/contact" className="wd-btn wd-btn-primary">
              Start Your Project <ArrowRight size={18} />
            </a>
          </div>

          <div className="wd-benefits-card">
            <Palette size={43} />
            <h3>Your Vision. Our Expertise.</h3>
            <p>
              A digital experience designed around your brand,
              your audience and your goals.
            </p>
            <div className="wd-tags">
              <span>Design</span>
              <span>Development</span>
              <span>Performance</span>
            </div>
          </div>
        </section>

        <section className="wd-cta">
          <span className="wd-eyebrow">LET&apos;S BUILD SOMETHING GREAT</span>
          <h2>Ready to Take Your <span>Business Online?</span></h2>
          <p>
            Tell us about your idea and let&apos;s discuss a website
            that fits your business needs.
          </p>
          <a
            className="wd-btn wd-btn-primary"
            href="https://wa.me/923250930059?text=Hi%20Hunters%20Group%2C%20I%20am%20interested%20in%20your%20web%20development%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Chat With Our Team <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="wd-footer">
        <a href="/" className="wd-footer-logo">
          <img src="/hunters-logo.png" alt="Hunters Group" />
        </a>

        <p>
          Connecting businesses with opportunities through professional
          services and digital solutions.
        </p>

        <div className="wd-footer-links">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/contact">Contact</a>
          <a href="https://www.instagram.com/hunters_group71/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/Huntersgroup71/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>

        <div className="wd-footer-bottom">
          <span>© {new Date().getFullYear()} Hunters Group. All rights reserved.</span>
          <a href="https://wa.me/923250930059">WhatsApp: +92 325 0930059</a>
        </div>
      </footer>
    </div>
  );
}
