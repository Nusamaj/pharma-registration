import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactArPage() {
  const cards = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      lines: ["baraa@pharmaregistration.com"],
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      lines: ["—"],
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
          تواصل معنا للحصول على الدعم التنظيمي وإرشاد إعداد ملفات التسجيل. سنرد
          عليك في أقرب وقت ممكن.
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

      {/* فورم التواصل */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold text-sky-700 tracking-wide">
            تواصل
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            راسلنا الآن
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            أرسل لنا معلومات شركتك ونوع المنتج، وسنقترح عليك أفضل مسار
            ومتطلبات التسجيل.
          </p>

          <form className="mt-6 grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="الاسم"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
              />
              <input
                type="text"
                placeholder="الموضوع"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
              />
            </div>

            <textarea
              placeholder="اكتب رسالتك"
              className="min-h-[120px] rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-white"
            />

            <button
              type="submit"
              className="mt-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 active:scale-95"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* مكان الصورة */}
        <div className="flex items-center justify-center rounded-3xl border border-slate-100 bg-slate-50 p-8 text-center">
          <div className="flex h-full min-h-[300px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-sky-200 bg-gradient-to-br from-sky-100 to-white p-6">
            <div className="space-y-2">
              <p className="font-semibold text-sky-900">مساحة للصورة</p>
              <p className="text-sm text-slate-500">
                يمكن وضع صورة الفريق أو خريطة الموقع هنا
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-3xl bg-sky-900 p-10 text-center text-white">
          <h3 className="text-2xl font-semibold italic">لنبدأ العمل معًا</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-sky-100/80">
            ندعم الامتثال التنظيمي ودخول السوق بكفاءة عبر مختلف فئات المنتجات.
          </p>
          <div className="mt-8">
            <a
              href="mailto:baraa@pharmaregistration.com"
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
