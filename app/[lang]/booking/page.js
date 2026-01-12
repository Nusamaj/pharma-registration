import { getT } from "../dictionary";

export default function Booking({ params }) {
  const lang = params.lang === "ar" ? "ar" : "en";
  const t = getT(lang);

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6">{t.nav.booking}</h2>

      <form className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "الاسم الكامل" : "Full name"} />
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "اسم الشركة" : "Company name"} />
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"} />
        <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "ملاحظات" : "Notes"} />
        <button className="rounded-xl bg-white px-5 py-3 text-slate-900 hover:opacity-95">
          {lang === "ar" ? "إرسال طلب الحجز" : "Submit Booking"}
        </button>
      </form>
    </div>
  );
}
