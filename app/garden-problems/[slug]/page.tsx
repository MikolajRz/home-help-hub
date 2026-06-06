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
      canonical: `${baseUrl}/garden-problems/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/garden-problems/${slug}`,
      siteName: "Hometopia",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function GardenArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(slug);

  const headings = post.content.match(/^##\s.+/gm) || [];

  const articleUrl = `${baseUrl}/garden-problems/${slug}`;

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
      name: "Hometopia",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Hometopia",
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
        text: "Check symptoms and confirm what type of garden problem you have.",
      },
      {
        "@type": "HowToStep",
        name: "Inspect the plant",
        text: "Look for visible signs of pests, disease, or nutrient deficiency.",
      },
      {
        "@type": "HowToStep",
        name: "Apply treatment",
        text: "Use appropriate natural or chemical treatment based on the problem.",
      },
      {
        "@type": "HowToStep",
        name: "Monitor recovery",
        text: "Check plant regularly and repeat treatment if necessary.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-gray-800">
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
            { label: "Garden Problems", href: "/categories/garden-problems" },
            { label: post.title, href: `/garden-problems/${post.slug}` },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* MAIN CONTENT */}
          <article className="lg:col-span-8 bg-white rounded-2xl border border-[#dce4d8] px-8 py-6 shadow-sm">
            {/* HEADER */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold leading-tight text-[#2c4a2e]">
                {post.title}
              </h1>

              <p className="text-lg text-[#4a5b4a] mt-3">
                {post.description}
              </p>

              <div className="flex gap-4 text-sm text-[#6b7c6b] mt-4">
                <span>
                  <ReadingTime content={post.content} />
                </span>
                <span>
                  Updated {new Date(post.date).toDateString()}
                </span>
              </div>
            </header>

            {/* GUIDE META (dostosowane do ogrodnictwa) */}
            <section className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#f0ede5] border border-[#dce4d8] p-4 rounded-xl">
                <h3 className="font-semibold text-[#2c4a2e]">Time required</h3>
                <p className="text-[#4a5b4a] mt-1">15–30 minutes</p>
              </div>

              <div className="bg-[#f0ede5] border border-[#dce4d8] p-4 rounded-xl">
                <h3 className="font-semibold text-[#2c4a2e]">Difficulty</h3>
                <p className="text-[#4a5b4a] mt-1">Beginner</p>
              </div>

              <div className="bg-[#f0ede5] border border-[#dce4d8] p-4 rounded-xl">
                <h3 className="font-semibold text-[#2c4a2e]">Best season</h3>
                <p className="text-[#4a5b4a] mt-1">Spring / Summer</p>
              </div>
            </section>

            <hr className="border-[#dce4d8] mb-6" />

            {/* CONTENT */}
            <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* WHAT NOT TO DO */}
            <section className="mt-6 border-t border-[#dce4d8] pt-6">
              <h2 className="text-xl font-semibold text-[#2c4a2e]">What NOT to do</h2>
              <ul className="mt-3 list-disc ml-6 text-[#4a5b4a] space-y-2">
                <li>Do not overwater as a reaction to pests</li>
                <li>Do not use harsh chemicals on edible plants</li>
                <li>Do not ignore early signs of infestation</li>
                <li>Do not spray during hot sunny days (can burn leaves)</li>
              </ul>
            </section>

            {/* PREVENTION */}
            <section className="mt-6 border-t border-[#dce4d8] pt-6">
              <h2 className="text-xl font-semibold text-[#2c4a2e]">Prevention tips</h2>
              <ul className="mt-3 list-disc ml-6 text-[#4a5b4a] space-y-2">
                <li>Inspect plants weekly for early signs of problems</li>
                <li>Maintain proper watering and feeding schedules</li>
                <li>Encourage beneficial insects to your garden</li>
                <li>Rotate crops annually to prevent soil-borne diseases</li>
              </ul>
            </section>

            {/* AUTHOR BOX */}
            <div className="mt-6 border-t border-[#dce4d8] pt-6">
              <AuthorBox />
            </div>

            {/* INTERNAL LINKS */}
            <div className="mt-6 border-t border-[#dce4d8] pt-6">
              <InternalLinks
                links={[
                  {
                    href: "/garden-problems/soil-too-dry",
                    label: "Soil too dry",
                  },
                  {
                    href: "/garden-problems/overwatered-plants",
                    label: "Overwatered plants",
                  },
                ]}
              />
            </div>

            {/* RELATED */}
            {related.length > 0 && (
              <section className="mt-6 border-t border-[#dce4d8] pt-6">
                <h2 className="text-xl font-semibold text-[#2c4a2e]">Related guides</h2>

                <div className="flex flex-col mt-2">
                  {related.map((r) => (
                    <div key={r.slug} className="mb-0 last:mb-0">
                      <RelatedLinks
                        items={[
                          {
                            href: `/garden-problems/${r.slug}`,
                            label: r.title,
                            description: r.description,
                            type: "guide",
                          },
                        ]}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            <div className="mt-6">
              <FAQ
                items={[
                  {
                    question: "How do I know if my plant has aphids?",
                    answer:
                      "Look for clusters of small insects on new growth, sticky honeydew on leaves, or curled and yellowing foliage.",
                  },
                  {
                    question: "What's the fastest way to get rid of aphids?",
                    answer:
                      "A strong spray of water or insecticidal soap kills aphids on contact. Repeat every few days until they're gone.",
                  },
                  {
                    question: "Are aphids harmful to humans?",
                    answer:
                      "No, aphids do not bite or sting humans. They only feed on plants.",
                  },
                ]}
              />
            </div>
          </article>

          {/* SIDEBAR - tylko Contents */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="bg-white border border-[#dce4d8] rounded-2xl p-5 shadow-sm">
                <h2 className="font-semibold text-[#2c4a2e] mb-3">Contents</h2>

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
                            className="block text-[#4a5b4a] hover:text-[#2d5a2c] transition"
                          >
                            {h.replace("##", "").trim()}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-[#6b7c6b] text-sm">
                    No sections available
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}