
import Link from "next/link";
import {
    ArrowUpRight,
    Globe2,
    Leaf,
    Handshake,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const brands = [
    {
        name: "Hunters Group",
        category: "BUSINESS & DIGITAL SOLUTIONS",
        logo: "/hunters-logo.png",
        established: "Established 2021",
        description:
            "Hunters Group is a multi-service business and digital solutions company established in 2021, with a vision to empower businesses through innovation, technology, and global trade.",
        details:
            "We specialize in Amazon, eBay, Etsy, Shopify, Digital Marketing, Website Development, and Import & Export Services.",
        mission:
            "Our mission is to help businesses grow locally and internationally by providing innovative e-commerce solutions, digital services, and global business opportunities. We are committed to building long-term partnerships, developing talent, and connecting businesses with new markets.",
        tagline:
            "Building Businesses, Creating Opportunities, Connecting the World.",
        theme: "hunters",
        icon: Globe2,
    },
    {
        name: "Shifa Organic",
        category: "HERBAL WELLNESS & PERSONAL CARE",
        logo: "/shifa.jpg",
        established: "Founded 2004",
        description:
            "Shifa Organic is a herbal wellness and personal care brand founded in 2004 by Hakeem and Dr. Muhammad Abdul Waheed Attari.",
        details:
            "The brand specializes in herbal products, nourishing hair oils, and natural personal care solutions. With a strong foundation in herbal care, Shifa Organic expanded its presence to the digital world in 2022, bringing its products and brand identity to social media and online platforms.",
        mission:
            "Our mission is to combine nature-inspired care with quality, trust, and customer satisfaction.",
        tagline: "Embrace Nature, Elevate Your Care.",
        theme: "shifa",
        icon: Leaf,
    },
];

const strengths = [
    {
        icon: Handshake,
        title: "Long-Term Partnerships",
        description:
            "We believe in lasting relationships built on trust, communication, and mutual understanding.",
    },
    {
        icon: ShieldCheck,
        title: "Quality & Trust",
        description:
            "We value professionalism, customer satisfaction, and responsible business practices.",
    },
    {
        icon: Sparkles,
        title: "Distinct Brand Identities",
        description:
            "Each brand has its own purpose, audience, and identity while reflecting our commitment to quality.",
    },
];

export default function BrandsPage() {
    return (
        <main className="brands-page">
            {/* Navigation */}
            <header className="brands-header">
                <div className="brands-container brands-nav">
                    <Link href="/" className="brands-logo">
                        <img src="/hunters-logo.png" alt="Hunters Group" />
                        <span>HUNTERS GROUP</span>
                    </Link>

                    <nav className="brands-nav-links" aria-label="Main navigation">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/services/ecommerce">Services</Link>
                        <Link href="/events">Events</Link>
                        <Link href="/results">Results</Link>
                        <Link href="/brands" className="brands-nav-active">
                            Brands
                        </Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <a
                        href="https://wa.me/923238874539"
                        target="_blank"
                        rel="noreferrer"
                        className="brands-nav-cta"
                    >
                        Get a Quote <ArrowUpRight size={16} />
                    </a>
                </div>
            </header>

            {/* Hero */}

            <section className="brands-hero">
                <div className="brands-container brands-hero-layout">
                    {/* Left: Hero Content */}
                    <div className="brands-hero-content">
                        <span className="brands-eyebrow">
                            OUR BRAND PORTFOLIO
                        </span>

                        <h1>
                            Two Brands.
                            <span>Distinct Identities.</span>
                        </h1>

                        <p>
                            Discover the brands behind our journey — from global
                            business solutions to nature-inspired personal care.
                            Each brand has its own purpose, identity, and commitment.
                        </p>

                        <a href="#our-brands" className="brands-primary-btn">
                            Explore Our Brands <ArrowUpRight size={18} />
                        </a>

                        <div className="brands-hero-stats">
                            <div>
                                <strong>02</strong>
                                <span>Distinct Brands</span>
                            </div>

                            <div>
                                <strong>2021</strong>
                                <span>Hunters Group Established</span>
                            </div>

                            <div>
                                <strong>2004</strong>
                                <span>Shifa Organic Founded</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Both Brand Logos */}
                    <div className="brands-hero-visual">
                        <div className="brands-visual-glow" />

                        <div className="brands-logo-showcase">
                            <div className="brands-logo-item brands-logo-hunters">
                                <span className="brands-logo-number">01</span>

                                <div className="brands-logo-image">
                                    <img
                                        src="/hunters-logo.png"
                                        alt="Hunters Group logo"
                                    />
                                </div>

                                <h2>Hunters Group</h2>
                                <p>Business & Digital Solutions</p>
                            </div>

                            <div className="brands-showcase-divider">
                                <span />
                                <span>OUR BRANDS</span>
                                <span />
                            </div>

                            <div className="brands-logo-item brands-logo-shifa">
                                <span className="brands-logo-number">02</span>

                                <div className="brands-logo-image">
                                    <img
                                        src="/shifa.jpg"
                                        alt="Shifa Organic logo"
                                    />
                                </div>

                                <h2>Shifa Organic</h2>
                                <p>Herbal Wellness & Personal Care</p>
                            </div>
                        </div>

                        <div className="brands-visual-caption">
                            <span className="brands-caption-dot" />
                            Two brands. One journey of growth.
                        </div>
                    </div>
                </div>
            </section>


            {/* Brand cards */}
            <section className="brands-showcase" id="our-brands">
                <div className="brands-container">
                    <div className="brands-section-heading">
                        <span className="brands-eyebrow">MEET OUR BRANDS</span>
                        <h2>Our Brands, Our Identity</h2>
                        <p>
                            Explore what each brand stands for, what it offers,
                            and the mission that guides its journey.
                        </p>
                    </div>

                    <div className="brands-grid">
                        {brands.map((brand, index) => {
                            const Icon = brand.icon;

                            return (
                                <article
                                    key={brand.name}
                                    className={`brands-card brands-card-${brand.theme}`}
                                >
                                    <div className="brands-card-top">
                                        <span className="brands-card-number">
                                            BRAND 0{index + 1}
                                        </span>
                                        <Icon size={23} />
                                    </div>

                                    <div className="brands-card-logo">
                                        <img src={brand.logo} alt={`${brand.name} logo`} />
                                    </div>

                                    <span className="brands-category">
                                        {brand.category}
                                    </span>

                                    <h3>{brand.name}</h3>

                                    <span className="brands-established">
                                        {brand.established}
                                    </span>

                                    <p>{brand.description}</p>
                                    <p>{brand.details}</p>

                                    <div className="brands-mission">
                                        <span>OUR MISSION</span>
                                        <p>{brand.mission}</p>
                                    </div>

                                    <div className="brands-tagline">
                                        “{brand.tagline}”
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="brands-card-link"
                                    >
                                        Connect With Us <ArrowUpRight size={17} />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Shared values */}
            <section className="brands-values">
                <div className="brands-container">
                    <div className="brands-section-heading">
                        <span className="brands-eyebrow">WHAT WE STAND FOR</span>
                        <h2>Values Behind Our Brands</h2>
                        <p>
                            Different brand identities, guided by a commitment
                            to relationships, trust, and continuous improvement.
                        </p>
                    </div>

                    <div className="brands-values-grid">
                        {strengths.map((strength) => {
                            const Icon = strength.icon;

                            return (
                                <article className="brands-value-card" key={strength.title}>
                                    <div className="brands-value-icon">
                                        <Icon size={25} />
                                    </div>
                                    <h3>{strength.title}</h3>
                                    <p>{strength.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="brands-cta">
                <div className="brands-container">
                    <span className="brands-eyebrow">LET'S CONNECT</span>
                    <h2>Interested in Our Brands?</h2>
                    <p>
                        Get in touch with Hunters Group to discuss business
                        opportunities, partnerships, or brand-related enquiries.
                    </p>

                    <Link href="/contact" className="brands-primary-btn">
                        Contact Hunters Group <ArrowUpRight size={17} />
                    </Link>
                </div>
            </section>

            <footer className="brands-footer">
                <div className="brands-container">
                    <span>© 2026 Hunters Group</span>
                    <Link href="/">Back to Home</Link>
                </div>
            </footer>
        </main>
    );
}
