import Link from "next/link";

const posts = [
  {
    slug: "sfda-registration-overview",
    title: "SFDA Registration Overview: What to Prepare",
    excerpt:
      "A practical overview of the main steps and common documents needed for compliant market entry in Saudi Arabia.",
    category: "Regulatory",
    readTime: "5 min read",
    date: "2026-01-21",
  },
  {
    slug: "gdp-basics",
    title: "GDP Basics for Pharmaceutical Distribution",
    excerpt:
      "Key principles to support Good Distribution Practice and avoid common compliance gaps.",
    category: "Quality",
    readTime: "6 min read",
    date: "2026-01-18",
  },
  {
    slug: "cosmetics-labeling",
    title: "Cosmetics Labeling Checklist (SFDA-aligned)",
    excerpt:
      "A clear checklist to review labels and claims before submission and import.",
    category: "Cosmetics",
    readTime: "4 min read",
    date: "2026-01-15",
  },
];

export default function EnBlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <section className="text-center fade-up">
        <h1 className="text-3xl font-semibold md:text-4xl">Blog</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Practical regulatory insights and pharmacy-related topics you can use immediately.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.map((p, idx) => (
          <Link
            key={p.slug}
            href={`/en/blog/${p.slug}`}
            className={`card-soft rounded-3xl p-6 hover:shadow-md transition-shadow fade-up delay-${Math.min(
              idx,
              3
            )}`}
          >
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-slate-700">
                {p.category}
              </span>
              <span>{p.readTime}</span>
            </div>

            <h2 className="mt-4 text-lg font-semibold leading-snug">
              {p.title}
            </h2>

            <p className="mt-2 text-sm text-slate-600 leading-7">
              {p.excerpt}
            </p>

            <div className="mt-5 text-xs text-slate-500">
              {p.date} • Read more →
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
