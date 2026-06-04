import Link from "next/link";

export const metadata = {
  title: "Home Help Hub - Home Repairs, Gardening & Calculators",
  description:
    "Find solutions for home problems, gardening issues and useful calculators for everyday life.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-5xl font-bold">
        Home Help Hub
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Practical solutions for home repairs, gardening and useful calculators.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <Link href="/categories/home-problems" className="border p-6 rounded">
          Home Problems
        </Link>

        <Link href="/categories/garden-problems" className="border p-6 rounded">
          Garden Problems
        </Link>

        <Link href="/categories/home-calculators" className="border p-6 rounded">
          Calculators
        </Link>
      </div>
    </main>
  );
}