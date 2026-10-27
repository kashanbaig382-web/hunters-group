
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
  {
    number: "01",
    title: "E-Commerce Solutions",
    slug: "ecommerce",
  },
  {
    number: "02",
    title: "Import Services",
    slug: "import",
  },
  {
    number: "03",
    title: "Export Services",
    slug: "export",
  },
  {
    number: "05",
    title: "Logistics & Shipping",
    slug: "logistics",
  },
  {
    number: "06",
    title: "Buyer & Sourcing Support",
    slug: "buyer-sourcing",
  },

  {
    number: "07",
    title: "Web Development",
    slug: "web-development",
  },

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
      "/events/idoversity-3.jpg",
      "/events/idoversity-4.jpg",
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

  {
    title: "Hunters Group Seminar — Skardu",
    category: "Business Seminar",
    description:
      "Hunters Group hosted a seminar at Shangrila Resort, Skardu, on 25 October 2026, bringing people together for business discussions and new opportunities.",
    images: [
      "/events/skardu-seminar-1.jpg",
      "/events/skardu-seminar-2.jpg",
      "/events/skardu-seminar-3.jpg",
      "/events/skardu-seminar-4.jpg",
      "/events/skardu-seminar-5.jpg",
      "/events/skardu-seminar-6.jpg",
      "/events/skardu-seminar-7.jpg",
    ],
    date: "25 October 2026 · Shangrila Resort, Skardu",
  },
];

const showUpcomingEvent = true;


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

      {showUpcomingEvent && (
        <button
          type="button"
          onClick={() => {
            document.getElementById("upcoming-events")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="upcoming-event-float"
          aria-label="View upcoming event on October 30, 2026"
        >
          <span className="upcoming-event-live-dot" />

          <span className="upcoming-event-float-copy">
            <strong>Upcoming Event</strong>
            <span>Pakistan Youth Impact Summit · 30 Oct</span>
          </span>

          <span className="upcoming-event-float-arrow">↓</span>
        </button>
      )}


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
      <section
        id="upcoming-events"
        className="scroll-mt-28 bg-slate-50 px-6 py-20 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
              Coming Next
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Upcoming Events
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Explore upcoming seminars, youth summits, and professional
              opportunities with Hunters Group.
            </p>
          </div>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid md:grid-cols-[0.85fr_1.15fr]">
            <div className="flex min-h-[260px] flex-col justify-between bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 p-8 text-white md:p-10">
              <div>
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Upcoming Event
                </span>

                <p className="mt-8 text-sm font-bold tracking-widest text-blue-200">
                  PAKISTAN · 2K26
                </p>

                <h3 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                  Pakistan Youth Impact Summit 2K26
                </h3>

                <p className="mt-4 text-sm leading-6 text-blue-100">
                  Empowering the Next Generation of Leaders
                </p>
              </div>

              <p className="mt-8 text-sm font-semibold text-white/80">
                In collaboration with Digital Minds Pakistan
              </p>
            </div>

            <div className="p-7 md:p-10">
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                Youth Leadership &amp; Impact
              </span>

              <p className="mt-5 leading-7 text-slate-600">
                Digital Minds Pakistan is collaborating with Pakistan Youth
                Impact Summit 2026, organized by Jannat-ul-Firdous Trust
                (JUF Trust). The summit celebrates youth leadership and
                positive contributions toward Pakistan’s future.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex gap-3">
                  <span className="text-xl">📅</span>
                  <div>
                    <p className="font-bold text-slate-900">Friday, 30 October 2026</p>
                    <p className="text-sm text-slate-500">Event date</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <p className="font-bold text-slate-900">10:00 AM – 4:00 PM</p>
                    <p className="text-sm text-slate-500">Event timings</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <p className="font-bold text-slate-900">Main Auditorium, UCP A Building</p>
                    <p className="text-sm text-slate-500">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                <p className="font-bold text-emerald-800">
                  🎟️ Free Registration
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-700">
                  Free registration is offered through Digital Minds Pakistan.
                  Award nominations are also available for eligible contributors.
                </p>
              </div>

              <a
                href="https://wa.me/923238874539?text=Hello%2C%20I%20want%20to%20know%20about%20Pakistan%20Youth%20Impact%20Summit%202K26%20registration."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 sm:w-auto"
              >
                Get Registration Details →
              </a>
            </div>
          </article>
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
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${activeImage === index
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
