import type { Metadata } from "next";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    ClipboardCheck,
    Globe2,
    Handshake,
    PackageSearch,
    Search,
    ShieldCheck,
    Users,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Buyer & Sourcing Support",
    description:
        "Explore supplier discovery, product sourcing, buyer coordination and procurement support for your business with Hunters Group.",
    openGraph: {
        title: "Buyer & Sourcing Support | Hunters Group",
        description:
            "Discuss product sourcing, supplier options and purchasing requirements with Hunters Group.",
        type: "website",
    },
};

const services = [
    {
        icon: Search,
        title: "Supplier Discovery",
        description:
            "Explore potential suppliers based on your product category, sourcing location and business requirements.",
    },
    {
        icon: PackageSearch,
        title: "Product Sourcing",
        description:
            "Discuss product specifications, quantities and sourcing options to help identify suitable purchasing opportunities.",
    },
    {
        icon: ClipboardCheck,
        title: "Product Requirements",
        description:
            "Organise product details, quality expectations, packaging needs and order specifications before purchasing.",
    },
    {
        icon: Handshake,
        title: "Buyer & Supplier Coordination",
        description:
            "Coordinate communication between relevant parties to clarify requirements and move purchasing discussions forward.",
    },
    {
        icon: ShieldCheck,
        title: "Supplier Information Review",
        description:
            "Review available supplier information and discuss practical checks before making a purchasing decision.",
    },
    {
        icon: Users,
        title: "Procurement Support",
        description:
            "Discuss purchasing requirements, order coordination and sourcing arrangements for your business.",
    },
];

const steps = [
    {
        number: "01",
        title: "Share Your Requirements",
        description:
            "Tell us which product you need, the quantity, specifications and your target budget.",
    },
    {
        number: "02",
        title: "Explore Sourcing Options",
        description:
            "Discuss potential suppliers and product options based on your requirements.",
    },
    {
        number: "03",
        title: "Review the Details",
        description:
            "Clarify product specifications, available supplier information and order requirements.",
    },
    {
        number: "04",
        title: "Coordinate Next Steps",
        description:
            "Discuss purchasing, supplier communication and the next steps for your order.",
    },
];

const faqs = [
    {
        question: "Can you help me find suppliers for my products?",
        answer:
            "Share your product category, preferred sourcing country and requirements with our team. Available sourcing support depends on the product and market.",
    },
    {
        question: "Can you source products internationally?",
        answer:
            "You can enquire about international sourcing options. Feasibility depends on product availability, supplier requirements and destination regulations.",
    },
    {
        question: "Can you help me review supplier information?",
        answer:
            "We can discuss available supplier information and possible review steps. Any verification or inspection service must be confirmed separately.",
    },
    {
        question: "What information should I provide for a sourcing enquiry?",
        answer:
            "Share the product name, specifications, estimated quantity, target price, preferred country and any quality or packaging requirements.",
    },
];

const whatsappLink =
    "https://wa.me/923250930059?text=" +
    encodeURIComponent(
        "Hello Hunters Group, I am interested in your Buyer & Sourcing Support. Please share more details."
    );

export default function BuyerSourcingPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-slate-900">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="/hunters-logo.png"
                            alt="Hunters Group logo"
                            className="h-10 w-10 object-contain"
                        />
                        <span className="text-lg font-extrabold tracking-tight">
                            HUNTERS <span className="text-blue-600">GROUP</span>
                        </span>
                    </a>

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

            {/* Hero */}
            <section className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-sky-100" />
                <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:px-10">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                            <Globe2 size={16} />
                            Global Sourcing & Procurement
                        </div>

                        <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Find the Right Products and{" "}
                            <span className="text-blue-600">Sourcing Options.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Explore supplier discovery, product sourcing and buyer
                            coordination support tailored to your business requirements.
                            Start with your product needs and discuss the next steps
                            with Hunters Group.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold !text-white transition hover:bg-blue-700"
                            >
                                Discuss Your Requirements <ArrowRight size={18} />
                            </a>

                            <a
                                href="#our-services"
                                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                            >
                                Explore Services
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={17} className="text-blue-600" />
                                Business-focused sourcing
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={17} className="text-blue-600" />
                                Tailored product enquiries
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-2xl shadow-blue-950/10">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                                alt="Organised products and goods in a logistics facility"
                                className="h-[300px] w-full rounded-2xl object-cover sm:h-[390px]"
                            />

                            <div className="grid grid-cols-2 gap-3 p-3 pt-5 sm:p-5">
                                <div className="rounded-xl bg-blue-50 p-4">
                                    <PackageSearch className="mb-3 text-blue-600" size={25} />
                                    <p className="font-bold">Product Sourcing</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Explore suitable products
                                    </p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <Handshake className="mb-3 text-blue-600" size={25} />
                                    <p className="font-bold">Buyer Coordination</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Organise order requirements
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="border-y border-slate-100 bg-white">
                <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-10">
                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Search size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Supplier Discovery</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Explore potential suppliers for your product needs.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <PackageSearch size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Product Research</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Clarify product details and sourcing requirements.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Handshake size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Order Coordination</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Coordinate communication and purchasing discussions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="our-services" className="scroll-mt-24 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            Our Buyer & Sourcing Services
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Better Clarity at Every Sourcing Step
                        </h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Discuss product requirements, potential suppliers and
                            purchasing coordination for your business.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                                    >
                                        Enquire Now <ArrowUpRight size={17} />
                                    </a>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            Our Process
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            From Your Product Idea to Sourcing Discussion
                        </h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Start with a clear brief so your sourcing requirements can
                            be discussed in an organised way.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-slate-200 bg-white p-6"
                            >
                                <span className="text-3xl font-extrabold text-blue-600">
                                    {step.number}
                                </span>
                                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            FAQs
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Questions About Product Sourcing?
                        </h2>
                        <p className="mt-5 leading-8 text-slate-600">
                            Every sourcing requirement is different. Share your product
                            details with our team to discuss the available options.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold !text-white transition hover:bg-blue-700"
                        >
                            Ask Us on WhatsApp <ArrowRight size={17} />
                        </a>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200 open:bg-blue-50/40"
                            >
                                <summary className="cursor-pointer list-none font-bold leading-7 marker:hidden">
                                    <span className="flex items-center justify-between gap-4">
                                        {faq.question}
                                        <span className="text-xl text-blue-600 transition group-open:rotate-45">
                                            +
                                        </span>
                                    </span>
                                </summary>
                                <p className="mt-3 pr-6 text-sm leading-7 text-slate-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-700 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
                    <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
                    <div className="absolute -bottom-28 right-1/3 h-64 w-64 rounded-full bg-blue-500/40 blur-3xl" />

                    <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                                Let's Work Together
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                                Looking for the Right Sourcing Partner?
                            </h2>
                            <p className="mt-4 max-w-xl leading-8 text-blue-100">
                                Contact Hunters Group to discuss your product requirements,
                                sourcing options and procurement needs.
                            </p>
                        </div>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-lg !bg-white px-6 py-4 !font-semibold !text-blue-700 transition hover:!bg-blue-50"
                        >
                            Contact Our Team <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src="/hunters-logo.png"
                            alt="Hunters Group logo"
                            className="h-9 w-9 object-contain"
                        />
                        <span className="font-extrabold tracking-tight">
                            HUNTERS <span className="text-blue-600">GROUP</span>
                        </span>
                    </a>

                    <p className="text-sm text-slate-500">
                        © 2026 Hunters Group. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-5 text-sm font-medium text-slate-600">
                        <a
                            href="https://www.instagram.com/hunters_group71/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-blue-600"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/Huntersgroup71/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-blue-600"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://wa.me/923250930059"
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-blue-600"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
