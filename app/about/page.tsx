import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Home Help Hub",
  description:
    "Learn more about Home Help Hub — a practical knowledge base for home repairs, gardening, and DIY troubleshooting guides.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-16">

        {/* HEADER */}
        <header>
          <h1 className="text-4xl font-bold leading-tight">
            About Home Help Hub
          </h1>

          <p className="text-gray-300 mt-4 text-lg leading-relaxed">
            Home Help Hub is a structured knowledge platform focused on helping
            homeowners solve everyday problems — without unnecessary jargon,
            guesswork, or expensive professional intervention when it's not
            required.
          </p>
        </header>

        {/* WHAT THIS SITE IS */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">What this site is</h2>

          <p className="mt-4 text-gray-300 leading-8">
            This website is a practical, step-by-step guide library covering
            common household issues such as heating systems, plumbing,
            gardening, and home maintenance problems.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            Each article is designed to explain:
          </p>

          <ul className="mt-4 list-disc ml-6 text-gray-300 space-y-2">
            <li>What the problem is</li>
            <li>Why it happens</li>
            <li>How to diagnose it</li>
            <li>How to fix it step by step</li>
          </ul>
        </section>

        {/* E-E-A-T SECTION */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Our approach (E-E-A-T)</h2>

          <p className="mt-4 text-gray-300 leading-8">
            Home Help Hub follows a structured approach focused on clarity,
            accuracy, and real-world usability.
          </p>

          <div className="mt-6 space-y-4 text-gray-300">
            <p>
              <strong className="text-white">Experience:</strong> Content is
              written from real-world home maintenance scenarios and common
              household failures.
            </p>

            <p>
              <strong className="text-white">Expertise:</strong> Guides are
              structured based on technical reasoning behind systems such as
              heating and plumbing.
            </p>

            <p>
              <strong className="text-white">Authority:</strong> Articles are
              designed to build topic clusters around home repair categories.
            </p>

            <p>
              <strong className="text-white">Trust:</strong> No misleading
              shortcuts — only safe, verifiable, step-by-step solutions.
            </p>
          </div>
        </section>

        {/* TOPIC AREAS */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">What we cover</h2>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Link
              href="/categories/home-problems"
              className="bg-[#111827] border border-white/10 rounded-xl p-5 hover:border-indigo-400/40 transition"
            >
              <h3 className="font-semibold text-white">
                Home Problems
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Heating, plumbing, boilers, radiators and everyday repairs.
              </p>
            </Link>

            <Link
              href="/categories/garden-problems"
              className="bg-[#111827] border border-white/10 rounded-xl p-5 hover:border-indigo-400/40 transition"
            >
              <h3 className="font-semibold text-white">
                Garden Problems
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Plant care, soil issues, watering systems and outdoor fixes.
              </p>
            </Link>

            <Link
              href="/categories/home-calculators"
              className="bg-[#111827] border border-white/10 rounded-xl p-5 hover:border-indigo-400/40 transition"
            >
              <h3 className="font-semibold text-white">
                Calculators
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Material estimates, cost planning and DIY measurements.
              </p>
            </Link>
          </div>
        </section>

        {/* TRANSPARENCY / ADSENSE READY */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Transparency</h2>

          <p className="mt-4 text-gray-300 leading-8">
            This website may display advertising in the future to support
            hosting and content development costs.
          </p>

          <p className="mt-4 text-gray-300 leading-8">
            Ads do not influence the structure or content of educational
            articles. Our priority remains clarity and usefulness for users.
          </p>
        </section>

        {/* INTERNAL NAVIGATION */}
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Explore more</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/"
              className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg transition"
            >
              Go to Home
            </Link>

            <Link
              href="/categories/home-problems"
              className="border border-white/10 px-5 py-3 rounded-lg hover:bg-[#111827] transition"
            >
              Browse Guides
            </Link>

            <Link
              href="/contact"
              className="border border-white/10 px-5 py-3 rounded-lg hover:bg-[#111827] transition"
            >
              Contact
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}