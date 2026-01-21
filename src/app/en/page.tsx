import Link from "next/link";
import {
  Pill,
  Stethoscope,
  Sparkles,
  Apple,
  ShieldCheck,
  Target,
  Eye,
} from "lucide-react";

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
            <div>
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
                and advisory services.
              </p>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/en/contact"
                  className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  Contact Us
                </Link>
                <Link
                  href="/en/services"
                  className="rounded-xl border border-white/40 bg-white/60 backdrop-blur px-5 py-3 text-sm hover:bg-white/70"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="glass-card p-6">
              <p className="text-sm font-semibold">Trusted Regulatory Support</p>
              <p className="mt-2 text-sm text-slate-600">
                End-to-end compliance for pharmaceuticals, medical devices,
                cosmetics, and food products.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "SFDA-aligned documentation",
                  "Process streamlining",
                  "Operational readiness support",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-xl border border-white/40 bg-white/60 px-4 py-3 text-sm"
                  >
                    <ShieldCheck className="h-4 w-4 text-sky-600" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 text-slate-600 leading-7">
              Pharma Registration provides regulatory and advisory services that
              help companies achieve compliance while focusing on growth.
            </p>
          </div>

          <div className="glass-card p-6">
            <p className="text-sm font-semibold">What you can expect</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Clear SFDA-aligned pathways</li>
              <li>• Accurate documentation</li>
              <li>• Practical compliance support</li>
              <li>• Client-focused communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-slate-600 leading-7">
                Our mission is to provide high-quality regulatory consultations
                enabling safe and effective products to reach the market.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-2 text-slate-600 leading-7">
                To be the preferred regulatory partner for pharmaceutical and
                medical device companies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
