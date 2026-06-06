import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://home-help-hub-smoky.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 🤖 GLOBALNA REGUŁA (dla wszystkich robotów)
      {
        userAgent: "*",
        allow: [
          "/",
          "/home-problems/",
          "/categories/",
          "/calculators/",
          "/about",
          "/contact",
          "/privacy-policy",
          "/terms-of-use",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/server/",
        ],
      },

      // 🔍 GOOGLEBOT (dodatkowa optymalizacja)
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
      },

      // 🤖 BINGBOT (opcjonalnie)
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}