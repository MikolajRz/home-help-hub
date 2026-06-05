import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import InternalLinks from "@/components/InternalLinks";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import AuthorBox from "@/components/AuthorBox";
import FAQ from "@/components/FAQ";
import RelatedLinks from "@/components/RelatedLinks";
import ReadingTime from "@/components/ReadingTime";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://home-help-hub-smoky.vercel.app";

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
    alternates: {
      canonical: `${baseUrl}/home-problems/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/home-problems/${slug}`,
      siteName: "Home Help Hub",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
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

  const articleUrl = `${baseUrl}/home-problems/${slug}`;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: articleUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Home Help Hub",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Home Help Hub",
      url: baseUrl,
    },
    mainEntityOfPage: articleUrl,
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    description: post.description,
    totalTime: "PT20M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: "0-10",
    },
    step: [
      {
        "@type": "HowToStep",
        name: "Identify the issue",
        text: "Check symptoms and confirm what type of heating problem you have.",
      },
      {
        "@type": "HowToStep",
        name: "Check boiler pressure",
        text: "Ensure pressure is between 1.0 and 1.5 bar.",
      },
      {
        "@type": "HowToStep",
        name: "Bleed the radiator",
        text: "Release trapped air using a radiator key until water flows steadily.",
      },
      {
        "@type": "HowToStep",
        name: "Test heating system",
        text: "Turn heating back on and verify even heat distribution.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <ReadingProgress />
      <BackToTop />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdHowTo),
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Home Problems", href: "/categories/home-problems" },
            { label: post.title, href: `/home-problems/${post.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* MAIN CONTENT */}
          <article className="lg:col-span-8 bg-[#111827] border border-white/10 rounded-2xl px-8 py-6 shadow-xl">
            {/* HEADER */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-gray-300 mt-3">
                {post.description}
              </p>

              <div className="flex gap-4 text-sm text-gray-400 mt-4">
                <span>
                  <ReadingTime content={post.content} />
                </span>
                <span>
                  Updated {new Date(post.date).toDateString()}
                </span>
              </div>
            </header>

            {/* GUIDE META */}
            <section className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0f172a] border border-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Time required</h3>
                <p className="text-gray-400 mt-1">10–20 minutes</p>
              </div>

              <div className="bg-[#0f172a] border border-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Cost estimate</h3>
                <p className="text-gray-400 mt-1">£0–£10</p>
              </div>

              <div className="bg-[#0f172a] border border-white/10 p-4 rounded-lg">
                <h3 className="font-semibold">Difficulty</h3>
                <p className="text-gray-400 mt-1">Beginner</p>
              </div>
            </section>

            <hr className="border-white/10 mb-6" />

            {/* CONTENT */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:scroll-mt-24">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* WHAT NOT TO DO */}
            <section className="mt-6 border-t border-white/10 pt-4">
              <h2 className="text-xl font-semibold">What NOT to do</h2>
              <ul className="mt-3 list-disc ml-6 text-gray-300 space-y-2">
                <li>Do not force valves that are stuck</li>
                <li>Do not bleed radiators while heating is on</li>
                <li>Do not ignore repeated pressure drops</li>
              </ul>
            </section>

            {/* PREVENTION */}
            <section className="mt-8 border-t border-white/10 pt-6">
              <h2 className="text-xl font-semibold">Prevention tips</h2>
              <ul className="mt-3 list-disc ml-6 text-gray-300 space-y-2">
                <li>Check boiler pressure monthly</li>
                <li>Bleed radiators each heating season</li>
                <li>Schedule annual boiler service</li>
              </ul>
            </section>

            {/* AUTHOR BOX */}
            <div className="mt-10">
              <AuthorBox />
            </div>

            {/* NEXT STEP */}
            <section className="mt-10 border-t border-white/10 pt-6">
              <h2 className="text-xl font-semibold">Next step</h2>
              <p className="text-gray-300 mt-2">
                If this guide didn't fully solve your issue, check related
                heating problems.
              </p>

              <Link
                href="/categories/home-problems"
                className="inline-block mt-4 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg"
              >
                Explore more fixes →
              </Link>
            </section>

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

            {/* RELATED */}
            {related.length > 0 && (
              <section className="mt-0 border-t border-white/10 pt-1">
                <h2 className="text-xl font-semibold">Related guides</h2>

                <div className="flex flex-col mt-0">
                  {related.map((r) => (
                    <div key={r.slug} className="mb-0 last:mb-0">
                      <RelatedLinks
                        items={[
                          {
                            href: `/home-problems/${r.slug}`,
                            label: r.title,
                            description: r.description,
                            type: "fix",
                          },
                        ]}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6 space-y-6">
              <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
                <h2 className="font-semibold mb-3">Contents</h2>

                {headings.length > 0 ? (
                  <ul className="space-y-2 text-sm">
                    {headings.map((h, i) => {
                      const id = h
                        .replace("##", "")
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, "-");

                      return (
                        <li key={i}>
                          <a
                            href={`#${id}`}
                            className="block text-gray-400 hover:text-white transition"
                          >
                            {h.replace("##", "").trim()}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-sm">
                    No sections available
                  </p>
                )}
              </div>

              {/* FAQ */}
              <FAQ
                items={[
                  {
                    question: "Why is my radiator cold at the top?",
                    answer:
                      "This is usually caused by trapped air inside the radiator.",
                  },
                  {
                    question: "How long does it take to fix it?",
                    answer:
                      "Most issues can be resolved within 10–20 minutes.",
                  },
                  {
                    question: "Do I need a professional?",
                    answer:
                      "Usually not — unless the problem persists after bleeding and pressure check.",
                  },
                ]}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}