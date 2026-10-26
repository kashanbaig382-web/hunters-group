import type { Metadata } from "next";
import {
    ArrowRight,
    ArrowUpRight,
    Boxes,
    CheckCircle2,
    ClipboardCheck,
    Package,
    ShieldCheck,
    Truck,
    Warehouse,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Warehousing Services",
    description:
        "Explore warehousing support for storage planning, inventory coordination, goods handling and dispatch planning with Hunters Group.",
    openGraph: {
        title: "Warehousing Services | Hunters Group",
        description:
            "Discuss storage, stock organisation and warehouse handling requirements with Hunters Group.",
        type: "website",
    },
};

const services = [
    {
        icon: Warehouse,
        title: "Storage Solutions",
        description:
            "Discuss storage requirements for your goods based on product type, quantity and handling needs.",
    },
    {
        icon: Boxes,
        title: "Inventory Coordination",
        description:
            "Keep stock information organised and coordinate inventory records according to your business needs.",
    },
    {
        icon: Package,
        title: "Goods Handling",
        description:
            "Plan the handling and movement of products within the warehouse according to their requirements.",
    },
    {
        icon: ClipboardCheck,
        title: "Stock Organisation",
        description:
            "Explore practical ways to organise goods, identify products and maintain clearer stock records.",
    },
    {
        icon: ShieldCheck,
        title: "Storage Requirements",
        description:
            "Discuss suitable storage conditions and handling considerations for your products.",
    },
    {
        icon: Truck,
        title: "Dispatch Coordination",
        description:
            "Coordinate outgoing goods and discuss dispatch arrangements for your deliveries and orders.",
    },
];

const steps = [
    {
        number: "01",
        title: "Share Your Requirements",
        description:
            "Tell us about your goods, estimated volume, storage duration and handling needs.",
    },
    {
        number: "02",
        title: "Discuss a Suitable Setup",
        description:
            "Review your requirements and discuss possible storage and inventory arrangements.",
    },
    {
        number: "03",
        title: "Organise Your Goods",
        description:
            "Plan stock organisation, handling procedures and inventory coordination.",
    },
    {
        number: "04",
        title: "Coordinate Dispatch",
        description:
            "Discuss outgoing orders, delivery requirements and dispatch coordination.",
    },
];

const faqs = [
    {
        question: "What types of goods can be stored?",
        answer:
            "Share your product category and storage requirements with our team. Acceptance depends on the goods, handling requirements and available facilities.",
    },
    {
        question: "Can I discuss inventory management?",
        answer:
            "Yes, you can enquire about inventory coordination and stock organisation. The available scope will depend on your business requirements.",
    },
    {
        question: "Can storage and dispatch be coordinated together?",
        answer:
            "You can discuss both requirements with our team. Available arrangements depend on your shipment needs and the services confirmed for your project.",
    },
    {
        question: "How do I request a warehousing quotation?",
        answer:
            "Contact us on WhatsApp with your product type, estimated quantity, required storage period and preferred location.",
    },
];

const whatsappLink =
    "https://wa.me/923238874539?text=" +
    encodeURIComponent(
        "Hello Hunters Group, I am interested in your Warehousing Services. Please share more details."
    );

export default function WarehousingPage() {
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
                        <a href="/about" className="transition hover:text-blue-600">
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
                            <Warehouse size={16} />
                            Storage & Inventory Support
                        </div>

                        <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Smarter Storage for Your{" "}
                            <span className="text-blue-600">Business Goods.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Explore warehousing support for storage planning, stock
                            organisation, goods handling and dispatch coordination.
                            Discuss a solution that fits your business requirements.
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
                                Business-focused planning
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={17} className="text-blue-600" />
                                Tailored storage enquiries
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-2xl shadow-blue-950/10">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
                                alt="Organised warehouse storage and goods handling"
                                className="h-[300px] w-full rounded-2xl object-cover sm:h-[390px]"
                            />

                            <div className="grid grid-cols-2 gap-3 p-3 pt-5 sm:p-5">
                                <div className="rounded-xl bg-blue-50 p-4">
                                    <Boxes className="mb-3 text-blue-600" size={25} />
                                    <p className="font-bold">Stock Organisation</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Organised inventory records
                                    </p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <Truck className="mb-3 text-blue-600" size={25} />
                                    <p className="font-bold">Dispatch Planning</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Coordinate outgoing goods
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
                            <Warehouse size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Storage Planning</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Discuss space and storage requirements for your goods.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Boxes size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Inventory Coordination</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Keep stock information and product organisation clear.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Truck size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Goods Movement</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Discuss handling, dispatch and delivery coordination.
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
                            Our Warehousing Services
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Organised Storage. Coordinated Operations.
                        </h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Discuss the storage, handling and stock coordination support
                            your business requires.
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
                            How It Works
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            A Clear Process for Your Storage Needs
                        </h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Start with your requirements and discuss the most suitable
                            arrangements with our team.
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
                            Questions About Warehousing?
                        </h2>
                        <p className="mt-5 leading-8 text-slate-600">
                            Every business has different storage requirements. Share
                            your needs with us to discuss the available options.
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
                                Let's Discuss Your Needs
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                                Looking for Warehousing Support?
                            </h2>
                            <p className="mt-4 max-w-xl leading-8 text-blue-100">
                                Contact Hunters Group to discuss your storage, inventory
                                and goods handling requirements.
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
                            href="https://wa.me/923238874539"
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
