import { notFound } from "next/navigation";

type SEOPageData = {
  title: string;
  description: string;
  steps: string[];
};

const data: Record<string, SEOPageData> = {
  "how-to-fix-low-water-pressure": {
    title: "How to fix low water pressure",
    description: "Step-by-step guide to increase water pressure in your home",
    steps: [
      "Check main water valve",
      "Clean aerators",
      "Inspect pipes for blockage",
    ],
  },
  "how-to-unblock-sink": {
    title: "How to unblock a sink fast",
    description: "Simple methods to unblock kitchen sinks",
    steps: [
      "Use plunger",
      "Clean trap",
      "Use baking soda and vinegar",
    ],
  },
};

export default function SEOPage({ params }: { params: { slug: string } }) {
  const page = data[params.slug];

  if (!page) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <p className="text-gray-600 mt-2">{page.description}</p>

      <div className="mt-6">
        <h2 className="font-semibold">Steps</h2>
        <ol className="list-decimal ml-6 mt-2">
          {page.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}