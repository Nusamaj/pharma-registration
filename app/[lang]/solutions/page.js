import { getT } from "../dictionary";

export default function Solutions({ params }) {
  const lang = params.lang === "ar" ? "ar" : "en";
  const t = getT(lang);

  const items = lang === "ar"
    ? ["تسجيل منتجات دوائية", "تسجيل مكملات غذائية", "تجهيز ملفات CTD/eCTD", "استشارات تنظيمية"]
    : ["Drug Registration", "Supplement Registration", "CTD/eCTD Preparation", "Regulatory Consulting"];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{t.nav.solutions}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div key={it} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold">{it}</div>
            <p className="mt-2 text-sm text-white/60">
              {lang === "ar" ? "تفاصيل مختصرة عن هذه الخدمة." : "Short details about this service."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
