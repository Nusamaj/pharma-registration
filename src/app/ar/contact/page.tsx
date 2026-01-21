import React from "react"; // إضافة استيراد ريآكت لضمان تعريف الملف كـ Module
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactArPage() {
  const cards = [
    { icon: Mail, title: "البريد الإلكتروني", lines: ["baraa@pharmaregistration.com"] },
    { icon: Phone, title: "رقم الهاتف", lines: ["(اختياري) أضف الرقم هنا"] },
    { icon: MapPin, title: "الموقع", lines: ["المملكة العربية السعودية"] },
    { icon: Clock, title: "أوقات العمل", lines: ["الأحد - الخميس: 9:00 - 17:00"] },
  ];

  return (
    <main dir="rtl" className="mx-auto max-w-6xl px-4 py-12 md:py-16 text-right">
      {/* عنوان الصفحة */}
      <section className="text-center">
        <h1 className="text-3xl font-semibold md:text-4xl text-slate-900">تواصل معنا</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 leading-7">
          تواصل معنا للحصول على الدعم التنظيمي وإرشاد إعداد الملفات. سنقوم بالرد عليك في أقرب وقت.
        </p>
      </section>

      {/* كروت المعلومات */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                <Icon className="h-5 w-5 text-sky-700" />
              </div>
              <p className="mt-4 font-semibold text-slate-900">{c.title}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-600 leading-7">
                {c.lines.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* فورم + صورة */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* الفورم */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
          <p className="text-sm font-semibold text-sky-700 uppercase tracking-wide">تواصل</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">راسلنا الآن</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            شاركنا معلومات شركتك وفئة المنتج، وسنقترح أفضل مسار ومتطلبات التسجيل والملفات اللازمة.
          </p>

          <form className="mt-6 grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white transition-all"
                placeholder="الاسم"
              />
              <input
                type="email"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white transition-all"
                placeholder="البريد الإلكتروني"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="tel"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white transition-all"
                placeholder="رقم الهاتف"
              />
              <input
                type="text"
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white transition-all"
                placeholder="الموضوع"
              />
            </div>

            <textarea
              className="min-h-[120px] rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white transition-all"
              placeholder="اكتب رسالتك"
            />

            <button
              className="mt-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 shadow-lg shadow-sky-100 active:scale-95 transition-all"
              type="submit"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>

        {/* مكان للصورة */}
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center items-center text-center">
          <div className="w-full h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-sky-100 to-white flex items-center justify-center p-6 border-2 border-dashed border-sky-200">
            <div className="space-y-2">
              <p className="font-semibold text-sky-900">قسم الصورة</p>
              <p className="text-sm text-slate-500">يمكنك وضع صورة فريق العمل أو خريطة الموقع هنا</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA أسفل الصفحة */}
      <section className="mt-10">
        <div className="rounded-3xl bg-sky-900 p-10 text-center text-white">
          <h3 className="text-2xl font-semibold italic">خلّنا نبدأ!</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sky-100/80 text-sm leading-7">
            ندعم الامتثال ودخول السوق بكفاءة عبر عدة فئات من المنتجات. نحن هنا لمساعدتك في كل خطوة.
          </p>
          <div className="mt-8">
            <a
              href="mailto:baraa@pharmaregistration.com"
              className="rounded-xl bg-white px-8 py-3 text-sm font-bold text-sky-900 hover:bg-sky-50 transition-colors"
            >
              ابدأ الاستشارة الآن
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}