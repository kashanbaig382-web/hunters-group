
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    X,
    Trophy,
} from "lucide-react";

const achievements = [
    {
        image: "/results/result-1.png",
        title: "Achievement 01",
        description: "Explore one of our achievements at Hunters Group.",
    },
    {
        image: "/results/result-2.png",
        title: "Achievement 02",
        description: "Discover the progress and milestones of our team.",
    },
    {
        image: "/results/result-3.png",
        title: "Achievement 03",
        description: "A closer look at another Hunters Group achievement.",
    },
    {
        image: "/results/result-4.png",
        title: "Achievement 04",
        description: "More milestones from our journey and experience.",
    },
];

export default function ResultsPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const closeViewer = () => setActiveIndex(null);

    const showPrevious = () => {
        setActiveIndex((current) =>
            current === null
                ? null
                : (current - 1 + achievements.length) % achievements.length
        );
    };

    const showNext = () => {
        setActiveIndex((current) =>
            current === null
                ? null
                : (current + 1) % achievements.length
        );
    };

    return (
        <main className="results-page">
            <header className="results-header">
                <div className="results-container results-nav">
                    <Link href="/" className="results-brand">
                        <img src="/hunters-logo.png" alt="Hunters Group" />
                        <span>HUNTERS GROUP</span>
                    </Link>

                    <nav className="results-nav-links">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/results" className="results-active">
                            Results
                        </Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <a
                        href="https://wa.me/923238874539"
                        target="_blank"
                        rel="noreferrer"
                        className="results-quote-btn"
                    >
                        Get a Quote <ArrowUpRight size={16} />
                    </a>
                </div>
            </header>


            <section className="results-hero">
                <div className="results-container results-hero-grid">
                    <div className="results-hero-copy">
                        <span className="results-eyebrow">
                            <Trophy size={15} /> OUR JOURNEY
                        </span>

                        <h1>
                            Our Results &
                            <span>Achievements</span>
                        </h1>

                        <p>
                            Every milestone reflects our commitment to growth,
                            innovation, and creating opportunities. Explore the
                            achievements that are part of the Hunters Group journey.
                        </p>

                        <a href="#our-achievements" className="results-hero-btn">
                            Explore Achievements <ArrowUpRight size={17} />
                        </a>

                        <div className="results-hero-stats">
                            <div>
                                <strong>04</strong>
                                <span>Achievements</span>
                            </div>
                            <div>
                                <strong>2021</strong>
                                <span>Our Journey Began</span>
                            </div>
                        </div>
                    </div>

                    <div className="results-hero-brand">
                        <div className="results-hero-glow" />

                        <div className="results-hero-logo-card">
                            <span>HUNTERS GROUP</span>
                            <img src="/hunters-logo.png" alt="Hunters Group Logo" />
                            <h2>Our Journey.</h2>
                            <p>Our Progress. Our Achievements.</p>
                            <div className="results-logo-line" />
                            <span className="results-logo-caption">
                                BUILDING GLOBAL OPPORTUNITIES
                            </span>
                        </div>

                        <div className="results-floating-badge">
                            <Trophy size={20} />
                            <div>
                                <strong>Our Milestones</strong>
                                <span>Progress worth celebrating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="results-gallery-section" id="our-achievements">
                <div className="results-container">
                    <div className="results-section-heading">
                        <span className="results-eyebrow">OUR MILESTONES</span>
                        <h2>Achievements Gallery</h2>
                        <p>
                            Select any achievement to view it in a larger format.
                        </p>
                    </div>

                    <div className="results-grid">
                        {achievements.map((achievement, index) => (
                            <button
                                type="button"
                                className="results-card"
                                key={achievement.image}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`View ${achievement.title}`}
                            >
                                <div className="results-image-wrap">
                                    <img
                                        src={achievement.image}
                                        alt={achievement.title}
                                        loading="lazy"
                                    />
                                    <span className="results-image-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="results-view-icon">
                                        <ArrowUpRight size={22} />
                                    </span>
                                </div>

                                <div className="results-card-content">
                                    <span className="results-card-label">
                                        HUNTERS GROUP
                                    </span>
                                    <h3>{achievement.title}</h3>
                                    <p>{achievement.description}</p>
                                    <span className="results-card-link">
                                        View Achievement <ArrowRight size={15} />
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="results-cta">
                <div className="results-container">
                    <span className="results-eyebrow">WORK WITH US</span>
                    <h2>Let's Create More Success Stories</h2>
                    <p>
                        Have a business goal or partnership in mind? Let's
                        discuss how we can work together.
                    </p>
                    <Link href="/contact" className="results-cta-btn">
                        Contact Hunters Group <ArrowUpRight size={17} />
                    </Link>
                </div>
            </section>

            <footer className="results-footer">
                <div className="results-container">
                    <span>© 2026 Hunters Group</span>
                    <Link href="/">Back to Home</Link>
                </div>
            </footer>

            {activeIndex !== null && (
                <div
                    className="results-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Achievement image viewer"
                    onClick={closeViewer}
                >
                    <button
                        type="button"
                        className="results-lightbox-close"
                        onClick={closeViewer}
                        aria-label="Close image"
                    >
                        <X size={26} />
                    </button>

                    <button
                        type="button"
                        className="results-lightbox-arrow results-lightbox-prev"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Previous achievement"
                    >
                        <ArrowLeft size={25} />
                    </button>

                    <div
                        className="results-lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={achievements[activeIndex].image}
                            alt={achievements[activeIndex].title}
                        />
                        <p>
                            {String(activeIndex + 1).padStart(2, "0")} /{" "}
                            {String(achievements.length).padStart(2, "0")}
                            {" — "}
                            {achievements[activeIndex].title}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="results-lightbox-arrow results-lightbox-next"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next achievement"
                    >
                        <ArrowRight size={25} />
                    </button>
                </div>
            )}
        </main>
    );
}
