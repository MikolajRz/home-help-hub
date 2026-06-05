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

  // 🧭 TOC (auto headings)
  const headings = post.content.match(/^##\s.+/gm) || [];

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Home Problems", href: "/categories/home-problems" },
          { label: post.title, href: `/home-problems/${post.slug}` },
        ]}
      />

      {/* 🔥 BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${baseUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Home Problems",
                item: `${baseUrl}/categories/home-problems`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `${baseUrl}/home-problems/${post.slug}`,
              },
            ],
          }),
        }}
      />

      {/* 🔥 FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: `What causes ${post.title.toLowerCase()}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: post.description,
                },
              },
              {
                "@type": "Question",
                name: "How do I fix it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Follow basic troubleshooting steps and check common household issues.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a professional?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "If basic fixes do not work, contact a qualified technician.",
                },
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-3xl px-4 py-10">
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

        {/* 🧭 TABLE OF CONTENTS */}
        {headings.length > 0 && (
          <div className="bg-gray-50 border rounded p-4 mb-8">
            <h2 className="font-semibold mb-2">Contents</h2>
            <ul className="text-sm space-y-1">
              {headings.map((h, i) => (
                <li key={i}>{h.replace("##", "").trim()}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* 🔗 RELATED ARTICLES */}
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
                  className="border rounded p-4 hover:shadow transition"
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

        {/* 🔗 INTERNAL LINKS */}
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
      </article>
    </div>
  );
}