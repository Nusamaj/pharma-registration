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
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Pharma Registration",
        url: "https://www.pharmaregistration.com",
        logo: "https://www.pharmaregistration.com/logo.png",
        description:
          "Professional regulatory affairs and pharmaceutical registration services in Saudi Arabia.",
        inLanguage: ["en", "ar"],
        sameAs: [],
      }),
    }}
  />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
