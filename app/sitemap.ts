import type { MetadataRoute } from "next";
import { getHomeProblemPosts } from "@/lib/posts";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://home-help-hub-smoky.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getHomeProblemPosts();

  // Artykuły (dynamiczne)
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

  // Kalkulatory
  const calculatorUrls: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/calculators/paint`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/calculators/floor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [
    // 🏠 HOME (najwyższy priorytet)
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },

    // 📂 STRONY KATEGORII
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

    // 🧮 KALKULATORY
    ...calculatorUrls,

    // 📄 STATYCZNE STRONY INFORMACYJNE
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // 🧠 ARTYKUŁY (dynamiczne)
    ...articleUrls,
  ];
}