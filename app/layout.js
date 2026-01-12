import "./globals.css";

export const metadata = {
  title: "Pharma Registration",
  description: "Pharma Registration Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
