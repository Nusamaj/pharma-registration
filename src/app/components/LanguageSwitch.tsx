"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const router = useRouter();

  // لو أنت على /en/... بدّلها لـ /ar/... والعكس
  const isEn = pathname.startsWith("/en");
  const nextPath = isEn ? pathname.replace("/en", "/ar") : pathname.replace("/ar", "/en");

  return (
    <button
      onClick={() => router.push(nextPath)}
      className="rounded-xl border border-sky-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white"
      aria-label="Switch language"
      type="button"
    >
      {isEn ? "AR" : "EN"}
    </button>
  );
}
