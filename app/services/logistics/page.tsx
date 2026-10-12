import type { Metadata } from "next";
import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    Globe2,
    MapPin,
    Package,
    Route,
    Ship,
    Truck,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Logistics & Shipping",
    description:
        "Explore logistics and shipping support from Hunters Group, including cargo transportation, shipment coordination and delivery planning.",
    openGraph: {
        title: "Logistics & Shipping | Hunters Group",
        description:
            "Discuss cargo movement, shipping options and delivery coordination with Hunters Group.",
        type: "website",
    },
};

const services = [
    {
        icon: Ship,
        title: "International Shipping",
        description:
            "Discuss suitable shipping options for your goods based on destination, shipment size and business requirements.",
    },
    {
        icon: Truck,
        title: "Cargo Transportation",
        description:
            "Coordinate the movement of goods and explore practical transportation arrangements for your shipment.",
    },
    {
        icon: Route,
        title: "Shipment Coordination",
        description:
            "Organise shipment details, transport requirements and communication between the relevant parties.",
    },
    {
        icon: MapPin,
        title: "Delivery Planning",
        description:
            "Discuss delivery destinations, handling needs and the arrangements required to move goods to their destination.",
    },
    {
        icon: Package,
        title: "Cargo Handling Support",
        description:
            "Review packaging, cargo handling and shipment preparation requirements for your products.",
    },
    {
        icon: Clock3,
        title: "Shipment Updates",
        description:
            "Coordinate shipment information and communicate relevant updates according to the agreed service arrangements.",
    },
];

const steps = [
    {
        number: "01",
        title: "Tell Us About Your Cargo",
        description:
            "Share the cargo type, quantity, dimensions, collection point and destination.",
    },
    {
        number: "02",
        title: "Discuss Shipping Options",
        description:
            "Review possible transportation arrangements according to your requirements.",
    },
    {
        number: "03",
        title: "Coordinate the Shipment",
        description:
            "Confirm the relevant details, responsibilities and arrangements before dispatch.",
    },
    {
        number: "04",
        title: "Plan Delivery",
        description:
            "Discuss delivery coordination and any shipment updates included in the agreed service.",
    },
];

const faqs = [
    {
        question: "Do you handle domestic and international shipments?",
        answer:
            "Share your origin and destination with our team so we can discuss whether your required shipping route can be supported.",
    },
    {
        question: "How can I request a shipping quotation?",
        answer:
            "Send us the cargo type, approximate weight and dimensions, origin, destination and preferred shipping timeline.",
    },
    {
        question: "Which shipping method is suitable for my goods?",
        answer:
            "The suitable option depends on cargo dimensions, weight, destination, urgency, applicable restrictions and available arrangements.",
    },
    {
        question: "Can I receive shipment updates?",
        answer:
            "You can discuss the available communication and tracking arrangements with our team before confirming a shipment.",
    },
];

const whatsappLink =
    "https://wa.me/923250930059?text=" +
    encodeURIComponent(
        "Hello Hunters Group, I am interested in your Logistics & Shipping Services. Please share more details."
    );

export default function LogisticsServicesPage() {
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
                            Logistics & Supply Chain Support
                        </div>

                        <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Move Your Goods With{" "}
                            <span className="text-blue-600">Confidence.</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Explore logistics and shipping support for cargo
                            transportation, shipment coordination and delivery planning.
                            Discuss practical arrangements for your business.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold !text-white transition hover:bg-blue-700"
                            >
                                Discuss Your Shipment <ArrowRight size={18} />
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
                                Business-focused coordination
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 size={17} className="text-blue-600" />
                                Tailored shipping enquiries
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-3xl bg-blue-200/40 blur-2xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-white bg-white p-3 shadow-2xl shadow-blue-950/10">
                            <img
                                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85"
                                alt="Cargo containers at a shipping and logistics facility"
                                className="h-[300px] w-full rounded-2xl object-cover sm:h-[390px]"
                            />

                            <div className="grid grid-cols-2 gap-3 p-3 pt-5 sm:p-5">
                                <div className="rounded-xl bg-blue-50 p-4">
                                    <Ship className="mb-3 text-blue-600" size={25} />
                                    <p className="font-bold">Cargo Movement</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Discuss shipping arrangements
                                    </p>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-4">
                                    <Route className="mb-3 text-blue-600" size={25} />
                                    <p className="font-bold">Delivery Planning</p>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">
                                        Coordinate delivery requirements
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
                            <Ship size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Shipping Coordination</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Discuss available shipping options for your cargo.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Route size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Cargo Movement</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Plan transportation according to your shipment needs.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <MapPin size={23} />
                        </div>
                        <div>
                            <h2 className="font-bold">Delivery Planning</h2>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                Coordinate destinations and delivery arrangements.
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
                            Our Logistics Services
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Practical Solutions for Moving Goods
                        </h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Discuss the shipping, transportation and coordination
                            requirements of your business with our team.
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
                            From Shipment Planning to Delivery
                        </h2>
                        <p className="mt-4 leading-8 text-slate-600">
                            Start with your cargo requirements and discuss the next steps.
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
                            Questions About Logistics?
                        </h2>
                        <p className="mt-5 leading-8 text-slate-600">
                            Every shipment is different. Share your cargo and destination
                            details so our team can discuss the relevant options.
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
                                Let's Move Forward
                            </p>
                            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                                Need Help Coordinating a Shipment?
                            </h2>
                            <p className="mt-4 max-w-xl leading-8 text-blue-100">
                                Contact Hunters Group to discuss your cargo, shipping route
                                and delivery requirements.
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
