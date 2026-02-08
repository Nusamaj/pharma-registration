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

// ================= TYPES =================
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

// ================= DATA =================
const services: ServiceItem[] = [
  {
    title: "الأدوية",
    icon: Pill,
    items: [
      "حلول لوجستية لشركات الأدوية",
      "ترخيص الشركات الدوائية لدى هيئة الغذاء والدواء",
      "تسجيل المستحضرات الطبية البشرية",
      "إعداد إجراءات التشغيل القياسية (SOPs) وأنظمة الجودة والتدريب",
    ],
  },
  {
    title: "الأجهزة الطبية",
    icon: Stethoscope,
    items: [
      "اتفاقيات الممثل المعتمد والترخيص",
      "إعداد SOPs وأنظمة جودة متوافقة مع معايير ISO",
      "تسجيل الأجهزة الطبية (MDMA)",
      "طلبات فسح الاستيراد",
    ],
  },
  {
    title: "مستحضرات التجميل والعناية الشخصية",
    icon: Sparkles,
    items: [
      "ترخيص شركات مستحضرات التجميل",
      "مراجعة وترجمة ملفات التجميل حسب متطلبات هيئة الغذاء والدواء",
      "تسجيل منتجات التجميل",
      "فسح الاستيراد وشهادات المطابقة",
    ],
  },
  {
    title: "الأغذية والمكملات الغذائية",
    icon: Apple,
    items: [
      "تسجيل المنتجات الغذائية والمكملات الغذائية",
      "الإخطار المسبق لطلبات الاستيراد",
      "حلول لوجستية لشركات الأغذية",
    ],
  },
];

const blogPosts: BlogPost[] = [
  {
    slug: "sfda-registration-overview",
    title: "نظرة عامة على تسجيل هيئة الغذاء والدواء: ماذا تحتاج للتحضير؟",
    date: "2026-01-21",
    category: "تشريعات",
    excerpt:
      "دليل عملي للمستندات المطلوبة، وأسباب التأخير الشائعة، وكيفية تقليل ملاحظات الهيئة قبل التقديم.",
  },
  {
    slug: "gdp-basics",
    title: "أساسيات GDP لتوزيع الأدوية",
    date: "2026-01-18",
    category: "الجودة",
    excerpt:
      "ما الذي تتطلبه ممارسات التوزيع الجيد فعليًا؟ SOPs، خرائط الحرارة، الانحرافات، وتدريب الموظفين.",
  },
  {
    slug: "cosmetics-labeling",
    title: "قائمة تدقيق لبطاقات مستحضرات التجميل (متوافقة مع الهيئة)",
    date: "2026-01-15",
    category: "مستحضرات التجميل",
    excerpt:
      "قائمة سريعة لمراجعة الادعاءات، ترتيب المكونات، ومتطلبات الملصقات ثنائية اللغة قبل الطباعة.",
  },
];

// ================= PAGE =================
export default function ArHomePage() {
  return (
    <main className="min-h-screen text-slate-900" dir="rtl">

      {/* ================= HERO SECTION ================= */}
      <section className="hero border-b border-white/40">
        <div className="hero-content mx-auto max-w-6xl px-4 py-16 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">

            {/* RIGHT */}
            <div className="fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700">
                الشؤون التنظيمية • السوق السعودي
              </p>

              <h1 className="mt-4 text-4xl font-bold md:text-6xl text-slate-900">
                تسجيل المنتجات الدوائية
              </h1>

              <p className="mt-4 text-xl text-slate-700">
                نمكّن شركات الرعاية الصحية بالامتثال والتنظيم باحترافية
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700">
                بخبرة تزيد عن{" "}
                <span className="font-bold text-sky-700">13 سنة</span>{" "}
                في السوق السعودي، نقدم خدمات تنظيمية واستشارية دقيقة.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  href="/ar/contact"
                  className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-700 transition-all"
                >
                  تواصل معنا
                </Link>

                <Link
                  href="/ar/services"
                  className="rounded-xl bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:bg-white/90 transition-all"
                >
                  خدماتنا
                </Link>
              </div>
            </div>

            {/* LEFT CARD */}
            <div className="glass-card p-8 shadow-xl fade-up delay-1 bg-white/80">
              <p className="text-lg font-bold text-slate-900">
                دعم تنظيمي موثوق
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "ترخيص المنشآت",
                  "الخدمات اللوجستية",
                  "تسجيل المنتجات لدى هيئة الغذاء والدواء",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/60 p-4 transition-all hover:-translate-x-2"
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
          خدماتنا الأساسية
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
              <h3 className="text-xl font-bold">رسالتنا</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                تقديم استشارات عالية الجودة تُمكّن وصول المنتجات الآمنة إلى السوق.
              </p>
            </div>
          </div>

          <div className="flex gap-6 fade-up delay-1">
            <div className="glass-icon bg-sky-100 text-sky-700 shrink-0">
              <Eye />
            </div>
            <div>
              <h3 className="text-xl font-bold">رؤيتنا</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                أن نكون الشريك التنظيمي المفضل عالميًا لقطاعات الرعاية الصحية.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

          <div className="fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700">
              <FileText className="h-4 w-4" />
              المدونة
            </p>
            <h2 className="mt-4 text-3xl font-bold">أحدث المقالات</h2>
            <p className="mt-2 max-w-2xl text-slate-600 leading-7">
              مقالات عملية تغطي متطلبات الهيئة، الجودة، GDP، بطاقات المنتجات،
              والملفات التنظيمية.
            </p>
          </div>

          <div className="fade-up">
            <Link
              href="/ar/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-700 transition-all"
            >
              عرض جميع المقالات <ArrowLeft className="h-4 w-4" />
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
                  href={`/ar/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:underline"
                >
                  اقرأ المزيد <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-sky-100/60 p-8 text-center">
          <h3 className="text-xl font-bold">تحتاج مساعدة في ملفاتك التنظيمية؟</h3>
          <p className="mt-2 text-sm text-slate-600 leading-7">
            شاركنا فئة المنتج ووضعه الحالي — وسنساعدك على تحديد المسار الأنسب
            والمتوافق.
          </p>
          <div className="mt-5">
            <Link
              href="/ar/contact"
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
