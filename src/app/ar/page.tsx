import Link from "next/link";
import {
  Pill,
  Stethoscope,
  Sparkles,
  Apple,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "الخدمات الدوائية",
    icon: Pill,
    items: [
      "تقديم حلول لوجستية للشركات الدوائية",
      "ترخيص الشركات الدوائية لدى هيئة الغذاء والدواء",
      "تسجيل الأدوية البشرية",
      "إعداد إجراءات التشغيل القياسية (SOPs)",
    ],
  },
  {
    title: "الأجهزة الطبية",
    icon: Stethoscope,
    items: [
      "ترخيص الشركات الطبية",
      "إعداد ومراجعة ملفات تسجيل الأجهزة الطبية",
      "تسجيل الأجهزة الطبية (MDMA)",
      "طلبات فسح الاستيراد",
    ],
  },
  {
    title: "مستحضرات التجميل",
    icon: Sparkles,
    items: [
      "ترخيص شركات مستحضرات التجميل",
      "مراجعة الملصقات والملفات",
      "تسجيل منتجات مستحضرات التجميل",
      "طلبات فسح الاستيراد",
    ],
  },
  {
    title: "الأغذية والمكملات",
    icon: Apple,
    items: [
      "تسجيل الأغذية والمكملات الغذائية",
      "طلبات الإشعار المسبق للاستيراد",
      "حلول لوجستية لشركات الأغذية",
    ],
  },
];

const values = [
  {
    title: "التميّز",
    text: "نلتزم بتقديم خدمات تنظيمية بأعلى معايير الجودة.",
  },
  {
    title: "النزاهة",
    text: "نعمل بشفافية وصدق والتزام أخلاقي.",
  },
  {
    title: "التعاون",
    text: "نؤمن بالشراكات الفعالة والعمل بروح الفريق.",
  },
  {
    title: "الابتكار",
    text: "نقدم حلولًا عملية مواكبة للتغيّرات التنظيمية.",
  },
  {
    title: "تركيز العميل",
    text: "نضع العميل في قلب كل خطوة تنظيمية.",
  },
];

export default function ArHomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900"
    >
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="fade-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs text-slate-600">
                الشؤون التنظيمية • السوق السعودي
              </p>

              <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
                فارما ريجستريشن
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                حلول تنظيمية موثوقة لدخول السوق السعودي بثقة
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                بخبرة تتجاوز <span className="font-semibold">13 عامًا</span>،
                نساعد الشركات على تحقيق الامتثال التنظيمي وتبسيط الإجراءات.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ar/contact"
                  className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  تواصل معنا
                </Link>
                <Link
                  href="/ar/services"
                  className="rounded-xl border border-white/40 bg-white/60 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-white/70"
                >
                  خدماتنا
                </Link>
              </div>
            </div>

            {/* HERO GLASS CARD */}
            <div className="glass-card glass-card-hover p-6 fade-up">
              <p className="text-sm font-semibold">دعم تنظيمي شامل</p>
              <p className="mt-2 text-sm text-slate-600 leading-7">
                دعم متكامل للشركات الدوائية، الأجهزة الطبية، مستحضرات التجميل،
                والأغذية.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "متطلبات متوافقة مع SFDA",
                  "تبسيط وتسريع الإجراءات",
                  "جاهزية تشغيلية وجودة",
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
            <h2 className="text-2xl font-semibold">من نحن</h2>
            <p className="mt-4 text-slate-600 leading-7">
              نقدم خدمات تنظيمية واستشارية دقيقة داخل المملكة العربية السعودية،
              تساعد الشركات على التركيز على النمو مع ضمان الامتثال الكامل.
            </p>
          </div>

          <div className="glass-card glass-card-hover p-6 fade-up">
            <p className="text-sm font-semibold">ماذا نقدم؟</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-7">
              <li>• مسارات تنظيمية واضحة</li>
              <li>• إعداد ملفات دقيقة ومتوافقة</li>
              <li>• دعم تشغيلي وجودة</li>
              <li>• تواصل سريع ومباشر</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-2xl font-semibold fade-up">قيمنا</h2>
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
            <h2 className="text-2xl font-semibold">الخدمات</h2>
            <Link
              href="/ar/services"
              className="text-sm font-medium text-slate-700 hover:underline"
            >
              عرض الكل
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
                        href="/ar/services"
                        className="mt-3 inline-block text-sm font-medium text-sky-700 hover:underline"
                      >
                        المزيد →
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
              تحتاج مسار تنظيمي واضح؟
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-7">
              شاركنا تفاصيل شركتك وفئة المنتج، وسنقترح أفضل مسار تنظيمي لك.
            </p>
            <div className="mt-6">
              <Link
                href="/ar/contact"
                className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
