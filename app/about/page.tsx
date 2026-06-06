import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Hometopia | Home & Garden Solutions",
  description:
    "Learn about Hometopia, how our guides are created, and the mission behind providing practical home and garden repair information.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="max-w-4xl mx-auto px-4 py-6">

        {/* HERO */}
        <div className="mb-10">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">🌿 About Hometopia</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e]">
            Helping Homeowners Solve Everyday Problems
          </h1>
          <p className="mt-4 text-lg text-[#4a5b4a] max-w-2xl leading-relaxed">
            Hometopia was created to make home maintenance, gardening, and DIY problem solving easier to understand. The goal is simple: provide practical, structured, and easy-to-follow information that helps homeowners identify common issues and understand potential solutions.
          </p>
        </div>

        {/* WHO WE ARE */}
        <section className="bg-white border border-[#dce4d8] rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2c4a2e]">
            Who Is Behind Hometopia?
          </h2>
          <div className="mt-4 space-y-4 text-[#4a5b4a] leading-relaxed">
            <p>
              Hometopia is an independent educational project focused on household troubleshooting, maintenance knowledge, gardening advice, and practical home improvement information.
            </p>
            <p>
              The website is managed by home maintenance and DIY enthusiasts who believe that many household issues can be understood and resolved with clear, step-by-step guidance.
            </p>
            <p>
              While the information provided on this website is intended for educational purposes, readers should always assess their own situation and seek qualified professional assistance when necessary.
            </p>
          </div>
        </section>

        {/* WHY THIS SITE EXISTS */}
        <section className="bg-white border border-[#dce4d8] rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2c4a2e]">
            Why Hometopia Was Created
          </h2>
          <div className="mt-4 space-y-4 text-[#4a5b4a] leading-relaxed">
            <p>
              Many homeowners encounter the same challenge when searching online: information is often overly technical, incomplete, or difficult to apply in real-life situations.
            </p>
            <p>
              Hometopia was built to bridge that gap by turning complex topics into practical guides that focus on symptoms, causes, diagnostics, and potential solutions.
            </p>
            <p>
              Rather than providing generic advice, articles are structured around common household problems that people frequently search for, such as heating failures, plumbing issues, moisture problems, appliance troubleshooting, and garden maintenance.
            </p>
          </div>
        </section>

        {/* HOW CONTENT IS CREATED */}
        <section className="bg-white border border-[#dce4d8] rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2c4a2e]">
            How Our Content Is Created
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2c4a2e]">
                📚 Research-Based Writing
              </h3>
              <p className="mt-2 text-[#4a5b4a] leading-relaxed">
                Articles are developed using publicly available technical documentation, manufacturer recommendations, maintenance guidelines, industry best practices, and common troubleshooting procedures.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2c4a2e]">
                🔧 Structured Problem Solving
              </h3>
              <p className="mt-2 text-[#4a5b4a] leading-relaxed">
                Each guide is designed to help readers understand symptoms, identify likely causes, perform basic checks, and determine when professional assistance may be required.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2c4a2e]">
                🔄 Continuous Updates
              </h3>
              <p className="mt-2 text-[#4a5b4a] leading-relaxed">
                Content is reviewed and improved over time to ensure information remains clear, useful, and relevant for homeowners.
              </p>
            </div>
          </div>
        </section>

        {/* EDITORIAL PRINCIPLES */}
        <section className="bg-white border border-[#dce4d8] rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#2c4a2e]">
            Our Editorial Principles
          </h2>
          <ul className="mt-6 space-y-3 text-[#4a5b4a]">
            <li className="flex items-start gap-2">
              <span className="text-[#2d5a2c] text-xl">✓</span>
              <span>Prioritize practical, actionable information</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2d5a2c] text-xl">✓</span>
              <span>Explain problems in plain language</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2d5a2c] text-xl">✓</span>
              <span>Encourage safe DIY practices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2d5a2c] text-xl">✓</span>
              <span>Clearly indicate when professional help may be required</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2d5a2c] text-xl">✓</span>
              <span>Continuously improve content quality and accuracy</span>
            </li>
          </ul>
        </section>

        {/* CONTACT */}
        <section className="bg-white border border-[#dce4d8] rounded-2xl p-8 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-[#2c4a2e]">
            Contact & Feedback
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-relaxed">
            If you notice inaccurate information, have suggestions for new topics, or would like to contact the website owner, please visit the contact page.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-[#2d5a2c] hover:bg-[#1f3d1e] text-white px-6 py-3 rounded-full transition shadow-sm"
          >
            Contact Hometopia
          </Link>
        </section>

      </div>
    </main>
  );
}