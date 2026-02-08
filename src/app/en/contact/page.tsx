import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactEnPage() {
  const cards = [
    {
      icon: Mail,
      title: "Email Address",
      lines: ["bmajan@pharmaregistration.com"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      lines: ["+966 55 280 1987"],
    },
    {
      icon: MapPin,
      title: "Location",
      lines: ["Saudi Arabia"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      lines: ["Sunday – Thursday: 9:00 – 17:00"],
    },
  ];

  return (
    <main dir="ltr" className="mx-auto max-w-6xl px-4 py-12 text-left">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Contact Us
        </h1>
        <p className="mt-3 mx-auto max-w-2xl text-slate-600 leading-7">
          Share the details of the product you would like to register, and we
          will advise you on the most suitable registration pathway, including
          requirements and estimated costs. We will get back to you as soon as
          possible.
        </p>
      </section>

      {/* Info Cards */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50">
                <Icon className="h-5 w-5 text-sky-700" />
              </div>
              <p className="mt-4 font-semibold text-slate-900">
                {item.title}
              </p>
              <div className="mt-2 space-y-1 text-sm text-slate-600 leading-7">
                {item.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="rounded-3xl bg-sky-900 p-10 text-center text-white">
          <h3 className="text-2xl font-semibold italic">
            Let’s Work Together
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-sky-100/80">
            We support our clients in registering their products with the Saudi
            Food and Drug Authority efficiently and smoothly, ensuring safe and
            timely market entry.
          </p>
          <div className="mt-8">
            <a
              href="mailto:bmajan@pharmaregistration.com"
              className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-bold text-sky-900 transition hover:bg-sky-50"
            >
              Start Your Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
