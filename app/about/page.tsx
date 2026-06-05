import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Home Help Hub",
  description:
    "Learn about Home Help Hub, how our guides are created, and the mission behind providing practical home repair and maintenance information.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* HERO */}
      <section className="mb-12">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
          About Home Help Hub
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
          Helping Homeowners Solve Everyday Problems
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-8 max-w-3xl">
          Home Help Hub was created to make home maintenance, troubleshooting,
          and DIY problem solving easier to understand. The goal is simple:
          provide practical, structured, and easy-to-follow information that
          helps homeowners identify common issues and understand potential
          solutions.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white">
          Who Is Behind Home Help Hub?
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          Home Help Hub is an independent educational project focused on
          household troubleshooting, maintenance knowledge, gardening advice,
          and practical home improvement information.
        </p>

        <p className="mt-4 text-gray-300 leading-8">
          The website is managed by an enthusiast of home maintenance,
          DIY repairs, and technical problem-solving who believes that many
          household issues can be understood and resolved with clear,
          step-by-step guidance.
        </p>

        <p className="mt-4 text-gray-300 leading-8">
          While the information provided on this website is intended for
          educational purposes, readers should always assess their own
          situation and seek qualified professional assistance when necessary.
        </p>
      </section>

      {/* WHY THIS SITE EXISTS */}
      <section className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white">
          Why Home Help Hub Was Created
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          Many homeowners encounter the same challenge when searching online:
          information is often overly technical, incomplete, or difficult to
          apply in real-life situations.
        </p>

        <p className="mt-4 text-gray-300 leading-8">
          Home Help Hub was built to bridge that gap by turning complex topics
          into practical guides that focus on symptoms, causes, diagnostics,
          and potential solutions.
        </p>

        <p className="mt-4 text-gray-300 leading-8">
          Rather than providing generic advice, articles are structured around
          common household problems that people frequently search for, such as
          heating failures, plumbing issues, moisture problems, appliance
          troubleshooting, and garden maintenance.
        </p>
      </section>

      {/* CONTENT CREATION */}
      <section className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white">
          How Our Content Is Created
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Research-Based Writing
            </h3>

            <p className="mt-2 text-gray-300 leading-8">
              Articles are developed using publicly available technical
              documentation, manufacturer recommendations, maintenance
              guidelines, industry best practices, and common troubleshooting
              procedures.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Structured Problem Solving
            </h3>

            <p className="mt-2 text-gray-300 leading-8">
              Each guide is designed to help readers understand symptoms,
              identify likely causes, perform basic checks, and determine when
              professional assistance may be required.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              Continuous Updates
            </h3>

            <p className="mt-2 text-gray-300 leading-8">
              Content is reviewed and improved over time to ensure information
              remains clear, useful, and relevant for homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="bg-[#111827] border border-white/10 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white">
          Our Editorial Principles
        </h2>

        <ul className="mt-6 space-y-4 text-gray-300">
          <li>
            ✓ Prioritize practical, actionable information.
          </li>

          <li>
            ✓ Explain problems in plain language.
          </li>

          <li>
            ✓ Encourage safe DIY practices.
          </li>

          <li>
            ✓ Clearly indicate when professional help may be required.
          </li>

          <li>
            ✓ Continuously improve content quality and accuracy.
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="bg-[#111827] border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white">
          Contact & Feedback
        </h2>

        <p className="mt-4 text-gray-300 leading-8">
          If you notice inaccurate information, have suggestions for new
          topics, or would like to contact the website owner, please visit the
          contact page.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-3 text-white transition"
        >
          Contact Home Help Hub
        </Link>
      </section>
    </main>
  );
}