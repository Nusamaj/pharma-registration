import Link from "next/link";
import {
  Pill,
  Stethoscope,
  Sparkles,
  Apple,
  ShieldCheck,
  Target,
  Eye,
  ArrowRight
} from "lucide-react";

// تم استخدام البيانات المعرفة مسبقاً في كودك
const services = [ /* ... مصفوفتك الموجودة ... */ ];
const values = [ /* ... مصفوفتك الموجودة ... */ ];

export default function EnHomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
      
      {/* 1. HERO SECTION */}
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
                With over <span className="font-bold text-sky-600">13 years</span> of experience in the Saudi market, we provide meticulous regulatory and advisory services.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/en/contact" className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-700 transition-all">
                  Contact Us
                </Link>
                <Link href="/en/services" className="glass-card px-6 py-3.5 text-sm font-semibold hover:bg-white/80 transition-all">
                  Our Services
                </Link>
              </div>
            </div>

            <div className="glass-card p-8 shadow-xl fade-up delay-1">
              <p className="text-lg font-bold">Trusted Regulatory Support</p>
              <p className="mt-2 text-sm text-slate-600">Compliance for pharmaceuticals, devices, and more.</p>
              <div className="mt-6 space-y-4">
                {["SFDA-aligned documentation", "Process streamlining", "Operational readiness"].map((x) => (
                  <div key={x} className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/40 p-4 transition-all hover:translate-x-2">
                    <ShieldCheck className="h-5 w-5 text-sky-600" />
                    <span className="text-sm font-medium">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW (القسم الناقص في كودك) */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 fade-up">Our Core Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="glass-card glass-card-hover p-6 fade-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="glass-icon mb-4 text-sky-600">
                <service.icon size={22} />
              </div>
              <h3 className="font-bold text-lg mb-3">{service.title}</h3>
              <ul className="text-xs text-slate-500 space-y-2">
                {service.items.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex gap-2"><span>•</span> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="bg-white/50 py-20 border-y border-white/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div className="flex gap-6 fade-up">
            <div className="glass-icon bg-sky-100 text-sky-700 shrink-0"><Target /></div>
            <div>
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">Providing high-quality consultations enabling safe products to reach the market.</p>
            </div>
          </div>
          <div className="flex gap-6 fade-up delay-1">
            <div className="glass-icon bg-sky-100 text-sky-700 shrink-0"><Eye /></div>
            <div>
              <h3 className="text-xl font-bold">Vision</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">To be the preferred global regulatory partner for healthcare industries.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}