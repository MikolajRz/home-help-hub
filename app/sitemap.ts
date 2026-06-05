import type { MetadataRoute } from "next";
import { getHomeProblemPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://home-help-hub-smoky.vercel.app";

  const posts = getHomeProblemPosts();

  const articleUrls = posts.map((post) => ({
    url: `${baseUrl}/home-problems/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/home-problems`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/garden-problems`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/categories/home-calculators`,
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}