import Link from "next/link";
import {
  Pill,
  Stethoscope,
  Sparkles,
  Apple,
  ShieldCheck,
  Target,
  Eye,
  LucideIcon,
} from "lucide-react";

// 1. تعريف أنواع البيانات لـ TypeScript لمنع خطأ الـ Build
interface ServiceItem {
  title: string;
  icon: LucideIcon;
  items: string[];
}

interface ValueItem {
  title: string;
  text: string;
}

// 2. إضافة البيانات كاملة مع تحديد النوع
const services: ServiceItem[] = [
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

const values: ValueItem[] = [
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
      {/* HERO SECTION */}
      <section className="border-b border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700">
                Regulatory Affairs • Saudi Market
              </p>

              <h1 className="mt-4 text-4xl font-bold md:text-6xl text-slate-900">
                Pharma Registration
              </h1>

              <p className="mt-4 text-xl text-slate-600">
                Empowering Healthcare Companies with Regulatory Excellence
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
                With over <span className="font-bold text-sky-600">13 years</span> of
                experience in the Saudi market, we provide meticulous regulatory
                and advisory services.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/en/contact"
                  className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-700 transition-all"
                >
                  Contact Us
                </Link>
                <Link
                  href="/en/services"
                  className="glass-card px-6 py-3.5 text-sm font-semibold hover:bg-white/80 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="glass-card p-8 shadow-xl fade-up delay-1">
              <p className="text-lg font-bold">Trusted Regulatory Support</p>
              <div className="mt-6 space-y-4">
                {[
                  "SFDA-aligned documentation",
                  "Process streamlining",
                  "Operational readiness",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/40 p-4 transition-all hover:translate-x-2"
                  >
                    <ShieldCheck className="h-5 w-5 text-sky-600" />
                    <span className="text-sm font-medium">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 fade-up">Our Core Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card glass-card-hover p-6 fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-icon mb-4 text-sky-600">
                <service.icon size={22} />
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <ul className="text-xs text-slate-500 space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-2"><span>•</span> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white/50 py-20 border-y border-white/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div className="flex gap-6 fade-up">
            <div className="glass-icon bg-sky-100 text-sky-700 shrink-0">
              <Target />
            </div>
            <div>
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Providing high-quality consultations enabling safe products to reach the market.
              </p>
            </div>
          </div>
          <div className="flex gap-6 fade-up delay-1">
            <div className="glass-icon bg-sky-100 text-sky-700 shrink-0">
              <Eye />
            </div>
            <div>
              <h3 className="text-xl font-bold">Vision</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                To be the preferred global regulatory partner for healthcare industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}