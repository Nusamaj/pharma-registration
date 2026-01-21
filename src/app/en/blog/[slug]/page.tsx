import Link from "next/link";

const content: Record<
  string,
  { title: string; date: string; category: string; body: string[] }
> = {
  "sfda-registration-overview": {
    title: "SFDA Registration Overview: What to Prepare",
    date: "2026-01-21",
    category: "Regulatory",
    body: [
      "Successful market entry starts with a clear plan for requirements and documentation.",
      "Delays often happen due to missing files, inconsistent information, or labeling issues.",
      "Start with a checklist, then validate compliance before submission to reduce queries.",
      "Later, we can convert this article into a printable checklist if you want.",
    ],
  },
  "gdp-basics": {
    title: "GDP Basics for Pharmaceutical Distribution",
    date: "2026-01-18",
    category: "Quality",
    body: [
      "GDP focuses on preserving product quality throughout storage and distribution.",
      "Common gaps include incomplete SOPs, temperature mapping issues, and weak deviation handling.",
      "Start by mapping your process, then align SOPs and training with real workflows.",
    ],
  },
  "cosmetics-labeling": {
    title: "Cosmetics Labeling Checklist (SFDA-aligned)",
    date: "2026-01-15",
    category: "Cosmetics",
    body: [
      "Label review should happen early—before printing and before importing.",
      "Watch for claims, ingredient listing order, and required Arabic/English information.",
      "Build a simple checklist per SKU and keep evidence files ready.",
    ],
  },
};

export default function EnBlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = content[params.slug];

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <Link
          className="mt-4 inline-block text-sky-700 hover:underline"
          href="/en/blog"
        >
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <div className="fade-up">
        <Link className="text-sm text-sky-700 hover:underline" href="/en/blog">
          ← Back to Blog
        </Link>

        <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-slate-700">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
          {post.title}
        </h1>

        <article className="mt-6 space-y-4 text-slate-700 leading-8">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="mt-10 rounded-3xl bg-sky-100/70 p-8 text-center">
          <h2 className="text-xl font-semibold">Need help with documentation?</h2>
          <p className="mt-2 text-sm text-slate-600">
            Contact us and share your product category and current status.
          </p>
          <div className="mt-5">
            <Link
              href="/en/contact"
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
