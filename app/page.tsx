import Link from "next/link";

export const metadata = {
  title: "Home Help Hub - Home Repairs, Gardening & Calculators",
  description:
    "Step-by-step home repair guides, gardening solutions, and useful calculators for everyday problems.",
};

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <div className="max-w-3xl">
          <span className="inline-block bg-white border rounded-full px-3 py-1 text-sm">
            DIY • Home Repairs • Gardening
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Fix Home Problems Faster
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            Practical guides, troubleshooting tips and calculators to help
            homeowners solve everyday problems.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/categories/home-problems"
              className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Browse Guides
            </Link>

            <Link
              href="/categories/home-calculators"
              className="border px-6 py-3 rounded-lg hover:bg-white transition"
            >
              Open Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">
          Explore Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/categories/home-problems"
            className="bg-white rounded-xl border p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">
              Home Problems
            </h3>

            <p className="text-gray-600 mt-3">
              Step-by-step fixes for common household issues.
            </p>
          </Link>

          <Link
            href="/categories/garden-problems"
            className="bg-white rounded-xl border p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">
              Garden Problems
            </h3>

            <p className="text-gray-600 mt-3">
              Gardening tips, plant care and outdoor solutions.
            </p>
          </Link>

          <Link
            href="/categories/home-calculators"
            className="bg-white rounded-xl border p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">
              Home Calculators
            </h3>

            <p className="text-gray-600 mt-3">
              Useful tools for planning home projects.
            </p>
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">
            Most Popular Topics
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Link
              href="/home-problems/radiator-not-heating"
              className="border rounded-lg p-4 hover:shadow transition"
            >
              Why is my radiator not heating?
            </Link>

            <Link
              href="/home-problems/boiler-not-working"
              className="border rounded-lg p-4 hover:shadow transition"
            >
              Boiler not working
            </Link>

            <Link
              href="/home-problems/water-pressure-low"
              className="border rounded-lg p-4 hover:shadow transition"
            >
              Low water pressure
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="bg-white rounded-2xl border p-8">
          <h2 className="text-2xl font-bold">
            About Home Help Hub
          </h2>

          <p className="mt-4 text-gray-600 leading-8">
            Home Help Hub provides practical guides for homeowners.
            We focus on common repair problems, gardening solutions
            and useful calculators that help save time and money.
          </p>
        </div>
      </section>
    </main>
  );
}