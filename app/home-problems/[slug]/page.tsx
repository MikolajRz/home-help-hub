import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

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

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Home Problems", href: "/categories/home-problems" },
          { label: post.title, href: `/home-problems/${post.slug}` },
        ]}
      />

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
                item: "http://localhost:3000/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Home Problems",
                item: "http://localhost:3000/categories/home-problems",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `http://localhost:3000/home-problems/${post.slug}`,
              },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold">{post.title}</h1>

        <p className="text-gray-500 mt-2">{post.description}</p>

        <hr className="my-6" />

        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>

        {/* 🔗 RELATED ARTICLES */}
        <section className="mt-12 border-t pt-6">
          <h2 className="text-xl font-semibold">Related articles</h2>

          <div className="mt-4 grid gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/home-problems/${r.slug}`}
                className="border p-4 rounded hover:shadow transition"
              >
                <h3 className="font-semibold">{r.title}</h3>
                <p className="text-sm text-gray-600">{r.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}