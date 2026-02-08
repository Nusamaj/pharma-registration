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
  ArrowLeft,
} from "lucide-react";

interface ServiceItem {
  title: string;
  icon: LucideIcon;
  items: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const services: ServiceItem[] = [
  {
    title: "الأدوية البشرية",
    icon: Pill,
    items: [
      "تقديم حلول لوجستية للشركات الدوائية",
      "ترخيص الشركات الدوائية لدى هيئة الغذاء والدواء",
      "تسجيل الأدوية البشرية",
      "إعداد إجراءات العمل (SOPs) ونظام الجودة والتدريب",
    ],
  },
  {
    title: "الأجهزة الطبية",
    icon: Stethoscope,
    items: [
      "إعداد اتفاقية الممثل المعتمد والترخيص",
      "إعداد SOPs ونظام جودة متوافق مع معايير ISO",
      "تسجيل الأجهزة الطبية (MDMA)",
      "طلبات فسح الاستيراد",
    ],
  },
  {
    title: "التجميل والعناية الشخصية",
    icon: Sparkles,
    items: [
      "ترخيص شركات مستحضرات التجميل",
      "مراجعة/ترجمة ملفات التجميل وفق متطلبات SFDA",
      "تسجيل منتجات التجميل",
      "طلبات فسح الاستيراد وشهادات المطابقة",
    ],
  },
  {
    title: "الأغذية والمكملات",
    icon: Apple,
    items: [
      "تسجيل الأغذية والمكملات الغذائية",
      "تقديم طلبات الإشعار المسبق للاستيراد",
      "تقديم حلول لوجستية للشركات الغذائية",
    ],
  },
];

const blogPosts: BlogPost[] = [
  {
    slug: "sfda-registration-overview",
    title: "نظرة عامة على تسجيل المنتجات لدى SFDA: ماذا تحتاج؟",
    date: "2026-01-21",
    category: "تنظيمي",
    excerpt:
      "ملخّص عملي للملفات المطلوبة وأسباب التأخير الشائعة وكيف تقلّل الملاحظات قبل التقديم.",
  },
  {
    slug: "gdp-basics",
    title: "أساسيات ممارسات التوزيع الجيد (GDP)",
    date: "2026-01-18",
    category: "جودة",
    excerpt:
      "ما الذي تتطلبه GDP فعليًا في العمليات: SOPs، خرائط الحرارة، الانحرافات، والتدريب.",
  },
  {
    slug: "cosmetics-labeling",
    title: "قائمة تدقيق لوسم مستحضرات التجميل (متوافق مع SFDA)",
    date: "2026-01-15",
    category: "تجميل",
    excerpt:
      "قائمة سريعة لمراجعة الادعاءات وترتيب المكونات ومتطلبات الملصق بالعربي والإنجليزي.",
  },
];

export default function ArHomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen text-slate-900 text-base leading-relaxed"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="hero border-b border-white/40">
        <div className="hero-content mx-auto max-w-6xl px-4 py-16 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700">
                الشؤون التنظيمية • السوق السعودي
              </p>

              <h1 className="mt-4 text-4xl font-bold md:text-6xl">
                Pharma Registration
              </h1>

              <p className="mt-4 text-xl text-slate-700">
                نُمكّن شركات الرعاية الصحية بحلول تنظيمية احترافية
              </p>

              <p className="mt-6 max-w-xl text-slate-700">
                بخبرة تتجاوز{" "}
                <span className="font-bold text-sky-700">13 سنة</span> في السوق
                السعودي، نقدّم خدمات تنظيمية واستشارية دقيقة.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/ar/contact"
                  className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white"
                >
                  تواصل معنا
                </Link>
                <Link
                  href="/ar/services"
                  className="rounded-xl bg-white/70 px-6 py-3.5 text-sm font-semibold"
                >
                  خدماتنا
                </Link>
              </div>
            </div>

            <div className="glass-card p-8 shadow-xl bg-white/80">
              <p className="text-lg font-bold">دعم تنظيمي موثوق</p>
              <div className="mt-6 space-y-4">
                {[
                  "تراخيص المنشات",
                  "الخدمات اللوجستية",
                  "تسجيل المنتجات في هيئة الغذاء و الدواء",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-2xl border bg-white/60 p-4"
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

      {/* ================= SERVICES SECTION ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          خدماتنا الأساسية
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6"
            >
              <div className="glass-icon mb-4 text-sky-600">
                <service.icon size={22} />
              </div>

              <h3 className="font-bold text-lg mb-3">
                {service.title}
              </h3>

              <ul className="text-sm text-slate-500 space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-card p-6">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
