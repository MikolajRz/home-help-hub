import Link from "next/link";

export const metadata = {
  title: "Home Help Hub - Home Repairs, Gardening & Calculators",
  description:
    "Step-by-step home repair guides, gardening solutions, and useful calculators for everyday problems.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 relative">
          <span className="inline-block bg-[#111827] border border-white/10 rounded-full px-3 py-1 text-sm text-gray-300">
            DIY • Home Repairs • Gardening
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Fix Home Problems Faster
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Practical guides, troubleshooting tips and calculators to help
            homeowners solve everyday problems.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/categories/home-problems"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Browse Guides
            </Link>

            <Link
              href="/categories/home-calculators"
              className="border border-white/10 px-6 py-3 rounded-lg hover:bg-[#111827] transition"
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
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">
              Home Problems
            </h3>
            <p className="text-gray-300 mt-3">
              Step-by-step fixes for common household issues.
            </p>
          </Link>

          <Link
            href="/categories/garden-problems"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">
              Garden Problems
            </h3>
            <p className="text-gray-300 mt-3">
              Gardening tips, plant care and outdoor solutions.
            </p>
          </Link>

          <Link
            href="/categories/home-calculators"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">
              Home Calculators
            </h3>
            <p className="text-gray-300 mt-3">
              Useful tools for planning home projects.
            </p>
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">
            Most Popular Topics
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Link
              href="/home-problems/radiator-not-heating"
              className="bg-[#0f172a] border border-white/10 rounded-lg p-4 hover:bg-[#1f2937] transition"
            >
              Why is my radiator not heating?
            </Link>

            <Link
              href="/home-problems/boiler-not-working"
              className="bg-[#0f172a] border border-white/10 rounded-lg p-4 hover:bg-[#1f2937] transition"
            >
              Boiler not working
            </Link>

            <Link
              href="/home-problems/water-pressure-low"
              className="bg-[#0f172a] border border-white/10 rounded-lg p-4 hover:bg-[#1f2937] transition"
            >
              Low water pressure
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">
            About Home Help Hub
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            Home Help Hub provides practical guides for homeowners.
            We focus on common repair problems, gardening solutions
            and useful calculators that help save time and money.
          </p>
        </div>
      </section>
    </main>
  );
}