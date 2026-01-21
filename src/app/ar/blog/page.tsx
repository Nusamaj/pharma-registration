import Link from "next/link";

const posts = [
  {
    slug: "sfda-registration-overview",
    title: "نظرة عامة على تسجيل المنتجات لدى SFDA: ماذا تحتاج؟",
    excerpt:
      "ملخص عملي للخطوات الأساسية وأهم الملفات المطلوبة لضمان دخول متوافق للسوق السعودي.",
    category: "تنظيمي",
    readTime: "5 دقائق",
    date: "2026-01-21",
  },
  {
    slug: "gdp-basics",
    title: "أساسيات ممارسات التوزيع الجيد (GDP)",
    excerpt:
      "نقاط مهمة لتطبيق GDP وتجنب الثغرات الشائعة في الامتثال أثناء التخزين والتوزيع.",
    category: "جودة",
    readTime: "6 دقائق",
    date: "2026-01-18",
  },
  {
    slug: "cosmetics-labeling",
    title: "قائمة تدقيق لوسم مستحضرات التجميل (متوافق مع SFDA)",
    excerpt:
      "قائمة واضحة لمراجعة الملصقات والادعاءات قبل التقديم والاستيراد.",
    category: "تجميل",
    readTime: "4 دقائق",
    date: "2026-01-15",
  },
];

export default function ArBlogPage() {
  return (
    <main dir="rtl" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <section className="text-center fade-up">
        <h1 className="text-3xl font-semibold md:text-4xl">المدونة</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 leading-7">
          مقالات عملية في الشؤون التنظيمية ومواضيع صيدلانية تساعدك مباشرة.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.map((p, idx) => (
          <Link
            key={p.slug}
            href={`/ar/blog/${p.slug}`}
            className={`card-soft rounded-3xl p-6 hover:shadow-md transition-shadow fade-up delay-${Math.min(
              idx,
              3
            )}`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-slate-700">
                {p.category}
              </span>
              <span>{p.readTime}</span>
            </div>

            <h2 className="mt-4 text-lg font-semibold leading-snug">
              {p.title}
            </h2>

            <p className="mt-2 text-sm text-slate-600 leading-7">
              {p.excerpt}
            </p>

            <div className="mt-5 text-xs text-slate-500">
              {p.date} • اقرأ المزيد ←
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
