import "../globals.css";
import Link from "next/link";
import { getT } from "./dictionary";
import Image from "next/image";
import Header from "../components/Header";


export default function LangLayout({ children, params }) {
  const lang = params.lang === "ar" ? "ar" : "en";
  const t = getT(lang);
  const other = lang === "ar" ? "en" : "ar";

  return (
    <div className={`${lang === "ar" ? "rtl" : ""} bg-slate-950 text-white min-h-screen`}>
      {/* Header */}
      <Header lang={lang} t={t} />


      {/* Main */}
      <main className="min-h-[60vh]">
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-950 to-blue-950 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-10 md:grid-cols-3 items-start">
            {/* Left */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Pharma Registration"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-semibold">
                  Pharma Registration
                </span>
              </div>

              <p className="text-white/70 text-sm">
                Email:{" "}
                <a
                  href="mailto:baraa@pharmaregistration.com"
                  className="hover:text-white"
                >
                  baraa@pharmaregistration.com
                </a>
              </p>
            </div>

            <div className="hidden md:block" />

            {/* Right */}
            <div className={`space-y-4 ${lang === "ar" ? "text-right" : ""}`}>
              <div className="font-medium">
                {lang === "ar" ? "تواصل معنا" : "Connect with Us"}
              </div>

              <div className={`flex gap-4 ${lang === "ar" ? "justify-end" : ""}`}>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  IG
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
            © 2026 Pharmaregistration. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
