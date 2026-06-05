import type { MetadataRoute } from "next";
import { getHomeProblemPosts } from "@/lib/posts";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://home-help-hub-smoky.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getHomeProblemPosts();

  const articleUrls: MetadataRoute.Sitemap = posts
    .filter((post) => post?.slug)
    .map((post) => {
      const date = post?.date ? new Date(post.date) : new Date();

      return {
        url: `${BASE_URL}/home-problems/${post.slug}`,
        lastModified: date,
        changeFrequency: "weekly",
        priority: 0.7,
      };
    });

  return [
    // 🏠 HOME (highest authority page)
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

    // 📂 CATEGORY PAGES (topical hubs)
    {
      url: `${BASE_URL}/categories/home-problems`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categories/garden-problems`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/categories/home-calculators`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // 🧠 ARTICLES (SEO long tail + cluster content)
    ...articleUrls,
  ];
}