import Link from "next/link";

const content: Record<
  string,
  { title: string; date: string; category: string; body: string[] }
> = {
  "sfda-registration-overview": {
    title: "نظرة عامة على تسجيل المنتجات لدى SFDA: ماذا تحتاج؟",
    date: "2026-01-21",
    category: "تنظيمي",
    body: [
      "النجاح في دخول السوق يبدأ بخطة واضحة للملفات والمتطلبات والتنفيذ.",
      "أغلب التأخير يحدث بسبب نقص ملفات، أو عدم اتساق المعلومات، أو مشاكل في الملصقات.",
      "ابدأ بقائمة تدقيق (Checklist) ثم راجع الامتثال قبل التقديم لتقليل الملاحظات.",
      "يمكننا لاحقًا تحويل هذا المقال لقائمة تدقيق جاهزة للطباعة.",
    ],
  },
  "gdp-basics": {
    title: "أساسيات ممارسات التوزيع الجيد (GDP)",
    date: "2026-01-18",
    category: "جودة",
    body: [
      "تركّز GDP على الحفاظ على جودة المنتج خلال التخزين والتوزيع.",
      "من الثغرات الشائعة: نقص SOPs، مشاكل خرائط الحرارة، وضعف إدارة الانحرافات.",
      "ابدأ برسم العملية (Process Map) ثم طابق الإجراءات والتدريب مع الواقع.",
    ],
  },
  "cosmetics-labeling": {
    title: "قائمة تدقيق لوسم مستحضرات التجميل (متوافق مع SFDA)",
    date: "2026-01-15",
    category: "تجميل",
    body: [
      "مراجعة الملصقات يجب أن تكون مبكرًا قبل الطباعة وقبل الاستيراد.",
      "انتبه للادعاءات، وترتيب المكونات، والمعلومات المطلوبة بالعربي والإنجليزي.",
      "جهّز قائمة تدقيق لكل منتج واحتفظ بملفات الإثبات.",
    ],
  },
};

export default function ArBlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = content[params.slug];

  if (!post) {
    return (
      <main dir="rtl" className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-semibold">المقال غير موجود</h1>
        <Link
          className="mt-4 inline-block text-sky-700 hover:underline"
          href="/ar/blog"
        >
          الرجوع للمدونة
        </Link>
      </main>
    );
  }

  return (
    <main dir="rtl" className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <div className="fade-up">
        <Link className="text-sm text-sky-700 hover:underline" href="/ar/blog">
          الرجوع للمدونة →
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-slate-700">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
          {post.title}
        </h1>

        <article className="mt-6 space-y-4 text-slate-700 leading-8">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="mt-10 rounded-3xl bg-sky-100/70 p-8 text-center">
          <h2 className="text-xl font-semibold">تحتاج دعم في إعداد الملفات؟</h2>
          <p className="mt-2 text-sm text-slate-600 leading-7">
            تواصل معنا وشارك فئة المنتج ووضعك الحالي.
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
      </div>
    </main>
  );
}
