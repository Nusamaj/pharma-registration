import { getT } from "../dictionary";

export default function Contact({ params }) {
  const lang = params.lang === "ar" ? "ar" : "en";
  const t = getT(lang);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-semibold mb-4">{t.nav.contact}</h2>
        <p className="text-white/70">
          {lang === "ar" ? "راسلنا وسنرد خلال 24 ساعة عمل." : "Message us and we’ll respond within 24 business hours."}
        </p>

        <div className="mt-4 space-y-2 text-sm text-white/60">
          <div>{lang === "ar" ? "البريد:" : "Email:"} info@pharma-registration.com</div>
          <div>{lang === "ar" ? "واتساب:" : "WhatsApp:"} +966-XX-XXX-XXXX</div>
        </div>
      </div>

      <form className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "الاسم" : "Name"} />
        <input className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "البريد" : "Email"} />
        <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-slate-950 px-4 py-3" placeholder={lang === "ar" ? "رسالتك" : "Your message"} />
        <button className="rounded-xl bg-white px-5 py-3 text-slate-900 hover:opacity-95">
          {lang === "ar" ? "إرسال" : "Send"}
        </button>
      </form>
    </div>
  );
}
