import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://home-help-hub-smoky.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 🤖 GLOBAL RULE (Google + Bing)
      {
        userAgent: "*",
        allow: [
          "/",
          "/home-problems/",
          "/categories/",
          "/about",
          "/contact",
          "/privacy-policy",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/server/",
        ],
      },

      // 🔍 EXTRA CONTROL (Googlebot fine-tuning)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
        crawlDelay: 0,
      },
    ],

    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}