import { notFound } from "next/navigation";
import { seoPages } from "@/lib/seoPages";

export async function generateStaticParams() {
  return seoPages.map((p) => ({
    slug: p.slug,
  }));
}

export default function SEOPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = seoPages.find((p) => p.slug === params.slug);

  if (!page) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{page.title}</h1>

      <p className="text-gray-600 mt-2">{page.description}</p>

      <div className="mt-6">
        <h2 className="font-semibold">Steps</h2>
        <ol className="list-decimal ml-6 mt-2">
          {page.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}