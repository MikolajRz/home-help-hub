import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinks from "@/components/InternalLinks";

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

  return (
    <div className="min-h-screen bg-gray-50">
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
          <article className="lg:col-span-8 bg-white rounded-xl shadow-sm px-8 py-10">
            
            {/* HEADER */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-gray-600 mt-3">
                {post.description}
              </p>

              <div className="mt-4 text-sm text-gray-400">
                Updated: {new Date().toDateString()}
              </div>
            </header>

            <hr className="my-6" />

            {/* CONTENT */}
            <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* RELATED */}
            {related.length > 0 && (
              <section className="mt-12 border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">
                  Related home problems
                </h2>

                <div className="grid gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/home-problems/${r.slug}`}
                      className="border rounded-lg p-4 hover:shadow-md transition bg-white"
                    >
                      <h3 className="font-semibold">{r.title}</h3>
                      <p className="text-sm text-gray-600">
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
            </div>
          </article>

          {/* SIDEBAR (TOC) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 bg-white rounded-xl shadow-sm p-5">
              <h2 className="font-semibold mb-3">Contents</h2>

              {headings.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {headings.map((h, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-black transition"
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