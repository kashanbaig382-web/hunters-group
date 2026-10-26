
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Globe2,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const whatsapp = "923238874539";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello Hunters Group!

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}
Service: ${form.service}

Message:
${form.message}`;

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="contact-navbar">
        <a href="/" className="contact-nav-logo">
          <img src="/hunters-logo.png" alt="Hunters Group" />
        </a>

        <div className="contact-nav-links">
          <a href="/#home">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#team">Our Team</a>

          <div className="contact-nav-dropdown">
            <a href="/#services">Services ▾</a>

            <div className="contact-nav-dropdown-menu">
              <a href="/services/ecommerce">E-Commerce</a>
              <a href="/services/import">Import</a>
              <a href="/services/export">Export</a>
              <a href="/services/warehousing">Warehousing</a>
              <a href="/services/logistics">Logistics</a>
              <a href="/services/buyer-sourcing">Buyer Support</a>
            </div>
          </div>

          <a href="/contact" className="contact-nav-active">
            Contact
          </a>
        </div>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="contact-nav-cta"
        >
          Let&apos;s Talk ↗
        </a>
      </nav>

      <main className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">
              <span /> CONTACT HUNTERS GROUP
            </span>

            <h1>
              Let&apos;s Build Something
              <span> Great Together.</span>
            </h1>

            <p>
              Have a business inquiry or looking for a reliable partner
              for global trade, e-commerce, or logistics? We&apos;re
              ready to hear from you.
            </p>

            <a
              href="#contact-form"
              className="contact-primary-button"
            >
              Send an Inquiry <ArrowRight size={18} />
            </a>
          </div>

          <div className="contact-hero-decoration">
            <Globe2 size={170} strokeWidth={0.7} />
            <span>YOUR BUSINESS. BEYOND BORDERS.</span>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="contact-main-section">
          <div className="contact-section-heading">
            <span>GET IN TOUCH</span>
            <h2>How Can We Help You?</h2>
            <p>
              Tell us what you&apos;re looking for, and let&apos;s explore
              how we can work together.
            </p>
          </div>

          <div className="contact-layout">
            {/* CONTACT DETAILS */}
            <aside className="contact-info-panel">
              <span className="contact-info-eyebrow">
                CONTACT DETAILS
              </span>

              <h2>Let&apos;s Start a Conversation.</h2>

              <p className="contact-info-description">
                Connect with our team for business inquiries, service
                information, and potential partnerships.
              </p>

              <a
                className="contact-info-item"
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-info-icon">
                  <MessageCircle size={21} />
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>+92 325 0930059</strong>
                </span>
              </a>

              <a
                className="contact-info-item"
                href={`tel:+${whatsapp}`}
              >
                <span className="contact-info-icon">
                  <Phone size={21} />
                </span>
                <span>
                  <small>Call Us</small>
                  <strong>+92 325 0930059</strong>
                </span>
              </a>

              <a
                className="contact-info-item"
                href="https://www.instagram.com/hunters_group71/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-info-icon">
                  <span className="contact-info-icon">IG</span>
                </span>
                <span>
                  <small>Instagram</small>
                  <strong>@hunters_group71</strong>
                </span>
              </a>

              <a
                className="contact-info-item"
                href="https://www.facebook.com/Huntersgroup71/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-info-icon">
                  <span className="contact-info-icon">FB</span>
                </span>
                <span>
                  <small>Facebook</small>
                  <strong>Hunters Group</strong>
                </span>
              </a>

              <div className="contact-info-note">
                <Globe2 size={20} />
                <p>
                  Connecting businesses to opportunities beyond borders.
                </p>
              </div>
            </aside>

            {/* INQUIRY FORM */}
            <div className="contact-form-panel" id="contact-form">
              <span className="contact-form-eyebrow">
                SEND AN INQUIRY
              </span>

              <h2>Tell Us About Your Project</h2>

              <p className="contact-form-intro">
                Complete the form below to prepare your inquiry for
                WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-fields-grid">
                  <label>
                    Full Name *
                    <input
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                    />
                  </label>

                  <label>
                    Email Address *
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                    />
                  </label>

                  <label>
                    Phone Number
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+92 ..."
                    />
                  </label>

                  <label>
                    Service Interested In *
                    <select
                      required
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                    >
                      <option value="">Select a service</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Import">Import</option>
                      <option value="Export">Export</option>
                      <option value="Warehousing">Warehousing</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Buyer Support">Buyer Support</option>
                      <option value="General Inquiry">
                        General Inquiry
                      </option>
                    </select>
                  </label>

                  <label className="contact-message-field">
                    Your Message *
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your requirements..."
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  Continue to WhatsApp <Send size={17} />
                </button>

                <p className="contact-form-note">
                  WhatsApp will open with your inquiry ready to send.
                  You&apos;ll need to press Send in WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="contact-footer">
        <a href="/" className="contact-footer-logo">
          <img src="/hunters-logo.png" alt="Hunters Group" />
        </a>

        <p>
          Connecting businesses to opportunities through global trade,
          e-commerce, and logistics.
        </p>

        <span>
          © 2026 Hunters Group. All rights reserved.
        </span>
      </footer>
    </>
  );
}
