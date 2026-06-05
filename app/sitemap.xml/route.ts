import { getHomeProblemPosts } from "@/lib/posts";

export async function GET() {
  const baseUrl = "https://home-help-hub-smoky.vercel.app";

  const posts = getHomeProblemPosts();

  const urls = [
    baseUrl,
    `${baseUrl}/categories/home-problems`,
    `${baseUrl}/categories/garden-problems`,
    `${baseUrl}/categories/home-calculators`,
    ...posts.map((p) => `${baseUrl}/home-problems/${p.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}