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
  FileText,
  ArrowRight,
} from "lucide-react";

// 1. Types
interface ServiceItem {
  title: string;
  icon: LucideIcon;
  items: string[];
}

interface ValueItem {
  title: string;
  text: string;
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

// 2. Data
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

const blogPosts: BlogPost[] = [
  {
    slug: "sfda-registration-overview",
    title: "SFDA Registration Overview: What to Prepare",
    date: "2026-01-21",
    category: "Regulatory",
    excerpt:
      "A practical overview of documentation, common delays, and how to reduce SFDA queries before submission.",
  },
  {
    slug: "gdp-basics",
    title: "GDP Basics for Pharmaceutical Distribution",
    date: "2026-01-18",
    category: "Quality",
    excerpt:
      "What GDP requires in real operations—SOPs, temperature mapping, deviations, and training alignment.",
  },
  {
    slug: "cosmetics-labeling",
    title: "Cosmetics Labeling Checklist (SFDA-aligned)",
    date: "2026-01-15",
    category: "Cosmetics",
    excerpt:
      "A quick checklist to validate claims, ingredient order, and bilingual label requirements before printing.",
  },
];

export default function EnHomePage() {
  return (
    <main className="min-h-screen text-slate-900">
      {/* ================= HERO SECTION ================= */}
      
{/* ================= HERO SECTION ================= */}
<section className="hero border-b border-white/40">
  <div className="hero-content mx-auto max-w-6xl px-4 py-16 md:py-28">
    <div className="grid items-center gap-12 md:grid-cols-2">

      {/* LEFT */}
      <div className="fade-up">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700">
          Regulatory Affairs • Saudi Market
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl text-slate-900">
          Pharma Registration
        </h1>

        <p className="mt-4 text-xl text-slate-700">
          Empowering Healthcare Companies with Regulatory Excellence
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700">
          With over{" "}
          <span className="font-bold text-sky-700">13 years</span> of
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
            className="rounded-xl bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:bg-white/90 transition-all"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="glass-card p-8 shadow-xl fade-up delay-1 bg-white/80">
        <p className="text-lg font-bold text-slate-900">
          Trusted Regulatory Support
        </p>

        <div className="mt-6 space-y-4">
          {[
            "Establishment Licensing",
            "Logistics Services",
            "Product Registration with the Food and Drug Authority",
          ].map((x) => (
            <div
              key={x}
              className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/60 p-4 transition-all hover:translate-x-2"
            >
              <ShieldCheck className="h-5 w-5 text-sky-600" />
              <span className="text-sm font-medium text-slate-700">
                {x}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 fade-up">
          Our Core Services
        </h2>
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
              <ul className="text-base text-slate-500 space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-white/50 py-20 border-y border-white/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div className="flex gap-6 fade-up">
            <div className="glass-icon bg-sky-100 text-sky-700 shrink-0">
              <Target />
            </div>
            <div>
              <h3 className="text-xl font-bold">Mission</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Providing high-quality consultations enabling safe products to
                reach the market.
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
                To be the preferred global regulatory partner for healthcare
                industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
<section className="mx-auto max-w-6xl px-4 py-20">
  <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
    <div className="fade-up">
      <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700">
        <FileText className="h-4 w-4" />
        Blog
      </p>
      <h2 className="mt-4 text-3xl font-bold">Latest Articles</h2>
      <p className="mt-2 max-w-2xl text-slate-600 leading-7">
        Practical articles covering SFDA, compliance, GDP, labeling, and
        documentation—tailored for pharmaceuticals, medical devices, cosmetics,
        and supplements.
      </p>
    </div>

    <div className="fade-up">
      <Link
        href="/en/blog"
        className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-700 transition-all"
      >
        View All Articles <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {blogPosts.map((post, index) => (
      <article
        key={post.slug}
        className="glass-card glass-card-hover p-6 fade-up"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-slate-700">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-slate-600 leading-7">
          {post.excerpt}
        </p>

        <div className="mt-6">
          <Link
            href={`/en/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline"
          >
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    ))}
  </div>

  <div className="mt-12 rounded-3xl bg-sky-100/60 p-8 text-center">
    <h3 className="text-xl font-bold">Need help with your documentation?</h3>
    <p className="mt-2 text-sm text-slate-600 leading-7">
      Share your product category and current status—we’ll help you define a
      clear and compliant path forward.
    </p>
    <div className="mt-5">
      <Link
        href="/en/contact"
        className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
      >
        Contact Us
      </Link>
    </div>
  </div>
  </section>
</main>
  );
}
