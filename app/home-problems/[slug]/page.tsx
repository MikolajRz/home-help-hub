import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinks from "@/components/InternalLinks";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";

const baseUrl = "https://home-help-hub-smoky.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(slug);

  const headings = post.content.match(/^##\s.+/gm) || [];

  const readingTime = Math.max(
  1,
  Math.ceil(post.content.split(" ").length / 200)
);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* READING PROGRESS BAR */}
      <ReadingProgress />
      <BackToTop />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Home Problems", href: "/categories/home-problems" },
            { label: post.title, href: `/home-problems/${post.slug}` },
          ]}
        />

        {/* ARTICLE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* MAIN CONTENT */}
          <article className="lg:col-span-8 bg-[#111827] border border-white/10 rounded-2xl px-8 py-10 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* HEADER */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold leading-tight text-white">
                {post.title}
              </h1>

              <p className="text-lg text-gray-300 mt-3">
                {post.description}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                ⏱ {readingTime} min read
              </p>

              <div className="mt-4 text-sm text-gray-400">
                Updated: {new Date().toDateString()}
              </div>
            </header>

            <hr className="my-6 border-white/10" />

            {/* CONTENT */}
            <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-invert">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => {
                    const id = String(children)
                      .toLowerCase()
                      .replace(/\s+/g, "-");

                    return (
                      <h2 id={id} className="scroll-mt-24">
                        {children}
                      </h2>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* RELATED */}
            {related.length > 0 && (
              <section className="mt-12 border-t border-white/10 pt-6">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Related home problems
                </h2>

                <div className="grid gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/home-problems/${r.slug}`}
                      className="bg-[#1f2937] border border-white/10 rounded-lg p-4 hover:bg-[#374151] hover:scale-[1.02] transition-all duration-300"
                    >
                      <h3 className="font-semibold text-white">
                        {r.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {r.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* INTERNAL LINKS */}
            <div className="mt-10">
              <InternalLinks
                links={[
                  {
                    href: "/home-problems/boiler-not-working",
                    label: "Boiler not working",
                  },
                  {
                    href: "/home-problems/water-pressure-low",
                    label: "Low water pressure",
                  },
                ]}
              />

              <div className="mt-12 border-t border-white/10 pt-8">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Continue Reading
                </h2>

                <Link
                  href="/categories/home-problems"
                  className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition"
                >
                  Browse More Articles →
                </Link>
              </div>
            </div>
          </article>

          {/* SIDEBAR (TOC) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 bg-[#111827] border border-white/10 rounded-2xl p-5 shadow-xl">
              <h2 className="font-semibold mb-3 text-white">Contents</h2>

              {headings.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {headings.map((h, i) => (
                    <li key={i}>
                      <a
                        href={`#${h
                          .replace("##", "")
                          .trim()
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                      >
                        {h.replace("##", "").trim()}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">
                  No sections available
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}