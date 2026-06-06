import Link from "next/link";
import { getHomeProblemPosts } from "@/lib/posts";

export const metadata = {
  title: "Hometopia - Home & Garden Solutions, Repairs & DIY",
  description:
    "Practical home and garden guides, DIY repairs, plant care, and smart solutions for your everyday household challenges.",
};

export default function HomePage() {
  // Pobierz najnowsze artykuły (3 ostatnie)
  const allPosts = getHomeProblemPosts();
  const latestPosts = allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <main className="min-h-screen relative bg-[#f8f6f0] text-gray-800">
      
      {/* TŁO CAŁEJ STRONY Z PRZEZROCZYSTOŚCIĄ 5% */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23365c42' stroke-width='1'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E\")",
             backgroundRepeat: "repeat",
             backgroundSize: "30px"
           }}>
      </div>

      {/* TREŚĆ STRONY - NA WIERZCHU */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 pt-8 pb-16">
            <span className="inline-block bg-[#2d5a2c] text-white rounded-full px-4 py-1.5 text-sm font-medium">
              🌿 DIY Knowledge Base • Home Repairs • Gardening • Calculators
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-[#2c4a2e]">
              Fix Home & Garden Problems Without Guesswork
            </h1>

            <p className="mt-6 text-xl text-[#4a5b4a] max-w-2xl">
              Step-by-step troubleshooting guides that help you diagnose,
              understand, and fix common home issues — from heating problems to
              water pressure, gardening challenges, and everyday household
              maintenance.
            </p>

            <p className="mt-4 text-[#6b7c6b] max-w-2xl">
              No jargon. No unnecessary complexity. Clear explanations and
              practical actions you can follow at home — even without technical
              experience.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/categories/home-problems"
                className="bg-[#2d5a2c] hover:bg-[#1f3d1e] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md"
              >
                Start Fixing Problems
              </Link>

              <Link
                href="/categories/home-calculators"
                className="border-2 border-[#2d5a2c] text-[#2d5a2c] hover:bg-[#2d5a2c] hover:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Use Home Tools
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT THIS SITE IS */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dce4d8]">
            <h2 className="text-2xl font-bold text-[#2c4a2e]">What Hometopia Is</h2>

            <p className="mt-4 text-[#4a5b4a] leading-relaxed">
              Hometopia is a structured knowledge base for homeowners and garden lovers who want
              to understand and fix everyday problems without relying on vague advice or expensive callouts.
            </p>

            <p className="mt-4 text-[#4a5b4a] leading-relaxed">
              Each guide is written in a step-by-step format: first we explain
              <strong className="text-[#2d5a2c]"> what is happening</strong>, then
              <strong className="text-[#2d5a2c]"> why it happens</strong>, and finally
              <strong className="text-[#2d5a2c]"> how to fix it</strong>.
            </p>

            <p className="mt-4 text-[#4a5b4a] leading-relaxed">
              The goal is simple: help you solve the problem yourself in the
              shortest possible time, with clear instructions and no unnecessary
              complexity.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-[#2c4a2e] mb-8">How Hometopia Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#dce4d8]">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">1. Identify the problem</h3>
              <p className="text-[#4a5b4a] mt-3">
                Search for your issue — heating, plumbing, gardening or general maintenance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#dce4d8]">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">2. Understand the cause</h3>
              <p className="text-[#4a5b4a] mt-3">
                Learn what is actually happening inside the system instead of guessing.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#dce4d8]">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">3. Follow step-by-step fixes</h3>
              <p className="text-[#4a5b4a] mt-3">
                Simple instructions that guide you from problem to solution.
              </p>
            </div>
          </div>
        </section>

        {/* LATEST GUIDES - NOWA SEKCJA */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#2c4a2e]">Latest Guides</h2>
            <Link 
              href="/categories/home-problems" 
              className="text-[#2d5a2c] hover:text-[#1f3d1e] font-medium text-sm flex items-center gap-1"
            >
              View all guides
              <span className="text-lg">→</span>
            </Link>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/home-problems/${post.slug}`}
                  className="group bg-white rounded-xl border border-[#dce4d8] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-sm text-[#c4a86b] font-medium mb-2">
                    {new Date(post.date).toDateString()}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c4a2e] group-hover:text-[#2d5a2c] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#4a5b4a] mt-2 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[#2d5a2c] font-medium text-sm">
                    <span>Read guide</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-[#dce4d8] p-8 text-center">
              <p className="text-[#4a5b4a]">No guides available yet. Check back soon!</p>
            </div>
          )}
        </section>

        {/* TOPIC CLUSTERS PREVIEW */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-[#2c4a2e] mb-8">Topic Clusters</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#dce4d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Heating problems</h3>
              <p className="text-[#4a5b4a] mt-3">
                Radiators, boilers, pressure issues and circulation faults.
              </p>
              <Link
                href="/categories/home-problems"
                className="inline-block mt-4 text-[#2d5a2c] font-medium hover:underline"
              >
                Explore heating guides →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#dce4d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Water & plumbing</h3>
              <p className="text-[#4a5b4a] mt-3">
                Low pressure, leaks, flow issues and system diagnostics.
              </p>
              <Link
                href="/categories/home-problems"
                className="inline-block mt-4 text-[#2d5a2c] font-medium hover:underline"
              >
                Explore plumbing guides →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#dce4d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Garden care</h3>
              <p className="text-[#4a5b4a] mt-3">
                Plant problems, soil issues and seasonal maintenance.
              </p>
              <Link
                href="/categories/garden-problems"
                className="inline-block mt-4 text-[#2d5a2c] font-medium hover:underline"
              >
                Explore garden guides →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ MINI SECTION */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl p-8 border border-[#dce4d8] shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c4a2e]">Quick FAQ</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold text-[#2c4a2e]">Can I fix these problems without tools?</h3>
                <p className="text-[#4a5b4a] mt-2">
                  Many issues like bleeding radiators or adjusting valves require
                  only basic household tools.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2c4a2e]">Do I need technical knowledge?</h3>
                <p className="text-[#4a5b4a] mt-2">
                  No. All guides are written for beginners with step-by-step explanations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2c4a2e]">What if the problem is serious?</h3>
                <p className="text-[#4a5b4a] mt-2">
                  Each guide includes a clear point where you should contact a professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY CARDS */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-[#2c4a2e] mb-8">Explore Categories</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/categories/home-problems"
              className="bg-white border border-[#dce4d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Home Problems</h3>
              <p className="text-[#4a5b4a] mt-3">
                Heating, plumbing, electrical and general home troubleshooting.
              </p>
            </Link>

            <Link
              href="/categories/garden-problems"
              className="bg-white border border-[#dce4d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Garden Problems</h3>
              <p className="text-[#4a5b4a] mt-3">
                Plant care, soil issues and outdoor maintenance guides.
              </p>
            </Link>

            <Link
              href="/categories/home-calculators"
              className="bg-white border border-[#dce4d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Home Calculators</h3>
              <p className="text-[#4a5b4a] mt-3">
                Material, cost and measurement tools for DIY projects.
              </p>
            </Link>
          </div>
        </section>

        {/* FEATURED SECTION - Most searched problems */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl p-8 border border-[#dce4d8] shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c4a2e]">Most searched problems</h2>

            <p className="text-[#6b7c6b] mt-2">
              Real issues people search for every day.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <Link
                href="/home-problems/radiator-not-heating"
                className="bg-white border border-[#dce4d8] rounded-lg p-4 hover:bg-[#f0ede5] transition text-[#2c4a2e]"
              >
                Radiator not heating
              </Link>

              <Link
                href="/home-problems/boiler-not-working"
                className="bg-white border border-[#dce4d8] rounded-lg p-4 hover:bg-[#f0ede5] transition text-[#2c4a2e]"
              >
                Boiler not working
              </Link>

              <Link
                href="/home-problems/water-pressure-low"
                className="bg-white border border-[#dce4d8] rounded-lg p-4 hover:bg-[#f0ede5] transition text-[#2c4a2e]"
              >
                Low water pressure
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST SECTION - Why Hometopia exists */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="bg-gradient-to-br from-white to-[#f0ede5] rounded-2xl p-8 border border-[#dce4d8] shadow-sm">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-[#2d5a2c]">🌱 Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c4a2e] mb-6">
                Why Hometopia Exists
              </h2>
              
              <div className="space-y-4 text-[#4a5b4a] leading-relaxed">
                <p>
                  The internet is full of incomplete or overly technical advice that assumes 
                  prior knowledge. Homeowners often feel frustrated trying to find clear, 
                  practical solutions to everyday problems.
                </p>

                <p>
                  <strong className="text-[#2d5a2c]">Hometopia was built to change that.</strong> 
                  We turn complex home maintenance into structured, understandable steps that 
                  anyone can follow — regardless of experience level.
                </p>

                <p>
                  Every guide focuses on <strong className="text-[#2d5a2c]">understanding the cause first</strong>, 
                  then applying a practical fix. No guesswork. No unnecessary complexity. 
                  Just real solutions for real homes and gardens.
                </p>
              </div>
              
              {/* Dekoracyjny separator */}
              <div className="mt-8 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#c4a86b]"></div>
                <div className="w-2 h-2 rounded-full bg-[#2d5a2c]"></div>
                <div className="w-2 h-2 rounded-full bg-[#c4a86b]"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}