import { Pill, Stethoscope, Sparkles, Apple, ChevronDown } from "lucide-react";

const data = [
  {
    icon: Pill,
    title: "Pharmaceutical",
    desc: "Regulatory and operational support for pharmaceutical companies entering the Saudi market.",
    items: [
      "Provide logistic solutions for pharmaceutical companies",
      "Licensing pharmaceutical companies with the Food and Drug Authority",
      "Registration of human medicines",
      "Preparing SOPs, quality system and training",
      "Providing solutions for RSD system",
      "Consultations to ensure correct implementation of good distribution practice (GDP)",
      "Establishing and equipping medical warehouses",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medical Devices",
    desc: "Documentation, licensing, and registration support across the medical device lifecycle.",
    items: [
      "Authorized representative agreement preparation and licensing",
      "SOPs and quality systems compatible with ISO standards",
      "Licensing medical companies",
      "Preparing and reviewing medical device registration documents",
      "Register medical devices (MDMA)",
      "Medical devices import clearance requests",
      "Logistical solutions for medical device companies",
    ],
  },
  {
    icon: Sparkles,
    title: "Cosmetics & Personal Care",
    desc: "SFDA-aligned cosmetics files, labeling review, and registration support.",
    items: [
      "Licensing of cosmetics companies",
      "Preparing, reviewing, and translating cosmetics files and ensuring SFDA compliance",
      "Cosmetics products registration",
      "Import clearance requests and certificates of conformity",
      "Providing logistical solutions for cosmetics companies",
    ],
  },
  {
    icon: Apple,
    title: "Foods & Nutritional Supplements",
    desc: "Registration and import-related support for food products and supplements.",
    items: [
      "Registration of foods and nutritional supplements",
      "Submit applications for prior notification of import",
      "Providing logistical solutions to food companies",
    ],
  },
];

export default function EnServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      {/* Header */}
      <section className="text-center fade-up">
        <h1 className="text-3xl font-semibold md:text-4xl">Services</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Comprehensive regulatory affairs and advisory services tailored to your product category.
        </p>
      </section>

      {/* Cards Accordion */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {data.map((s, idx) => {
          const Icon = s.icon;
          return (
            <details
              key={s.title}
              className={`card-soft group rounded-3xl p-6 fade-up delay-${Math.min(
                idx,
                3
              )}`}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-4">
                  <div className="icon-badge mt-1">
                    <Icon className="h-5 w-5 text-sky-700" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold">{s.title}</h2>
                        <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                      </div>

                      <ChevronDown className="mt-1 h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" />
                    </div>
                  </div>
                </div>
              </summary>

              <div className="mt-5">
                <div className="h-px w-full bg-sky-100" />
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-sky-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="mt-10 fade-up">
        <div className="rounded-3xl bg-sky-100/70 p-10 text-center">
          <h3 className="text-2xl font-semibold">Need a clear regulatory pathway?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Contact us with your company details and product category. We’ll guide you through requirements and documentation.
          </p>
          <div className="mt-6">
            <a
              href="/en/contact"
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
