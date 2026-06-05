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
            DIY Knowledge Base • Home Repairs • Gardening • Calculators
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Fix Home Problems Without Guesswork
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Step-by-step troubleshooting guides that help you diagnose,
            understand, and fix common home issues — from heating problems to
            water pressure, gardening challenges, and everyday household
            maintenance.
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl">
            No jargon. No unnecessary complexity. Just practical explanations
            and clear actions you can follow at home — even if you have no
            technical experience.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/categories/home-problems"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              Start Fixing Problems
            </Link>

            <Link
              href="/categories/home-calculators"
              className="border border-white/10 px-6 py-3 rounded-lg hover:bg-[#111827] transition"
            >
              Use Home Tools
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">How Home Help Hub Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">1. Identify the problem</h3>
            <p className="text-gray-300 mt-3">
              Find your issue — whether it's heating, plumbing, gardening or
              general home maintenance.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">2. Understand the cause</h3>
            <p className="text-gray-300 mt-3">
              Learn what's actually happening inside your system instead of
              guessing or wasting time.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">3. Follow step-by-step fixes</h3>
            <p className="text-gray-300 mt-3">
              Simple, practical instructions that guide you from problem →
              solution without confusion.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/categories/home-problems"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">Home Problems</h3>
            <p className="text-gray-300 mt-3">
              Practical troubleshooting guides for heating, plumbing, electrical
              and general home issues.
            </p>
          </Link>

          <Link
            href="/categories/garden-problems"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">Garden Problems</h3>
            <p className="text-gray-300 mt-3">
              Learn how to maintain plants, fix garden problems and improve
              outdoor spaces efficiently.
            </p>
          </Link>

          <Link
            href="/categories/home-calculators"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">Home Calculators</h3>
            <p className="text-gray-300 mt-3">
              Calculate materials, costs and measurements for home improvement
              and DIY projects.
            </p>
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">
            Most Searched Home Problems
          </h2>

          <p className="text-gray-400 mt-2">
            Real problems people search for every day — quick access to the most
            useful guides.
          </p>

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
          <h2 className="text-2xl font-bold">Why Home Help Hub Exists</h2>

          <p className="mt-4 text-gray-300 leading-8">
            Most homeowners face the same problem: unclear advice, overly
            technical explanations, or solutions that assume professional
            knowledge.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            Home Help Hub was created to change that — by turning complex home
            maintenance topics into simple, structured and actionable guides
            anyone can follow.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            Whether you are dealing with heating issues, water pressure
            problems, or garden maintenance, every guide is designed to help you
            understand the cause first — and then fix it step by step.
          </p>
        </div>
      </section>
    </main>
  );
}