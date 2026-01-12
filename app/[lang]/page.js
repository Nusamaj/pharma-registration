import Link from "next/link";

export default function Home({ params }) {
  const lang = params.lang === "ar" ? "ar" : "en";

  const nav = {
    booking: lang === "ar" ? "احجز الآن" : "Book Now",
    solutions: lang === "ar" ? "الحلول" : "Our Solutions",
  };

  const missionVision = [
    {
      arTitle: "المهمة",
      enTitle: "Mission",
      arText:
        "مهمتنا في فارما ريجستريشن هي تقديم استشارات عالية الجودة في الشؤون التنظيمية لشركات الأدوية ومستحضرات التجميل والأجهزة الطبية، بما يمكّنها من طرح منتجات آمنة وفعّالة في الأسواق بكفاءة. نحن ملتزمون بدعم عملائنا في تحقيق الامتثال التنظيمي والتميّز التشغيلي.",
      enText:
        "Our mission at Pharma Registration is to provide high-quality regulatory affairs consultations to pharmaceutical, cosmetic, and medical device companies—enabling them to bring safe and effective products to market efficiently. We are dedicated to supporting our clients in achieving regulatory compliance and operational excellence.",
    },
    {
      arTitle: "الرؤية",
      enTitle: "Vision",
      arText:
        "رؤيتنا في فارما ريجستريشن هي أن نكون الشريك المفضل لشركات الأدوية والأجهزة الطبية التي تسعى إلى الخبرة والتوجيه في الشؤون التنظيمية. نطمح إلى التوسع المستمر في خدماتنا ونطاق عملنا العالمي، مع الحفاظ على ريادتنا في ابتكار وتطوير ممارسات الشؤون التنظيمية.",
      enText:
        "At Pharma Registration, our vision is to be the preferred partner for pharmaceutical and medical device companies seeking regulatory expertise and guidance. We aim to continuously expand our services and global reach, remaining at the forefront of regulatory affairs innovation.",
    },
  ];

  const values = [
    {
      title: { en: "Excellence", ar: "التميّز" },
      text: {
        en: "We are committed to delivering top-notch regulatory affairs services that meet the highest standards of quality and accuracy.",
        ar: "نلتزم بتقديم خدمات شؤون تنظيمية عالية الجودة تلبي أعلى معايير الدقة والاحترافية.",
      },
    },
    {
      title: { en: "Integrity", ar: "النزاهة" },
      text: {
        en: "We operate with honesty, transparency, and ethical conduct in all our interactions and decision-making processes.",
        ar: "نعمل بصدق وشفافية والتزام أخلاقي في جميع تعاملاتنا وقراراتنا.",
      },
    },
    {
      title: { en: "Collaboration", ar: "التعاون" },
      text: {
        en: "We value collaboration and teamwork, both internally within our organization and externally with our clients and regulatory authorities.",
        ar: "نؤمن بأهمية التعاون والعمل الجماعي داخليًا ومع عملائنا والجهات التنظيمية.",
      },
    },
    {
      title: { en: "Innovation", ar: "الابتكار" },
      text: {
        en: "We strive to stay ahead of industry trends and regulatory changes, offering innovative solutions to address our clients' ever-evolving needs.",
        ar: "نسعى للبقاء في مقدمة التطورات الصناعية والتغيرات التنظيمية من خلال حلول مبتكرة.",
      },
    },
    {
      title: { en: "Client Focus", ar: "التركيز على العميل" },
      text: {
        en: "Our clients are at the center of everything we do. We listen to their needs, provide personalized guidance, and support them every step of the way.",
        ar: "عملاؤنا في صميم كل ما نقوم به، نصغي لاحتياجاتهم ونقدّم لهم دعمًا وإرشادًا مخصصًا في كل مرحلة.",
      },
    },
  ];

  return (
    <div className="grid gap-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[420px]">
        {/* Background Image */}
        <img
          src="/hero-image.png"
          alt="Pharma background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-blue-900/60" />

        {/* Content */}
        <div
          className={`relative z-10 p-8 md:p-14 min-h-[420px] flex flex-col justify-center max-w-3xl ${
            lang === "ar" ? "text-right" : ""
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
            {lang === "ar"
              ? "مرحبًا بكم في فارما ريجستريشن"
              : "Welcome to Pharma Registration"}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            {lang === "ar"
              ? "تمكين شركات الأدوية من خلال حلول تنظيمية متكاملة"
              : "Empowering Pharmaceutical Companies with Regulatory Solutions"}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`/${lang}/booking`}
              className="rounded-xl bg-white px-7 py-3 text-slate-900 font-medium hover:opacity-95"
            >
              {nav.booking}
            </Link>

            <Link
              href={`/${lang}/solutions`}
              className="rounded-xl border border-white/30 px-7 py-3 text-white hover:bg-white/10"
            >
              {nav.solutions}
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="grid gap-4 md:grid-cols-2">
        {missionVision.map((card, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
          >
            <div className="text-lg font-semibold text-orange-400">
              {lang === "ar" ? card.arTitle : card.enTitle}
            </div>

            <p
              className={`mt-3 text-sm leading-relaxed text-white/70 ${
                lang === "ar" ? "text-right" : ""
              }`}
            >
              {lang === "ar" ? card.arText : card.enText}
            </p>
          </div>
        ))}
      </section>

      {/* ABOUT US + VALUES */}
      <section className="grid gap-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-400 mb-4">
            {lang === "ar" ? "من نحن" : "About Us"}
          </h2>

          <p
            className={`text-white/75 leading-relaxed text-base md:text-lg ${
              lang === "ar" ? "text-right" : ""
            }`}
          >
            {lang === "ar"
              ? "تستند فارما ريجستريشن إلى أكثر من 13 عامًا من الخبرة في السوق السعودي..."
              : "Pharma Registration building on over 13 years of experience in the Saudi market..."}
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
            {lang === "ar" ? "القيم" : "Values"}
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold text-cyan-400 mb-2">
                  {lang === "ar" ? item.title.ar : item.title.en}
                </div>

                <p
                  className={`text-sm text-white/70 leading-relaxed ${
                    lang === "ar" ? "text-right" : ""
                  }`}
                >
                  {lang === "ar" ? item.text.ar : item.text.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
