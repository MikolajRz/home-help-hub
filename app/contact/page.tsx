import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Home Help Hub",
  description:
    "Get in touch with Home Help Hub. Report issues, suggest topics, or ask questions about home repairs, gardening, and DIY guides.",
  openGraph: {
    title: "Contact | Home Help Hub",
    description:
      "Contact the Home Help Hub team for questions, feedback, or collaboration.",
    url: "https://home-help-hub-smoky.vercel.app/contact",
    siteName: "Home Help Hub",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-gray-100">
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Contact Home Help Hub
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          We’re here to help you improve your home knowledge. Whether you have
          a question about a guide, want to suggest a topic, or report an
          issue — feel free to reach out.
        </p>

        <p className="mt-3 text-gray-400">
          This platform focuses on practical home repair knowledge, gardening
          solutions, and everyday DIY troubleshooting guides.
        </p>
      </section>

      {/* TRUST / E-E-A-T */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
          <h2 className="text-2xl font-semibold">
            Why you can contact us
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Home Help Hub is built as a structured knowledge base for homeowners.
            We continuously improve our guides based on user feedback, common
            real-world problems, and practical home maintenance cases.
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Report unclear or outdated information</li>
            <li>Suggest new home repair topics</li>
            <li>Request step-by-step guides</li>
            <li>Ask about specific DIY problems</li>
          </ul>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>

        <div className="grid gap-4">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-300 mt-2">
              For general inquiries and feedback:
            </p>
            <p className="mt-2 text-indigo-400">
              support@homehelphub.com
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-lg">Content suggestions</h3>
            <p className="text-gray-300 mt-2">
              If you want a guide written for a specific problem:
            </p>
            <p className="mt-2 text-gray-400">
              Describe your issue clearly (e.g. “radiator not heating top but
              bottom warm”).
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6">
            <h3 className="font-semibold text-lg">Collaboration</h3>
            <p className="text-gray-300 mt-2">
              We are open to partnerships related to home improvement content,
              DIY tools, and educational resources.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ STYLE TRUST BOOST */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">FAQ</h2>

        <div className="space-y-4">
          <div className="bg-[#111827] border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">
              How fast do you respond?
            </h3>
            <p className="text-gray-300 mt-2">
              Usually within a few days, depending on request volume.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">
              Can I request a new article?
            </h3>
            <p className="text-gray-300 mt-2">
              Yes — we prioritize practical, real-world home issues.
            </p>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-xl p-5">
            <h3 className="font-semibold">
              Is this site professional advice?
            </h3>
            <p className="text-gray-300 mt-2">
              It provides informational guides, not licensed professional
              services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold">
            Still need help?
          </h2>

          <p className="text-gray-300 mt-3">
            Browse our most popular troubleshooting guides or start with home
            problem categories.
          </p>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <a
              href="/categories/home-problems"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-lg transition"
            >
              Browse Guides
            </a>

            <a
              href="/"
              className="border border-white/10 px-5 py-3 rounded-lg hover:bg-[#111827] transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}