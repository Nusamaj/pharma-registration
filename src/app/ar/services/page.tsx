import { Pill, Stethoscope, Sparkles, Apple, ChevronDown } from "lucide-react";

const data = [
  {
    icon: Pill,
    title: "القطاع الدوائي",
    desc: "دعم تنظيمي وتشغيلي شامل لشركات الأدوية الراغبة في دخول السوق السعودي.",
    items: [
      "تقديم حلول لوجستية لشركات الأدوية",
      "ترخيص شركات الأدوية لدى هيئة الغذاء والدواء",
      "تسجيل الأدوية البشرية",
      "إعداد إجراءات التشغيل القياسية (SOPs) ونظام الجودة والتدريب",
      "تقديم حلول لنظام التتبع RSD",
      "استشارات لضمان التطبيق الصحيح لممارسات التوزيع الجيد (GDP)",
      "تأسيس وتجهيز المستودعات الطبية",
    ],
  },
  {
    icon: Stethoscope,
    title: "الأجهزة الطبية",
    desc: "دعم كامل في التوثيق والترخيص والتسجيل عبر دورة حياة الجهاز الطبي.",
    items: [
      "إعداد اتفاقيات الممثل المعتمد وترخيصها",
      "إعداد إجراءات التشغيل ونظم الجودة المتوافقة مع معايير ISO",
      "ترخيص شركات الأجهزة الطبية",
      "إعداد ومراجعة ملفات تسجيل الأجهزة الطبية",
      "تسجيل الأجهزة الطبية (MDMA)",
      "طلبات فسح استيراد الأجهزة الطبية",
      "تقديم حلول لوجستية لشركات الأجهزة الطبية",
    ],
  },
  {
    icon: Sparkles,
    title: "مستحضرات التجميل والعناية الشخصية",
    desc: "إعداد ملفات مستحضرات التجميل ومراجعة البطاقات التعريفية والتسجيل وفق متطلبات هيئة الغذاء والدواء.",
    items: [
      "ترخيص شركات مستحضرات التجميل",
      "إعداد ومراجعة وترجمة ملفات مستحضرات التجميل وضمان مطابقتها لمتطلبات الهيئة",
      "تسجيل منتجات التجميل",
      "طلبات فسح الاستيراد وشهادات المطابقة",
      "تقديم حلول لوجستية لشركات مستحضرات التجميل",
    ],
  },
  {
    icon: Apple,
    title: "الأغذية والمكملات الغذائية",
    desc: "دعم في تسجيل المنتجات الغذائية والمكملات ومتطلبات الاستيراد.",
    items: [
      "تسجيل الأغذية والمكملات الغذائية",
      "تقديم طلبات الإخطار المسبق للاستيراد",
      "تقديم حلول لوجستية لشركات الأغذية",
    ],
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "خدمات الشؤون التنظيمية وتسجيل المنتجات لدى هيئة الغذاء والدواء السعودية",
  description:
    "نقدّم خدمات متكاملة في الشؤون التنظيمية وتسجيل الأدوية، الأجهزة الطبية، مستحضرات التجميل، والأغذية والمكملات الغذائية لدى هيئة الغذاء والدواء السعودية (SFDA)، مع دعم شامل في الترخيص والامتثال والجودة.",

  keywords: [
    "خدمات الشؤون التنظيمية",
    "تسجيل المنتجات لدى هيئة الغذاء والدواء",
    "تسجيل الأدوية في السعودية",
    "تسجيل الأجهزة الطبية",
    "تسجيل مستحضرات التجميل",
    "تسجيل الأغذية والمكملات الغذائية",
    "تسجيل المنتجات الصحية",
    "استشارات تنظيمية",
    "ترخيص شركات الأدوية",
    "ترخيص شركات الأجهزة الطبية",
    "ممارسات التوزيع الجيد GDP",
    "نظام التتبع الدوائي RSD",
    "تجهيز المستودعات الطبية",
    "الامتثال لمتطلبات SFDA",
  ],

  alternates: {
    canonical: "https://www.pharmaregistration.com/ar/services",
    languages: {
      ar: "https://www.pharmaregistration.com/ar/services",
      en: "https://www.pharmaregistration.com/en/services",
    },
  },

  openGraph: {
    title:
      "خدمات الشؤون التنظيمية وتسجيل المنتجات الصحية | Pharma Registration",
    description:
      "خدمات احترافية في الشؤون التنظيمية وتسجيل المنتجات الصحية لدى هيئة الغذاء والدواء السعودية (SFDA).",
    url: "https://www.pharmaregistration.com/ar/services",
    siteName: "Pharma Registration",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://www.pharmaregistration.com/images/hero-ar.png",
        width: 1200,
        height: 630,
        alt: "خدمات الشؤون التنظيمية وتسجيل المنتجات لدى هيئة الغذاء والدواء السعودية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "خدمات الشؤون التنظيمية وتسجيل المنتجات الصحية",
    description:
      "دعم تنظيمي شامل لتسجيل الأدوية والأجهزة الطبية ومستحضرات التجميل والأغذية في السعودية.",
    images: ["https://www.pharmaregistration.com/images/hero-ar.png"],
  },
};

export default function ArServicesPage() {
  return (
    <main dir="rtl" className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-right">
      {/* Header */}
      <section className="text-center fade-up">
        <h1 className="text-3xl font-semibold md:text-4xl">خدماتنا</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          خدمات شاملة في الشؤون التنظيمية والاستشارات، مصممة خصيصًا حسب فئة منتجك.
        </p>
      </section>

      {/* Cards Accordion */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {data.map((s, idx) => {
          const Icon = s.icon;
          return (
            <details
              key={s.title}
              className={`card-soft group rounded-3xl p-6 fade-up delay-${Math.min(
                idx,
                3
              )}`}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start gap-4">
                  <div className="icon-badge mt-1">
                    <Icon className="h-5 w-5 text-sky-700" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold">{s.title}</h2>
                        <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                      </div>

                      <ChevronDown className="mt-1 h-5 w-5 text-slate-400 transition-transform group-open:rotate-180" />
                    </div>
                  </div>
                </div>
              </summary>

              <div className="mt-5">
                <div className="h-px w-full bg-sky-100" />
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-sky-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="mt-10 fade-up">
        <div className="rounded-3xl bg-sky-100/70 p-10 text-center">
          <h3 className="text-2xl font-semibold">هل تحتاج إلى مسار تنظيمي واضح؟</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            تواصل معنا وشاركنا تفاصيل شركتك وفئة المنتج، وسنرشدك خطوة بخطوة في المتطلبات والإجراءات.
          </p>
          <div className="mt-6">
            <a
              href="/ar/contact"
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
