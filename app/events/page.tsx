
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const services = [
  { number: "01", title: "Digital Marketing", slug: "digital-marketing" },
  { number: "02", title: "Web Development", slug: "web-development" },
  { number: "03", title: "Ecommerce Solutions", slug: "ecommerce" },
];

const pastEvents = [
  {
    title: "Ideoversity Career Expo",
    category: "Recruitment & Hiring",
    description:
      "Our team participated in the Ideoversity Expo to connect with talented candidates, conduct interviews, and explore new opportunities.",
    images: [
      "/events/idoversity-1.jpg",
      "/events/idoversity-2.jpg",
    ],
    date: "Past Event",
  },
  {
    title: "Young Entrepreneur Fest 2026",
    category: "Career Expo & Recruitment",
    description:
      "Hunters Group set up its own stall at Expo Center to meet candidates, conduct interviews, and discover new talent.",
    images: [
      "/events/expo-center-1.jpg",
      "/events/expo-center-2.jpg",
      "/events/expo-center-3.jpg",
      "/events/expo-center-4.jpg",
    ],
    date: "Past Event",
  },
];

export default function EventsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const currentEvent =
    activeGallery !== null ? pastEvents[activeGallery] : null;

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  const closeGallery = () => setActiveGallery(null);

  const showNext = () => {
    if (!currentEvent) return;
    setActiveImage((current) => (current + 1) % currentEvent.images.length);
  };

  const showPrevious = () => {
    if (!currentEvent) return;
    setActiveImage(
      (current) =>
        (current - 1 + currentEvent.images.length) %
        currentEvent.images.length
    );
  };

  useEffect(() => {
    if (activeGallery === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeGallery, activeImage]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <header className="site-header sticky top-0 z-50">
        <div className="nav-shell container">
          <Link
            href="/"
            className="brand"
            aria-label="Hunters Group home"
            onClick={closeMenu}
          >
            <img
              src="/hunters-logo.png"
              alt="Hunters Group logo"
              className="brand-image"
            />
            <span className="brand-copy">
              <strong>HUNTERS</strong>
              <span>GROUP</span>
            </span>
          </Link>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>

            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setServiceOpen(!serviceOpen)}
                aria-expanded={serviceOpen}
              >
                Services <ChevronDown size={14} />
              </button>

              {serviceOpen && (
                <div className="dropdown-panel">
                  {services.map((service) => (
                    <Link
                      key={service.number}
                      href={`/services/${service.slug}`}
                      onClick={closeMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#results" onClick={closeMenu}>
              Results
            </Link>

            <Link href="/#why-us" onClick={closeMenu}>
              Why Hunters
            </Link>

            <Link href="/#process" onClick={closeMenu}>
              Our Process
            </Link>

            <Link href="/events" onClick={closeMenu}>
              Events
            </Link>

            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </nav>

          <a
            href="https://wa.me/923238874539?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20your%20services"
            target="_blank"
            rel="noreferrer"
            className="button button-primary nav-cta"
          >
            Get a Quote <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-center text-white md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Hunters Group
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Our Events &amp; Experiences
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Discover the events, career expos, and recruitment activities
            where our team connects with talent and builds opportunities.
          </p>
        </div>
      </section>

      {/* Past Events */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Journey
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Past Events
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              A look back at the events where our team connected with
              candidates, conducted recruitment activities, and represented
              Hunters Group.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {pastEvents.map((event, eventIndex) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* 2x2 Photo Grid */}
                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-3">
                  {event.images.map((image, imageIndex) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => {
                        setActiveGallery(eventIndex);
                        setActiveImage(imageIndex);
                      }}
                      aria-label={`Open photo ${imageIndex + 1} of ${event.title}`}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <img
                        src={image}
                        alt={`${event.title} photo ${imageIndex + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />

                      <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 text-sm font-semibold text-white opacity-0 transition group-hover:bg-slate-950/35 group-hover:opacity-100">
                        View Photo
                      </span>
                    </button>
                  ))}
                </div>

                {/* Event Details */}
                <div className="p-7 md:p-8">
                  <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {event.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {event.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {event.description}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-slate-400">
                    {event.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-slate-50 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center md:px-12 md:py-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              Coming Next
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Upcoming Events
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Stay connected with Hunters Group for upcoming career expos,
              recruitment drives, and professional events. More updates coming
              soon.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Image Popup */}
      {currentEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentEvent.title} photo gallery`}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-white">
              <div>
                <h3 className="text-lg font-bold sm:text-2xl">
                  {currentEvent.title}
                </h3>
                <p className="mt-1 text-sm text-white/65">
                  Photo {activeImage + 1} of {currentEvent.images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative flex h-[55vh] min-h-[260px] max-h-[680px] items-center justify-center sm:h-[70vh]">
              <img
                key={currentEvent.images[activeImage]}
                src={currentEvent.images[activeImage]}
                alt={`${currentEvent.title} photo ${activeImage + 1}`}
                className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
              />

              {currentEvent.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Previous photo"
                    className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition hover:bg-blue-600 sm:left-4 sm:h-14 sm:w-14"
                  >
                    <ChevronLeft size={30} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Next photo"
                    className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 transition hover:bg-blue-600 sm:right-4 sm:h-14 sm:w-14"
                  >
                    <ChevronRight size={30} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-5 flex justify-center gap-3 overflow-x-auto pb-2">
              {currentEvent.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View photo ${index + 1}`}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                    activeImage === index
                      ? "border-blue-500 opacity-100"
                      : "border-white/20 opacity-55 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <p className="mt-3 text-center text-xs text-white/50">
              Use arrow keys to navigate · Press Esc to close
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
