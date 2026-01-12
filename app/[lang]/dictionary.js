export const dict = {
  ar: {
    site: "فارما ريجستريشن",
    nav: { home: "الرئيسية", solutions: "الحلول", booking: "الحجز اونلاين", contact: "اتصل بنا" },
    heroTitle: "مرحباً بك في فارما ريجستريشن",
    heroSub: "حلول تنظيمية وتسجيل منتجات دوائية للشركات باحترافية.",
    cta: "احجز الآن",
  },
  en: {
    site: "Pharma Registration",
    nav: { home: "Home", solutions: "Solutions", booking: "Book Online", contact: "Contact" },
    heroTitle: "Welcome to Pharma Registration",
    heroSub: "Empowering Pharmaceutical Companies with Regulatory Solutions.",
    cta: "Book Now",
  },
};

export function getT(lang) {
  return dict[lang] ?? dict.en;
}
