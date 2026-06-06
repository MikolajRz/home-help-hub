import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Hometopia",
  description:
    "Terms of Use for Hometopia. Learn about acceptable use, intellectual property, disclaimers, and limitations of liability for our home and garden guides.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
          <span className="text-sm font-medium text-[#2d5a2c]">⚖️ Legal</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e] mb-4">
          Terms of Use
        </h1>
        <p className="text-[#6b7c6b] mb-10">
          Last updated: {new Date().toDateString()}
        </p>

        {/* INTRO */}
        <section className="mb-10">
          <p className="text-[#4a5b4a] leading-relaxed">
            Welcome to Hometopia. By accessing or using this website, you agree
            to be bound by these Terms of Use. If you do not agree with any part
            of these terms, please do not use our website.
          </p>
        </section>

        {/* 1. USE OF CONTENT */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            1. Use of Content
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed mb-3">
            All content on Hometopia — including articles, guides, images, 
            calculators, and graphics — is for informational purposes only.
          </p>
          <ul className="list-disc list-inside text-[#4a5b4a] space-y-2 ml-4">
            <li>You may read, share, and reference our content for personal, non-commercial use</li>
            <li>You may not copy, reproduce, or redistribute our content without written permission</li>
            <li>You may not use our content for commercial purposes without authorization</li>
          </ul>
        </section>

        {/* 2. INFORMATIONAL PURPOSE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            2. Informational Purpose Only
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            The information provided on Hometopia is for general informational 
            and educational purposes only. While we strive to provide accurate 
            and up-to-date information, we make no representations or warranties 
            of any kind, express or implied, about the completeness, accuracy, 
            reliability, suitability, or availability of the information.
          </p>
        </section>

        {/* 3. NO PROFESSIONAL ADVICE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            3. No Professional Advice
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            Hometopia provides home improvement, gardening, and DIY guidance. 
            However, this information is not a substitute for professional advice 
            from licensed contractors, electricians, plumbers, or other qualified 
            professionals. Always consult a qualified professional before 
            undertaking any home repair or improvement project.
          </p>
        </section>

        {/* 4. LIMITATION OF LIABILITY */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            4. Limitation of Liability
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            To the fullest extent permitted by law, Hometopia shall not be liable 
            for any direct, indirect, incidental, consequential, or punitive damages 
            arising from your use of or reliance on any information provided on 
            this website. You assume full responsibility for any actions you take 
            based on the content of this site.
          </p>
        </section>

        {/* 5. EXTERNAL LINKS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            5. External Links
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            Our website may contain links to third-party websites. These links 
            are provided for your convenience. We have no control over the content 
            or practices of these sites and assume no responsibility for them.
          </p>
        </section>

        {/* 6. INTELLECTUAL PROPERTY */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            6. Intellectual Property
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            All content, trademarks, logos, and intellectual property on Hometopia 
            are owned by or licensed to us. Unauthorized use of any material may 
            violate copyright, trademark, and other laws.
          </p>
        </section>

        {/* 7. CHANGES TO TERMS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            7. Changes to Terms
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            We reserve the right to modify these Terms of Use at any time. Changes 
            will be effective immediately upon posting. Your continued use of the 
            website constitutes acceptance of the modified terms.
          </p>
        </section>

        {/* 8. GOVERNING LAW */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            8. Governing Law
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            These Terms shall be governed by and construed in accordance with 
            the laws of the jurisdiction in which the website owner operates, 
            without regard to its conflict of law provisions.
          </p>
        </section>

        {/* 9. CONTACT */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2c4a2e] mb-3">
            9. Contact Us
          </h2>
          <p className="text-[#4a5b4a] leading-relaxed">
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 text-[#2d5a2c] hover:text-[#1f3d1e] underline transition"
          >
            Contact Page
          </Link>
        </section>

        {/* FOOTER NOTE */}
        <div className="mt-12 pt-6 border-t border-[#dce4d8] text-sm text-[#6b7c6b]">
          <p>
            By using Hometopia, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms of Use.
          </p>
        </div>

      </div>
    </main>
  );
}