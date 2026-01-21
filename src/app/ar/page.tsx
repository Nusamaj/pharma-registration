import Link from "next/link";
import {
  Pill,
  Stethoscope,
  Sparkles,
  Apple,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    title: "الخدمات الدوائية",
    icon: Pill,
    items: [
      "تقديم حلول لوجستية للشركات الدوائية",
      "ترخيص الشركات لدى هيئة الغذاء والدواء",
      "تسجيل الأدوية البشرية",
      "إعداد إجراءات التشغيل القياسية (SOPs)",
    ],
  },
  {
    title: "الأجهزة الطبية",
    icon: Stethoscope,
    items: [
      "ترخيص الشركات الطبية",
      "إعداد ومراجعة ملفات تسجيل الأجهزة",
      "تسجيل الأجهزة الطبية (MDMA)",
      "طلبات فسح الاستيراد",
    ],
  },
  {
    title: "مستحضرات التجميل",
    icon: Sparkles,
    items: [
      "ترخيص شركات مستحضرات التجميل",
      "مراجعة الملصقات والملفات التنظيمية",
      "تسجيل منتجات التجميل",
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
  { title: "التميّز", text: "نلتزم بتقديم خدمات تنظيمية بأعلى معايير الجودة والدقة." },
  { title: "النزاهة", text: "نعمل بشفافية وصدق والتزام أخلاقي في كل تعاملاتنا." },
  { title: "التعاون", text: "نؤمن بالشراكات الفعالة مع عملائنا والجهات التنظيمية." },
  { title: "الابتكار", text: "نقدم حلولًا عملية مواكبة للتغيّرات في الأنظمة والقوانين." },
  { title: "تركيز العميل", text: "نضع احتياجات العميل في قلب كل خطوة نقوم بها." },
];

export default function ArHomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-blue-50 text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-sky-700">
                الشؤون التنظيمية • السوق السعودي
              </p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl text-slate-900">
                فارما ريجستريشن
              </h1>

              <p className="mt-4 text-xl text-slate-600 font-medium">
                حلول تنظيمية موثوقة لدخول السوق السعودي بثقة
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
                بخبرة تتجاوز <span className="font-bold text-sky-600">13 عامًا</span>، 
                نحن شريككم الاستراتيجي لضمان الامتثال لمتطلبات هيئة الغذاء والدواء (SFDA) وتسريع دخول منتجاتكم للسوق.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/ar/contact"
                  className="rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all"
                >
                  ابدأ الآن
                </Link>
                <Link
                  href="/ar/services"
                  className="glass-card px-6 py-3.5 text-sm font-semibold hover:bg-white/80 transition-all"
                >
                  استعرض خدماتنا
                </Link>
              </div>
            </div>

            {/* HERO FEATURE CARD */}
            <div className="glass-card p-8 shadow-xl">
              <p className="text-lg font-bold text-slate-800">دعم تنظيمي شامل</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                نغطي كافة القطاعات الحيوية لضمان استمرارية أعمالكم ونموها.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "امتثال كامل لمتطلبات SFDA",
                  "تقليل زمن التسجيل والاعتماد",
                  "دعم فني وتشغيلي مستمر",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/40 p-4 transition-transform hover:translate-x-[-5px]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">خدماتنا التخصصية</h2>
            <p className="mt-2 text-slate-500">نقدم حلولاً متكاملة مخصصة لكل قطاع</p>
          </div>
          <Link href="/ar/services" className="hidden md:flex items-center gap-2 text-sky-600 font-semibold hover:underline">
            عرض كافة الخدمات <ArrowLeft size={18} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="glass-card glass-card-hover p-8 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="glass-icon text-sky-600 group-hover:scale-110 transition-transform">
                  <service.icon size={26} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{service.title}</h3>
              </div>
              <ul className="grid gap-3 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/ar/services" className="text-sm font-bold text-sky-600 flex items-center gap-1 hover:gap-2 transition-all">
                المزيد عن {service.title} <ArrowLeft size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-white/50 py-20 backdrop-blur-sm border-y border-white/40">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">القيم التي تحركنا</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-center">
            {values.map((v) => (
              <div key={v.title} className="glass-card p-6 hover:shadow-lg transition-shadow">
                <p className="font-bold text-sky-700 text-lg mb-2">{v.title}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="glass-card bg-sky-600/5 border-sky-200/50 p-10 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900">هل تبحث عن استشارة تنظيمية؟</h3>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
              فريقنا جاهز لتحليل منتجاتكم واقتراح أفضل مسار لتسجيلها في الهيئة العامة للغذاء والدواء.
            </p>
            <div className="mt-10">
              <Link
                href="/ar/contact"
                className="inline-block rounded-xl bg-sky-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-sky-200 hover:bg-sky-700 transition-all transform hover:scale-105"
              >
                تواصل معنا اليوم
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}