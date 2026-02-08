import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactArPage() {
  const cards = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      lines: ["bmajan@pharmaregistration.com"],
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      lines: ["+966 55 280 1987"],
    },
    {
      icon: MapPin,
      title: "الموقع",
      lines: ["المملكة العربية السعودية"],
    },
    {
      icon: Clock,
      title: "أوقات العمل",
      lines: ["الأحد – الخميس: 9:00 – 17:00"],
    },
  ];

  return (
    <main dir="rtl" className="mx-auto max-w-6xl px-4 py-12 text-right">
      {/* العنوان */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          تواصل معنا
        </h1>
        <p className="mt-3 mx-auto max-w-2xl text-slate-600 leading-7">
         أرسل تفاصيل المنتج المراد تسجيله لنقترح عليك المسار الأنسب مع جميع المتطلبات والتكاليف، سنرد عليك في أقرب وقت ممكن.
        </p>
      </section>

      {/* كروت المعلومات */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                <Icon className="h-5 w-5 text-sky-700" />
              </div>
              <p className="mt-4 font-semibold text-slate-900">{item.title}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-600 leading-7">
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-3xl bg-sky-900 p-10 text-center text-white">
          <h3 className="text-2xl font-semibold italic">لنبدأ العمل معًا</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-sky-100/80">
           نساعد عملاءنا على تسجيل منتجاتهم لدى هيئة الغذاء والدواء السعودية بكفاءة وسلاسة، لضمان دخول آمن وسريع إلى السوق
          </p>
          <div className="mt-8">
            <a
              href="mailto:bmajan@pharmaregistration.com"
              className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-bold text-sky-900 transition hover:bg-sky-50"
            >
              ابدأ الاستشارة الآن
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
