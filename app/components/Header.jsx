"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ lang, t }) {
  const other = lang === "ar" ? "en" : "ar";
  const isAr = lang === "ar";

  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/solutions`, label: t.nav.solutions },
    { href: `/${lang}/booking`, label: t.nav.booking },
    { href: `/${lang}/contact`, label: t.nav.contact },
  ];

  // يمنع سكرول الخلفية لما القائمة مفتوحة
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC للإغلاق
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Pharma Registration"
            width={32}
            height={32}
            priority
          />
          <span className="font-semibold tracking-tight">{t.site}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm text-white/90">
          {links.map((x) => (
            <Link key={x.href} className="hover:text-white" href={x.href}>
              {x.label}
            </Link>
          ))}

          <Link
            href={`/${other}`}
            className="rounded-full border border-white/15 px-3 py-1 hover:bg-white/10"
          >
            {other.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 p-2 hover:bg-white/10"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer (Animated) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          className={`absolute top-0 h-full w-[280px] bg-slate-950 border-white/10 p-5 transition-transform duration-300 ease-out ${
            isAr ? "right-0 border-l" : "left-0 border-r"
          } ${
            open
              ? "translate-x-0"
              : isAr
              ? "translate-x-full"
              : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Pharma Registration"
                width={28}
                height={28}
              />
              <span className="font-semibold">{t.site}</span>
            </div>

            <button
              type="button"
              className="rounded-xl border border-white/15 p-2 hover:bg-white/10"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 6l-12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="mt-6 grid gap-2">
            {links.map((x) => (
              <Link
                key={x.href}
                href={x.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 px-4 py-3 hover:bg-white/10"
              >
                {x.label}
              </Link>
            ))}

            <Link
              href={`/${other}`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl border border-white/15 px-4 py-3 hover:bg-white/10 text-center"
            >
              {other.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
