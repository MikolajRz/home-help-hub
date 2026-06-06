import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact | Hometopia",
  description:
    "Get in touch with Hometopia. Report issues, suggest topics, or ask questions about home repairs, gardening, and DIY guides.",
  openGraph: {
    title: "Contact | Hometopia",
    description:
      "Contact the Hometopia team for questions, feedback, or collaboration.",
    url: "https://hometopia.com/contact",
    siteName: "Hometopia",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="max-w-4xl mx-auto px-4 pt-2 pb-10">
        
        {/* BREADCRUMBS */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        {/* HERO */}
        <div className="mt-4">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">📬 Get in touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e]">
            Contact Hometopia
          </h1>
          <p className="mt-4 text-lg text-[#4a5b4a] max-w-2xl">
            We're here to help you improve your home and garden knowledge. Whether you have
            a question about a guide, want to suggest a topic, or report an issue — feel free to reach out.
          </p>
          <p className="mt-3 text-[#6b7c6b]">
            This platform focuses on practical home repair knowledge, gardening
            solutions, and everyday DIY troubleshooting guides.
          </p>
        </div>
      </div>

      {/* TRUST / E-E-A-T */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-white border border-[#dce4d8] rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            Why you can contact us
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            Hometopia is built as a structured knowledge base for homeowners.
            We continuously improve our guides based on user feedback, common
            real-world problems, and practical home maintenance cases.
          </p>
          <ul className="mt-4 list-disc list-inside text-[#4a5b4a] space-y-2">
            <li>Report unclear or outdated information</li>
            <li>Suggest new home repair topics</li>
            <li>Request step-by-step guides</li>
            <li>Ask about specific DIY problems</li>
          </ul>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-6">Get in touch</h2>
        <div className="grid gap-4">
          <div className="bg-white border border-[#dce4d8] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#2c4a2e]">📧 Email</h3>
            <p className="text-[#4a5b4a] mt-2">
              For general inquiries and feedback:
            </p>
            <p className="mt-2 text-[#2d5a2c] font-medium">
              hometopia.help@gmail.com
            </p>
          </div>

          <div className="bg-white border border-[#dce4d8] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#2c4a2e]">💡 Content suggestions</h3>
            <p className="text-[#4a5b4a] mt-2">
              If you want a guide written for a specific problem, describe your issue clearly.
            </p>
            <p className="mt-2 text-[#6b7c6b] text-sm">
              Example: "radiator not heating top but bottom warm"
            </p>
          </div>

          <div className="bg-white border border-[#dce4d8] rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-lg text-[#2c4a2e]">🤝 Collaboration</h3>
            <p className="text-[#4a5b4a] mt-2">
              We are open to partnerships related to home improvement content,
              DIY tools, and educational resources.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ STYLE TRUST BOOST */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-6">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-white border border-[#dce4d8] rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-[#2c4a2e]">
              How fast do you respond?
            </h3>
            <p className="text-[#4a5b4a] mt-2">
              Usually within a few days, depending on request volume.
            </p>
          </div>

          <div className="bg-white border border-[#dce4d8] rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-[#2c4a2e]">
              Can I request a new article?
            </h3>
            <p className="text-[#4a5b4a] mt-2">
              Yes — we prioritize practical, real-world home and garden issues.
            </p>
          </div>

          <div className="bg-white border border-[#dce4d8] rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-[#2c4a2e]">
              Is this site professional advice?
            </h3>
            <p className="text-[#4a5b4a] mt-2">
              It provides informational guides, not licensed professional services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-[#2d5a2c]/5 border border-[#2d5a2c]/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            Still need help?
          </h2>
          <p className="text-[#4a5b4a] mt-3">
            Browse our most popular troubleshooting guides or start with home problem categories.
          </p>
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <Link
              href="/categories/home-problems"
              className="bg-[#2d5a2c] hover:bg-[#1f3d1e] text-white px-6 py-3 rounded-full transition shadow-sm"
            >
              Browse Guides
            </Link>
            <Link
              href="/"
              className="border-2 border-[#2d5a2c] text-[#2d5a2c] hover:bg-[#2d5a2c] hover:text-white px-6 py-3 rounded-full transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}