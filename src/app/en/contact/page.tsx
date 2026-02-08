import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const cards = [
    { icon: Mail, title: "Email Address", lines: ["bmajan@pharmaregistration.com"] },
    { icon: Phone, title: "Phone Number", lines: ["+966 55 280 1987"] },
    { icon: MapPin, title: "Office Location", lines: ["Saudi Arabia"] },
    { icon: Clock, title: "Work Day", lines: ["Sun - Thu: 9:00 - 17:00"] },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <section className="text-center">
        <h1 className="text-3xl font-semibold md:text-4xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Reach out for regulatory support and documentation guidance. We’ll respond as soon as possible.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="rounded-3xl border border-sky-100 bg-white/80 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                <Icon className="h-5 w-5 text-sky-700" />
              </div>
              <p className="mt-4 font-semibold">{c.title}</p>
              <div className="mt-2 space-y-1 text-sm text-slate-600">
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-sky-100 bg-white/80 p-8 shadow-sm">
          <p className="text-sm font-semibold text-sky-700">CONTACT</p>
          <h2 className="mt-2 text-2xl font-semibold">Get In Touch With Us</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
           We assist our clients in registering their products with the Saudi Food and Drug Authority efficiently and seamlessly, ensuring safe and fast market entry.
          </p>

          <form className="mt-6 grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none focus:border-sky-300" placeholder="Name" />
              <input className="rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none focus:border-sky-300" placeholder="Email" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none focus:border-sky-300" placeholder="Phone" />
              <input className="rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none focus:border-sky-300" placeholder="Subject" />
            </div>
            <textarea className="min-h-[120px] rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm outline-none focus:border-sky-300" placeholder="Message" />
            <button className="mt-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700" type="button">
              Send Message
            </button>
          </form>
        </div>

       </section>
    </main>
  );
}
