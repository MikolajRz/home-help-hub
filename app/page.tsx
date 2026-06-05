import Link from "next/link";

export const metadata = {
  title: "Home Help Hub - Home Repairs, Gardening & Calculators",
  description:
    "Step-by-step home repair guides, gardening solutions, and useful calculators for everyday problems.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-5xl font-bold">
        Home Help Hub
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Find simple solutions to common home problems, gardening issues,
        and practical calculators for everyday use.
      </p>

      {/* SEO INTRO TEXT */}
      <p className="mt-6 text-gray-600">
        Whether your radiator is not heating, your garden needs fixing,
        or you need quick home calculations — this site helps you solve
        problems step by step.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <Link
          href="/categories/home-problems"
          className="border p-6 rounded hover:shadow transition"
        >
          <h2 className="font-semibold text-lg">Home Problems</h2>
          <p className="text-sm text-gray-600 mt-2">
            Fix common home repair issues quickly.
          </p>
        </Link>

        <Link
          href="/categories/garden-problems"
          className="border p-6 rounded hover:shadow transition"
        >
          <h2 className="font-semibold text-lg">Garden Problems</h2>
          <p className="text-sm text-gray-600 mt-2">
            Solve gardening and outdoor issues.
          </p>
        </Link>

        <Link
          href="/categories/home-calculators"
          className="border p-6 rounded hover:shadow transition"
        >
          <h2 className="font-semibold text-lg">Calculators</h2>
          <p className="text-sm text-gray-600 mt-2">
            Useful tools for home calculations.
          </p>
        </Link>
      </div>
    </main>
  );
}