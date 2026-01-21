import Link from "next/link";
import { Pill, Stethoscope, Sparkles, Apple, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Pharmaceutical",
    icon: Pill,
    items: [
      "Logistic solutions for pharmaceutical companies",
      "Licensing pharmaceutical companies with the Food and Drug Authority",
      "Registration of human medicines",
      "Preparing SOPs, quality systems, and training",
    ],
  },
  {
    title: "Medical Devices",
    icon: Stethoscope,
    items: [
      "Authorized representative agreements and licensing",
      "SOPs and quality systems compatible with ISO standards",
      "Medical devices registration (MDMA)",
      "Import clearance requests",
    ],
  },
  {
    title: "Cosmetics & Personal Care",
    icon: Sparkles,
    items: [
      "Licensing of cosmetics companies",
      "Reviewing and translating cosmetics files per SFDA requirements",
      "Cosmetics products registration",
      "Import clearance & conformity certificates",
    ],
  },
  {
    title: "Foods & Nutritional Supplements",
    icon: Apple,
    items: [
      "Registration of foods and nutritional supplements",
      "Prior notification of import applications",
      "Logistical solutions for food companies",
    ],
  },
];

const values = [
  {
    title: "Excellence",
    text: "Delivering regulatory services with the highest standards of quality and accuracy.",
  },
  {
    title: "Integrity",
    text: "Honesty, transparency, and ethical conduct in every engagement.",
  },
  {
    title: "Collaboration",
    text: "Strong partnerships with clients and regulatory authorities.",
  },
  {
    title: "Innovation",
    text: "Staying ahead of regulatory changes with practical, innovative solutions.",
  },
  {
    title: "Client Focus",
    text: "Personalized guidance and end-to-end support tailored to your needs.",
  },
];

export default function EnHomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
      {/* HERO */}
      <section className="border-b border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs text-slate-600">
                Regulatory Affairs • Saudi Market
              </p>

              <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
                Pharma Registration
              </h1>

              <p className="mt-4 text-lg text-slate-600 md:text-xl">
                Empowering Pharmaceutical Companies with Regulatory Solutions
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                With over <span className="font-semibold">13 years</span> of
                experience in the Saudi market, we provide meticulous regulatory
                and advisory services to ensure confident and compliant market
                entry.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/en/contact"
                  className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  Contact Us
                </Link>
                <Link
                  href="/en/services"
                  className="rounded-xl border border-white/40 bg-white/60 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white/70"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* HERO GLASS CARD */}
            <div className="glass-card glass-card-hover p-6 fade-up">
              <p className="text-sm font-semibold">Trusted Regulatory Support</p>
              <p className="mt-2 text-sm text-slate-600 leading-7">
                End-to-end compliance support for pharmaceuticals, medical
                devices, cosmetics, and food products.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "SFDA-aligned documentation",
                  "Process streamlining",
                  "Operational readiness support",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/60 backdrop-blur px-4 py-3 text-sm"
                  >
                    <ShieldCheck className="h-4 w-4 text-sky-600" />
                    <span className="text-slate-700">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="fade-up">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Pharma Registration delivers precise regulatory and advisory
              services tailored to your business needs, helping you save time
              and focus on growth while ensuring full regulatory compliance.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 fade-up">
            <p className="text-sm font-semibold">What you can expect</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-7">
              <li>• Clear SFDA-aligned regulatory pathways</li>
              <li>• Accurate document preparation and review</li>
              <li>• Practical compliance and operational guidance</li>
              <li>• Responsive, client-focused communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-semibold fade-up">Our Values</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass-card glass-card-hover p-4 fade-up"
              >
                <p className="font-medium">{v.title}</p>
                <p className="mt-1 text-sm text-slate-600 leading-7">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Services</h2>
            <Link
              href="/en/services"
              className="text-sm font-medium text-slate-700 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="glass-card glass-card-hover p-6 fade-up"
                >
                  <div className="flex items-start gap-4">
                    <div className="glass-icon mt-1">
                      <Icon className="h-5 w-5 text-sky-700" />
                    </div>

                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <ul className="mt-3 space-y-1 text-sm text-slate-600 leading-7">
                        {s.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>

                      <Link
                        href="/en/services"
                        className="mt-3 inline-block text-sm font-medium text-sky-700 hover:underline"
                      >
                        See more →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="glass-card p-10 text-center fade-up">
            <h3 className="text-2xl font-semibold">
              Let’s support your regulatory needs
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-7">
              Share your company details and product category, and we’ll guide
              you through the best regulatory pathway.
            </p>
            <div className="mt-6">
              <Link
                href="/en/contact"
                className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Regulatory disclaimer: Website content is for informational purposes
            only and does not replace official SFDA guidance.
          </p>
        </div>
      </section>
    </main>
  );
}
