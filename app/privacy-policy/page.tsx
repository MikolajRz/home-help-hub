import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Hometopia",
  description:
    "Privacy Policy for Hometopia explaining data usage, cookies, and advertising compliance including Google AdSense.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="max-w-4xl mx-auto px-4 py-2">

        {/* HEADER */}
        <header className="mb-10">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">📋 Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e]">
            Privacy Policy
          </h1>
          <p className="text-[#6b7c6b] mt-4">
            Last updated: {new Date().toDateString()}
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-10 space-y-4 text-[#4a5b4a] leading-7">
          <p>
            This Privacy Policy explains how <strong className="text-[#2d5a2c]">Hometopia</strong>{" "}
            collects, uses, and protects information when you visit our
            website.
          </p>
          <p>
            By using this website, you agree to the practices described in
            this policy.
          </p>
        </section>

        {/* DATA COLLECTION */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            1. Information We Collect
          </h2>
          <ul className="mt-4 space-y-2 text-[#4a5b4a] list-disc list-inside">
            <li>Basic usage data (pages visited, time spent)</li>
            <li>Device information (browser type, device type)</li>
            <li>Cookies for improving user experience</li>
          </ul>
        </section>

        {/* ADSENSE */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            2. Advertising (Google AdSense)
          </h2>
          <div className="mt-4 space-y-4 text-[#4a5b4a] leading-7">
            <p>
              This website uses Google AdSense to display advertisements.
              Google may use cookies to serve ads based on your previous
              visits to this or other websites.
            </p>
            <p>
              Third-party vendors, including Google, use cookies to serve ads
              based on a user’s prior visits to this website and/or other
              websites on the Internet.
            </p>
            <p>
              You can opt out of personalized advertising by visiting:
            </p>
            <Link
              href="https://www.google.com/settings/ads"
              className="text-[#2d5a2c] hover:text-[#1f3d1e] underline transition"
              target="_blank"
            >
              Google Ads Settings
            </Link>
          </div>
        </section>

        {/* COOKIES */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            3. Cookies
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            Cookies are small text files stored on your device. We use cookies
            to improve website functionality, analyze traffic, and serve
            relevant ads.
          </p>
        </section>

        {/* THIRD PARTY */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            4. Third-Party Services
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            We may use third-party services such as analytics providers and
            advertising networks. These services may collect information in
            accordance with their own privacy policies.
          </p>
        </section>

        {/* DATA USE */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            5. How We Use Information
          </h2>
          <ul className="mt-4 space-y-2 text-[#4a5b4a] list-disc list-inside">
            <li>Improve website performance and user experience</li>
            <li>Analyze traffic and content engagement</li>
            <li>Serve relevant advertisements</li>
          </ul>
        </section>

        {/* GDPR NOTE */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            6. Your Rights (GDPR)
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            If you are located in the European Economic Area (EEA), you have
            rights under GDPR, including access, correction, and deletion of
            personal data where applicable.
          </p>
        </section>

        {/* SECURITY */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            7. Data Security
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            We take reasonable measures to protect user data, but no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        {/* CHILDREN */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            8. Children’s Privacy
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            This website is not intended for children under the age of 13. We
            do not knowingly collect personal information from children.
          </p>
        </section>

        {/* CONTACT */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[#2c4a2e]">
            9. Contact
          </h2>
          <p className="mt-4 text-[#4a5b4a] leading-7">
            If you have any questions about this Privacy Policy, you can contact
            us via our contact page.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 text-[#2d5a2c] hover:text-[#1f3d1e] underline transition"
          >
            Go to Contact Page
          </Link>
        </section>

        {/* FOOTER NOTE */}
        <section className="mt-16 border-t border-[#dce4d8] pt-6 text-sm text-[#6b7c6b]">
          <p>
            This Privacy Policy may be updated from time to time. Continued use
            of this website means you accept any changes.
          </p>
        </section>

      </div>
    </main>
  );
}