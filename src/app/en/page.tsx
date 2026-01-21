import Link from "next/link";

const services = [
  {
    title: "Pharmaceutical",
    items: [
      "Logistic solutions for pharmaceutical companies",
      "Licensing pharmaceutical companies with the Food and Drug Authority",
      "Registration of human medicines",
      "Preparing SOPs, quality systems, and training",
      "Solutions for the RSD system",
      "Consultations to ensure correct implementation of GDP",
      "Establishing and equipping medical warehouses",
    ],
  },
  {
    title: "Medical Devices",
    items: [
      "Authorized representative agreements and licensing",
      "SOPs and quality systems compatible with ISO standards",
      "Licensing medical companies",
      "Preparing and reviewing medical device registration documents",
      "Register medical devices (MDMA)",
      "Medical devices import clearance requests",
      "Logistical solutions for medical device companies",
    ],
  },
  {
    title: "Cosmetics & Personal Care",
    items: [
      "Licensing of cosmetics companies",
      "Preparing, reviewing, and translating cosmetics files per SFDA requirements",
      "Cosmetics products registration",
      "Import clearance requests and certificates of conformity",
      "Logistical solutions for cosmetics companies",
    ],
  },
  {
    title: "Foods & Nutritional Supplements",
    items: [
      "Registration of foods and nutritional supplements",
      "Prior notification of import applications",
      "Logistical solutions for food companies",
    ],
  },
];

const values = [
  {
    title: "Excellence",
    text: "Delivering regulatory services with the highest standards of quality and accuracy.",
  },
  {
    title: "Integrity",
    text: "Honesty, transparency, and ethical conduct in every engagement.",
  },
  {
    title: "Collaboration",
    text: "Strong partnerships with clients and regulatory authorities.",
  },
  {
    title: "Innovation",
    text: "Staying ahead of regulatory changes with practical, innovative solutions.",
  },
  {
    title: "Client Focus",
    text: "Personalized guidance and end-to-end support tailored to your needs.",
  },
];

export default function EnHomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-white">

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
                Regulatory Affairs • Saudi Market
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Pharma Registration
              </h1>

              <p className="mt-4 text-lg text-slate-600 md:text-xl">
                Empowering Pharmaceutical Companies with Regulatory Solutions
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
                Building on over 13 years of experience in the Saudi market, we
                deliver meticulous regulatory and advisory services to ensure a
                confident and legally compliant market entry.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/en/contact"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Contact Us
                </Link>
                <Link
                  href="/en/services"
                  className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium hover:bg-slate-50"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* HERO CARD (مكان لصورة/Illustration لاحقًا) */}
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">

              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-medium">Trusted Regulatory Support</p>
                <p className="mt-2 text-sm text-slate-600">
                  End-to-end compliance guidance for pharmaceuticals, medical
                  devices, cosmetics, and food products.
                </p>

                <div className="mt-5 grid gap-3">
                  {[
                    "SFDA-aligned documentation",
                    "Process streamlining",
                    "Operational readiness support",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                    >
                      <span className="text-slate-700">{x}</span>
                      <span className="text-slate-400">✓</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                (We’ll replace this with your hero image/logo styling later.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 text-slate-600">
              Pharma Registration takes pride in delivering meticulous
              regulatory and advisory services tailored to meet the unique needs
              of our clients. By entrusting us with your regulatory needs, we
              streamline processes, saving valuable time and effort—allowing you
              to focus on strategic marketing initiatives and increased sales.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium">What you can expect</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>• Clear regulatory pathways aligned with SFDA requirements</li>
              <li>• Accurate documentation preparation and review</li>
              <li>• Practical guidance to improve compliance and operations</li>
              <li>• Responsive communication and client-first support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Vision</h3>
            <p className="mt-2 text-slate-600">
              To be the preferred partner for pharmaceutical and medical device
              companies seeking regulatory expertise and guidance, continuously
              expanding our services and global reach.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Mission</h3>
            <p className="mt-2 text-slate-600">
              To provide high-quality regulatory affairs consultations to
              pharmaceutical, cosmetic, and medical device companies—enabling
              safe and effective products to reach the market efficiently while
              achieving regulatory compliance and operational excellence.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 p-6">
          <h3 className="text-lg font-semibold">Values</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-medium">{v.title}</p>
                <p className="mt-1 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Services</h2>
            <Link
              href="/en/services"
              className="text-sm font-medium text-slate-700 hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-semibold">{s.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {s.items.slice(0, 4).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link
                    href="/en/services"
                    className="text-sm font-medium text-slate-900 hover:underline"
                  >
                    See more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Blog</h2>
          <Link
            href="/en/blog"
            className="text-sm font-medium text-slate-700 hover:underline"
          >
            Visit blog
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs text-slate-500">Regulatory • 5 min read</p>
              <p className="mt-2 font-medium">Sample post title {i}</p>
              <p className="mt-2 text-sm text-slate-600">
                This is a placeholder. Next we will connect your real MDX blog
                posts.
              </p>
              <div className="mt-4">
                <Link
                  href="/en/blog"
                  className="text-sm font-medium text-slate-900 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <h2 className="text-2xl font-semibold">
              Let&apos;s support your regulatory needs
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Share your company details and product category, and we’ll respond
              with the best pathway and required documentation.
            </p>
            <div className="mt-6">
              <Link
                href="/en/contact"
                className="inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Regulatory disclaimer: Website content is for informational purposes
            and does not replace official SFDA guidance.
          </p>
        </div>
      </section>
    </main>
  );
}
