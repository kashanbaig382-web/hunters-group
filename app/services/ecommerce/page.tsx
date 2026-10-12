import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ShoppingCart,
    Store,
    Package,
    BarChart3,
    Boxes,
    Headset,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-Commerce Solutions",
    description:
        "Explore e-commerce solutions from Hunters Group, including Amazon, eBay, Etsy and Shopify store setup, optimisation and seller support.",
    openGraph: {
        title: "E-Commerce Solutions | Hunters Group",
        description:
            "Discover e-commerce marketplace and online store support for your business with Hunters Group.",
        type: "website",
    },
};


const services = [
    {
        icon: Store,
        title: "Amazon Seller Services",
        description:
            "Build and grow your Amazon business with seller account support, product research, listing optimisation and marketplace management.",
        features: [
            "Seller Account Setup & Guidance",
            "Product Research & Validation",
            "Product Listing & SEO",
            "Amazon PPC Campaign Management",
            "FBA & FBM Support",
            "Account Health & Store Management",
        ],
    },
    {
        icon: Package,
        title: "eBay Seller Services",
        description:
            "Manage your eBay selling journey with organised listings, product optimisation and practical marketplace support.",
        features: [
            "Seller Account Setup Guidance",
            "Product Research",
            "Listing Creation & Optimisation",
            "eBay SEO & Keywords",
            "Order Management Support",
            "Store Performance Optimisation",
        ],
    },
    {
        icon: Boxes,
        title: "Etsy Shop Services",
        description:
            "Create a stronger Etsy shop presence with product listings, keyword research and shop optimisation.",
        features: [
            "Shop Setup Guidance",
            "Product Listing Creation",
            "Tags & Keyword Research",
            "Etsy SEO",
            "Product Presentation",
            "Shop Optimisation",
        ],
    },
    {
        icon: ShoppingCart,
        title: "Shopify Store Services",
        description:
            "Launch and improve your Shopify store with professional design, product organisation and essential integrations.",
        features: [
            "Shopify Store Setup",
            "Store Design & Theme Customisation",
            "Product Upload & Organisation",
            "Payment & App Integration",
            "Conversion Rate Optimisation",
            "Store Management Support",
        ],
    },
];
const whatsappLink =
    "https://wa.me/923250930059?text=" +
    encodeURIComponent(
        "Hello Hunters Group, I am interested in your Export Services. Please share more details."
    );

export default function EcommercePage() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <header className="border-b border-slate-100">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
                        <img
                            src="/hunters-logo.png"
                            alt="Hunters Group logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-lg font-bold tracking-wide">
                            HUNTER$ <span className="text-blue-600">GROUP</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
                        <a href="/" className="transition hover:text-blue-600">
                            Home
                        </a>
                        <a href="/#services" className="transition hover:text-blue-600">
                            All Services
                        </a>
                        <a href="/#about" className="transition hover:text-blue-600">
                            About Us
                        </a>
                        <a href="/#contact" className="transition hover:text-blue-600">
                            Contact
                        </a>
                    </nav>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold !text-white transition hover:bg-blue-700"
                    >
                        Get a Quote <ArrowUpRight size={16} />
                    </a>
                </div>
            </header>

            <section className="relative overflow-hidden bg-slate-50">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700">
                            <ShoppingCart size={16} />
                            E-Commerce Solutions
                        </div>

                        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                            Build a stronger
                            <span className="block text-blue-600">
                                online business.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Practical e-commerce support to help businesses organise
                            their online stores, manage operations and create better
                            shopping experiences for their customers.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20am%20interested%20in%20your%20E-Commerce%20Solutions."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold !text-white transition hover:bg-blue-700"
                            >
                                Discuss Your Requirements
                                <ArrowUpRight size={18} />
                            </a>

                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                            >
                                Explore Services
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-950/5">
                            <img
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
                                alt="Online business owner managing an e-commerce transaction"
                                className="h-72 w-full rounded-xl object-cover md:h-[430px]"
                            />
                            <div className="grid grid-cols-2 gap-3 p-4">
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <p className="text-sm text-slate-500">
                                        Store operations
                                    </p>
                                    <p className="mt-1 font-bold">Organised workflows</p>
                                </div>
                                <div className="rounded-xl bg-blue-50 p-4">
                                    <p className="text-sm text-blue-600">
                                        Business focus
                                    </p>
                                    <p className="mt-1 font-bold">Customer experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
                <div className="max-w-3xl">
                    <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                        WHAT WE PROVIDE
                    </span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                        E-commerce support for your business needs
                    </h2>
                    <p className="mt-5 leading-8 text-slate-600">
                        Whether you are starting an online store or improving an
                        existing operation, our service areas are designed to help
                        you organise essential tasks and coordinate your next steps.
                    </p>
                </div>

                <div
                    id="services"
                    className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                    <Icon size={23} />
                                </div>

                                <p className="mt-6 text-sm font-semibold text-blue-600">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <h3 className="mt-2 text-xl font-bold">
                                    {service.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {service.description}
                                </p>

                                <div className="mt-6 border-t border-slate-100 pt-5">
                                    <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
                                        Our Services
                                    </h4>

                                    <ul className="space-y-3">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    className="mt-1 shrink-0 text-blue-600"
                                                />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/923250930059?text=${encodeURIComponent(
                                            `Hello Hunters Group, I am interested in your ${service.title}. Please share more details.`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                                    >
                                        Enquire About This Service
                                        <ArrowUpRight size={17} />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="bg-slate-50 py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
                    <div>
                        <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                            HOW WE WORK
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                            A clear process, built around your requirements.
                        </h2>
                        <p className="mt-5 leading-8 text-slate-600">
                            We start by understanding your business, then discuss
                            suitable service options and agree on the next steps.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                number: "01",
                                title: "Understand your business",
                                description:
                                    "Tell us about your store, products and current challenges.",
                            },
                            {
                                number: "02",
                                title: "Identify your requirements",
                                description:
                                    "Discuss the support and operational services you need.",
                            },
                            {
                                number: "03",
                                title: "Plan the next steps",
                                description:
                                    "Review the scope, responsibilities and proposed workflow.",
                            },
                        ].map((step) => (
                            <div key={step.number} className="flex gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{step.title}</h3>
                                    <p className="mt-2 leading-7 text-slate-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-7 py-12 text-center text-white md:px-14 md:py-16">
                    <CheckCircle2 className="mx-auto mb-5" size={34} />
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Let&apos;s discuss your e-commerce requirements.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
                        Tell us what your business needs, and let&apos;s discuss
                        the right way forward with Hunters Group.
                    </p>

                    <a
                        href="https://wa.me/923250930059?text=Hello%20Hunters%20Group%2C%20I%20would%20like%20to%20discuss%20E-Commerce%20Solutions."
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg !bg-white px-6 py-4 !font-semibold !text-blue-700 transition hover:!bg-blue-50"
                    >
                        Contact Us on WhatsApp
                        <ArrowUpRight size={18} />
                    </a>

                    <div className="mt-8">
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 hover:text-white"
                        >
                            <ArrowLeft size={15} />
                            Explore other services
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="border-t border-slate-100 py-7">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
                    <span>© 2026 Hunters Group. All rights reserved.</span>
                    <Link href="/" className="font-semibold hover:text-blue-600">
                        Back to homepage
                    </Link>
                </div>
            </footer>
        </main>
    );
}