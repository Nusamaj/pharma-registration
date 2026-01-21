import Link from "next/link";

const services = [
  {
    title: "الخدمات الدوائية",
    items: [
      "تقديم حلول لوجستية للشركات الدوائية",
      "ترخيص الشركات الدوائية لدى هيئة الغذاء والدواء",
      "تسجيل الأدوية البشرية",
      "إعداد إجراءات التشغيل القياسية (SOPs) ونظام الجودة والتدريب",
      "تقديم حلول لنظام RSD",
      "تقديم الاستشارات لضمان التطبيق الصحيح لممارسات التوزيع الجيد (GDP)",
      "تأسيس وتجهيز المستودعات الطبية",
    ],
  },
  {
    title: "الأجهزة الطبية",
    items: [
      "إعداد اتفاقية الممثل المعتمد والترخيص",
      "إعداد إجراءات التشغيل القياسية (SOPs) ونظام جودة متوافق مع معايير ISO",
      "ترخيص الشركات الطبية",
      "إعداد ومراجعة ملفات تسجيل الأجهزة الطبية",
      "تسجيل الأجهزة الطبية (MDMA)",
      "طلبات فسح استيراد الأجهزة الطبية",
      "حلول لوجستية لشركات الأجهزة الطبية",
    ],
  },
  {
    title: "مستحضرات التجميل والعناية الشخصية",
    items: [
      "ترخيص شركات مستحضرات التجميل",
      "إعداد ومراجعة وترجمة ملفات/تصاميم مستحضرات التجميل والتأكد من توافقها مع متطلبات الهيئة",
      "تسجيل منتجات مستحضرات التجميل",
      "طلبات فسح الاستيراد وإصدار شهادات المطابقة",
      "حلول لوجستية لشركات مستحضرات التجميل",
    ],
  },
  {
    title: "الأغذية والمكملات الغذائية",
    items: [
      "تسجيل الأغذية والمكملات الغذائية",
      "تقديم طلبات الإشعار المسبق للاستيراد",
      "حلول لوجستية لشركات الأغذية",
    ],
  },
];

const values = [
  {
    title: "التميّز",
    text: "نلتزم بتقديم خدمات تنظيمية بأعلى معايير الجودة والدقة.",
  },
  {
    title: "النزاهة",
    text: "نعمل بشفافية وصدق والتزام أخلاقي في جميع تعاملاتنا.",
  },
  {
    title: "التعاون",
    text: "نؤمن بالشراكات الفعّالة والعمل بروح الفريق مع العملاء والجهات التنظيمية.",
  },
  {
    title: "الابتكار",
    text: "نواكب التغيّرات التنظيمية وتطورات السوق بحلول عملية ومبتكرة.",
  },
  {
    title: "تركيز العميل",
    text: "نضع العميل في قلب عملنا عبر إرشاد مخصص ودعم في كل خطوة.",
  },
];

export default function ArHomePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                الشؤون التنظيمية • السوق السعودي
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                فارما ريجستريشن
              </h1>

              <p className="mt-4 text-lg text-slate-600 md:text-xl">
                نُمكّن الشركات الدوائية بحلول تنظيمية وامتثال احترافي
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                بخبرة تتجاوز <span className="font-semibold">13 عامًا</span> في
                السوق السعودي، نقدم خدمات تنظيمية واستشارية دقيقة تضمن دخولًا
                واثقًا ومتوافقًا مع الأنظمة، مع تبسيط الإجراءات لتوفير الوقت
                والجهد.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ar/contact"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  تواصل معنا
                </Link>
                <Link
                  href="/ar/services"
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50"
                >
                  خدماتنا
                </Link>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-medium">دعم تنظيمي موثوق</p>
                <p className="mt-2 text-sm text-slate-600 leading-7">
                  دعم متكامل للامتثال وإعداد الملفات للشركات الدوائية، والأجهزة
                  الطبية، ومستحضرات التجميل، والأغذية.
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    "ملفات ومتطلبات متوافقة مع SFDA",
                    "تبسيط الإجراءات وتسريع العمل",
                    "دعم الجاهزية التشغيلية والجودة",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                    >
                      <span className="text-slate-700">{x}</span>
                      <span className="text-slate-400">✓</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                (لاحقًا نبدّل هذا القسم بصورة/هوية بصرية حسب شعاركم)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">من نحن</h2>
            <p className="mt-4 text-slate-600 leading-7">
              تأسست فارما ريجستريشن على خبرة طويلة في الشؤون التنظيمية داخل
              المملكة، ونفخر بتقديم خدمات تنظيمية واستشارية دقيقة مصممة وفق
              احتياجات عملائنا. عبر تفويضنا بمتطلباتكم التنظيمية، نساعدكم على
              تبسيط الإجراءات وتوفير الوقت والجهد، بما يتيح لكم التركيز على
              التسويق والنمو وزيادة المبيعات.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium">ماذا نقدم لكم؟</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 leading-7">
              <li>• مسارات تنظيمية واضحة متوافقة مع متطلبات SFDA</li>
              <li>• إعداد ومراجعة ملفات التسجيل بدقة</li>
              <li>• دعم عملي لتحسين الامتثال والجاهزية التشغيلية</li>
              <li>• تواصل سريع ودعم يركز على العميل</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">الرؤية</h3>
            <p className="mt-2 text-slate-600 leading-7">
              أن نكون الشريك المفضل للشركات الدوائية وشركات الأجهزة الطبية
              الباحثة عن خبرة تنظيمية وإرشاد موثوق، مع التوسع المستمر في الخدمات
              والنطاق.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">الرسالة</h3>
            <p className="mt-2 text-slate-600 leading-7">
              تقديم استشارات شؤون تنظيمية عالية الجودة للشركات الدوائية
              ومستحضرات التجميل والأجهزة الطبية، بما يمكّنها من طرح منتجات آمنة
              وفعّالة بكفاءة، مع تحقيق الامتثال التنظيمي والتميز التشغيلي.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold">القيم</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-slate-50 p-4">
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
      <section className="border-t border-slate-200 bg-slate-50">
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
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold">{s.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 leading-7">
                  {s.items.slice(0, 4).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href="/ar/services"
                    className="text-sm font-medium text-slate-900 hover:underline"
                  >
                    المزيد →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">المدونة</h2>
          <Link
            href="/ar/blog"
            className="text-sm font-medium text-slate-700 hover:underline"
          >
            زيارة المدونة
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs text-slate-500">تنظيمي • 5 دقائق</p>
              <p className="mt-2 font-medium">عنوان مقال تجريبي {i}</p>
              <p className="mt-2 text-sm text-slate-600 leading-7">
                هذا نص تجريبي. الخطوة القادمة سنربط مقالاتك الفعلية.
              </p>
              <div className="mt-4">
                <Link
                  href="/ar/blog"
                  className="text-sm font-medium text-slate-900 hover:underline"
                >
                  اقرأ المزيد →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <h2 className="text-2xl font-semibold">
              هل ترغب بدعم تنظيمي لمنتجاتك؟
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600 leading-7">
              شاركنا معلومات شركتك وفئة المنتج، وسنقترح أفضل مسار ومتطلبات
              التسجيل والملفات اللازمة.
            </p>
            <div className="mt-6">
              <Link
                href="/ar/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500 leading-6">
            تنويه: محتوى الموقع لغرض المعلومات العامة ولا يُعد بديلًا عن
            الإرشادات الرسمية الصادرة عن هيئة الغذاء والدواء.
          </p>
        </div>
      </section>
    </main>
  );
}
