"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");

  const switchLangPath = isArabic
    ? pathname.replace("/ar", "/en")
    : pathname.replace("/en", "/ar");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href={isArabic ? "/ar" : "/en"} className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Pharma Registration"
            width={40}
            height={40}
            priority
          />
          <span className="text-sm font-semibold text-slate-900">
            Pharma Registration
          </span>
        </Link>

        {/* Language Switch */}
        <Link
          href={switchLangPath}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
        >
          {isArabic ? "English" : "العربية"}
        </Link>
      </div>
    </header>
  );
}
