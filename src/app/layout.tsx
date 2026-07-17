import "./globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pharmaregistration.com"),
  title: {
    default: "Pharma Registration",
    template: "%s | Pharma Registration",
  },
  description:
    "Professional regulatory affairs, pharmaceutical registration, medical devices, cosmetics, and food supplement registration services in Saudi Arabia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
