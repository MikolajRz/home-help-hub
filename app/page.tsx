import Link from "next/link";

export const metadata = {
  title: "Home Help Hub - Home Repairs, Gardening & Calculators",
  description:
    "Step-by-step home repair guides, gardening solutions, and useful calculators for everyday problems.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-gray-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 pt-10 pb-20 relative">
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
            No jargon. No unnecessary complexity. Clear explanations and
            practical actions you can follow at home — even without technical
            experience.
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

      {/* WHAT THIS SITE IS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">What this site is</h2>

          <p className="mt-4 text-gray-300 leading-8">
            Home Help Hub is a structured knowledge base for homeowners who want
            to understand and fix everyday household problems without relying on
            vague advice or expensive callouts.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            Each guide is written in a step-by-step format: first we explain
            <strong className="text-white"> what is happening</strong>, then
            <strong className="text-white"> why it happens</strong>, and finally
            <strong className="text-white"> how to fix it</strong>.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            The goal is simple: help you solve the problem yourself in the
            shortest possible time, with clear instructions and no unnecessary
            complexity.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">How Home Help Hub Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">1. Identify the problem</h3>
            <p className="text-gray-300 mt-3">
              Search for your issue — heating, plumbing, gardening or general
              maintenance.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">2. Understand the cause</h3>
            <p className="text-gray-300 mt-3">
              Learn what is actually happening inside the system instead of
              guessing.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">
              3. Follow step-by-step fixes
            </h3>
            <p className="text-gray-300 mt-3">
              Simple instructions that guide you from problem to solution.
            </p>
          </div>
        </div>
      </section>

      {/* TOPIC CLUSTERS PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8">Topic clusters</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">Heating problems</h3>
            <p className="text-gray-300 mt-3">
              Radiators, boilers, pressure issues and circulation faults.
            </p>
            <Link
              href="/categories/home-problems"
              className="inline-block mt-4 text-indigo-400 hover:text-indigo-300"
            >
              Explore heating guides →
            </Link>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">Water & plumbing</h3>
            <p className="text-gray-300 mt-3">
              Low pressure, leaks, flow issues and system diagnostics.
            </p>
            <Link
              href="/categories/home-problems"
              className="inline-block mt-4 text-indigo-400 hover:text-indigo-300"
            >
              Explore plumbing guides →
            </Link>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold">Garden care</h3>
            <p className="text-gray-300 mt-3">
              Plant problems, soil issues and seasonal maintenance.
            </p>
            <Link
              href="/categories/garden-problems"
              className="inline-block mt-4 text-indigo-400 hover:text-indigo-300"
            >
              Explore garden guides →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ MINI SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Quick FAQ</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-white">
                Can I fix these problems without tools?
              </h3>
              <p className="text-gray-300 mt-2">
                Many issues like bleeding radiators or adjusting valves require
                only basic household tools.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Do I need technical knowledge?
              </h3>
              <p className="text-gray-300 mt-2">
                No. All guides are written for beginners with step-by-step
                explanations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                What if the problem is serious?
              </h3>
              <p className="text-gray-300 mt-2">
                Each guide includes a clear point where you should contact a
                professional.
              </p>
            </div>
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
              Heating, plumbing, electrical and general home troubleshooting.
            </p>
          </Link>

          <Link
            href="/categories/garden-problems"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">Garden Problems</h3>
            <p className="text-gray-300 mt-3">
              Plant care, soil issues and outdoor maintenance guides.
            </p>
          </Link>

          <Link
            href="/categories/home-calculators"
            className="bg-[#111827] border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-indigo-400/40 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">Home Calculators</h3>
            <p className="text-gray-300 mt-3">
              Material, cost and measurement tools for DIY projects.
            </p>
          </Link>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold">Most searched problems</h2>

          <p className="text-gray-400 mt-2">
            Real issues people search for every day.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Link
              href="/home-problems/radiator-not-heating"
              className="bg-[#0f172a] border border-white/10 rounded-lg p-4 hover:bg-[#1f2937] transition"
            >
              Radiator not heating
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
          <h2 className="text-2xl font-bold">Why Home Help Hub exists</h2>

          <p className="mt-4 text-gray-300 leading-8">
            The internet is full of incomplete or overly technical advice that
            assumes prior knowledge.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            This site exists to simplify home maintenance into structured,
            understandable steps anyone can follow.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            Every guide focuses on understanding the cause first, then applying
            a practical fix.
          </p>
        </div>
      </section>
    </main>
  );
}