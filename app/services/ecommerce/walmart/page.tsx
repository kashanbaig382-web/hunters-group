
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Search,
  Store,
  Package,
  BarChart3,
  Tags,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Walmart Marketplace Services | Hunters Group",
  description:
    "Explore Walmart marketplace support, product research, listing optimization, catalog organization, and seller performance services.",
};

const services = [
  {
    icon: Store,
    title: "Seller Account Guidance",
    description:
      "Understand seller onboarding requirements and organize the information needed for your marketplace application.",
  },
  {
    icon: Search,
    title: "Product Research",
    description:
      "Explore product opportunities, market demand, competition, and relevant categories for your business.",
  },
  {
    icon: Package,
    title: "Product Listing Optimization",
    description:
      "Improve product titles, descriptions, attributes, images, and listing presentation.",
  },
  {
    icon: Tags,
    title: "Catalog Organization",
    description:
      "Organize product information, variants, categories, and catalog details for easier store management.",
  },
  {
    icon: BarChart3,
    title: "Marketplace SEO",
    description:
      "Review product content and relevant search terms to improve listing relevance and discoverability.",
  },
  {
    icon: TrendingUp,
    title: "Performance Support",
    description:
      "Review store operations and identify practical opportunities to improve product presentation and workflows.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "Tell us about your products, target market, and current marketplace status.",
  },
  {
    number: "02",
    title: "Review your requirements",
    description:
      "Identify the research, listings, catalog, and operational support you need.",
  },
  {
    number: "03",
    title: "Plan the next steps",
    description:
      "Discuss the project scope, responsibilities, and suitable workflow.",
  },
];

const whatsappLink =
  "https://wa.me/923238874539?text=" +
  encodeURIComponent(
    "Hello Hunters Group, I am interested in Walmart Marketplace Services. Please share the available services and pricing."
  );

export default function WalmartPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/hunters-logo.png"
              alt="Hunters Group logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-lg font-bold tracking-wide">
              HUNTER$ <span className="text-blue-600">GROUP</span>
            </span>
          </Link>

          <Link
            href="/services/ecommerce"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            All E-Commerce Services
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <img
                src="/walmart.png"
                alt="Walmart"
                className="h-8 w-24 object-contain"
              />
              <span className="h-7 w-px bg-slate-200" />
              <span className="text-sm font-semibold text-slate-600">
                Marketplace Services
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Grow your
              <span className="block text-blue-600">
                Walmart business.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Explore practical marketplace support for product research,
              listing optimization, catalog organization, and store operations.
              We&apos;ll discuss the services that fit your business needs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-4 font-semibold !text-white transition hover:bg-blue-700"
              >
                Discuss Your Requirements
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#walmart-services"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                Explore Services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-950/5">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
              alt="Business owner working on an online store"
              className="h-72 w-full rounded-xl object-cover md:h-[430px]"
            />
            <div className="grid grid-cols-2 gap-3 p-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Product management</p>
                <p className="mt-1 font-bold">Listings & catalog</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-blue-600">Store support</p>
                <p className="mt-1 font-bold">Research & SEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="walmart-services"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24"
      >
        <div className="max-w-3xl">
          <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
            WHAT WE PROVIDE
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Walmart services for your business
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Explore the support areas that match your products, marketplace
            requirements, and current business priorities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

                <h3 className="mt-2 text-xl font-bold">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href={
                    "https://wa.me/923238874539?text=" +
                    encodeURIComponent(
                      `Hello Hunters Group, I am interested in ${service.title}. Please share more details.`
                    )
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Enquire About This Service
                  <ArrowUpRight size={17} />
                </a>
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
              We review your goals and requirements, identify the relevant
              support areas, and discuss the scope before work begins.
            </p>
          </div>

          <div className="space-y-6">
            {process.map((step) => (
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
          <img
            src="/walmart.png"
            alt="Walmart"
            className="mx-auto mb-6 h-12 w-32 rounded-lg bg-white p-2 object-contain"
          />

          <h2 className="text-3xl font-bold md:text-4xl">
            Let&apos;s discuss your Walmart business.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Tell us about your products and marketplace goals so we can discuss
            suitable services for your business.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg !bg-white px-6 py-4 !font-semibold !text-blue-700 transition hover:!bg-blue-50"
          >
            Contact Us on WhatsApp
            <ArrowUpRight size={18} />
          </a>

          <div className="mt-8">
            <Link
              href="/services/ecommerce"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 hover:text-white"
            >
              <ArrowLeft size={15} />
              Explore other e-commerce services
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
