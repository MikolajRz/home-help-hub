import Link from "next/link";
import { getHomeProblemPosts } from "@/lib/posts";

export const metadata = {
  title: "Hometopia - Best Home Products & Equipment Reviews",
  description:
    "Expert reviews, rankings, and buying guides for home appliances, kitchen gear, cleaning tools, and smart home devices. Find the best products for your home.",
};

export default function HomePage() {
  // Pobierz najnowsze artykuły (3 ostatnie) – docelowo będą to rankingi i recenzje
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
              🏠 Product Reviews • Rankings • Home Equipment
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight text-[#2c4a2e]">
              Find the Best Home Products Without the Guesswork
            </h1>

            <p className="mt-6 text-xl text-[#4a5b4a] max-w-2xl">
              In-depth reviews, side‑by‑side comparisons, and unbiased rankings of the most popular home appliances, kitchen gadgets, cleaning tools, and smart home devices.
            </p>

            <p className="mt-4 text-[#6b7c6b] max-w-2xl">
              No fluff, no paid promotions — just honest recommendations to help you choose the right equipment for your home.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                href="/categories/home-problems"
                className="bg-[#2d5a2c] hover:bg-[#1f3d1e] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md"
              >
                Explore Top Products
              </Link>

              <Link
                href="/categories/home-calculators"
                className="border-2 border-[#2d5a2c] text-[#2d5a2c] hover:bg-[#2d5a2c] hover:text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                Compare Features
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT THIS SITE IS */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#dce4d8]">
            <h2 className="text-2xl font-bold text-[#2c4a2e]">What Hometopia Is</h2>

            <p className="mt-4 text-[#4a5b4a] leading-relaxed">
              Hometopia is an independent product research platform for homeowners and renters. We test, compare, and rank the most popular home equipment — from air fryers to robot vacuums, coffee makers to cordless drills.
            </p>

            <p className="mt-4 text-[#4a5b4a] leading-relaxed">
              Every guide is built on real user feedback, technical specs, and hands‑on testing. We break down <strong className="text-[#2d5a2c]">what makes a product great</strong>, <strong className="text-[#2d5a2c]">where it falls short</strong>, and <strong className="text-[#2d5a2c]">who it’s best for</strong>.
            </p>

            <p className="mt-4 text-[#4a5b4a] leading-relaxed">
              Our goal is simple: help you make informed, confident purchasing decisions without wasting hours on research.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-[#2c4a2e] mb-8">How Hometopia Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#dce4d8]">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">1. Find a category</h3>
              <p className="text-[#4a5b4a] mt-3">
                Browse our curated lists of home products — kitchen appliances, cleaning gear, smart devices, and more.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#dce4d8]">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">2. Compare top picks</h3>
              <p className="text-[#4a5b4a] mt-3">
                Read detailed comparisons of features, performance, price, and value.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#dce4d8]">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">3. Choose with confidence</h3>
              <p className="text-[#4a5b4a] mt-3">
                Get clear recommendations tailored to your needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* LATEST GUIDES - NOWA SEKCJA (dynamicznie z artykułów) */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#2c4a2e]">Latest Rankings & Reviews</h2>
            <Link 
              href="/categories/home-problems" 
              className="text-[#2d5a2c] hover:text-[#1f3d1e] font-medium text-sm flex items-center gap-1"
            >
              View all reviews
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
                    <span>Read review</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-[#dce4d8] p-8 text-center">
              <p className="text-[#4a5b4a]">No rankings yet. Check back soon!</p>
            </div>
          )}
        </section>

        {/* TOPIC CLUSTERS PREVIEW – zmienione na kategorie produktów */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-[#2c4a2e] mb-8">Shop by Category</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#dce4d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Kitchen Appliances</h3>
              <p className="text-[#4a5b4a] mt-3">
                Air fryers, coffee makers, blenders, toasters, and more — ranked by performance and value.
              </p>
              <Link
                href="/categories/home-problems"
                className="inline-block mt-4 text-[#2d5a2c] font-medium hover:underline"
              >
                Explore kitchen gear →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#dce4d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Cleaning & Organization</h3>
              <p className="text-[#4a5b4a] mt-3">
                Robot vacuums, cordless sticks, mops, storage solutions — find the best for your home.
              </p>
              <Link
                href="/categories/home-problems"
                className="inline-block mt-4 text-[#2d5a2c] font-medium hover:underline"
              >
                Explore cleaning tools →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#dce4d8] shadow-sm">
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Home Decor & Lighting</h3>
              <p className="text-[#4a5b4a] mt-3">
                Smart bulbs, lamps, wall art, mirrors — upgrade your interior with top‑rated decor.
              </p>
              <Link
                href="/categories/garden-problems"
                className="inline-block mt-4 text-[#2d5a2c] font-medium hover:underline"
              >
                Explore decor ideas →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ MINI SECTION – zmienione na pytania o produkty */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl p-8 border border-[#dce4d8] shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c4a2e]">Quick FAQ</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold text-[#2c4a2e]">How do you test the products?</h3>
                <p className="text-[#4a5b4a] mt-2">
                  We analyze hundreds of real user reviews, technical specs, and expert tests. We also verify long‑term reliability and value.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2c4a2e]">Are these affiliate links?</h3>
                <p className="text-[#4a5b4a] mt-2">
                  Some links are affiliate links, which help support the site at no extra cost to you. Our reviews remain completely independent.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2c4a2e]">How often do you update rankings?</h3>
                <p className="text-[#4a5b4a] mt-2">
                  We refresh our lists quarterly and whenever important new models are released.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY CARDS – zmienione etykiety */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <h2 className="text-3xl font-bold text-[#2c4a2e] mb-8">Explore Categories</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/categories/home-problems"
              className="bg-white border border-[#dce4d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Home Appliances</h3>
              <p className="text-[#4a5b4a] mt-3">
                Air fryers, refrigerators, washing machines, and more.
              </p>
            </Link>

            <Link
              href="/categories/garden-problems"
              className="bg-white border border-[#dce4d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2c4a2e]">Home Decor</h3>
              <p className="text-[#4a5b4a] mt-3">
                Furniture, lighting, wall art, and decorative accessories.
              </p>
            </Link>

            <Link
              href="/categories/home-calculators"
              className="bg-white border border-[#dce4d8] rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#2c4a2e]">DIY & Tools</h3>
              <p className="text-[#4a5b4a] mt-3">
                Cordless drills, tool sets, and home improvement gear.
              </p>
            </Link>
          </div>
        </section>

        {/* FEATURED SECTION - Most searched problems -> Most popular products */}
        <section className="max-w-7xl mx-auto px-4 pb-12">
          <div className="bg-white rounded-2xl p-8 border border-[#dce4d8] shadow-sm">
            <h2 className="text-2xl font-bold text-[#2c4a2e]">Most Popular Products Right Now</h2>

            <p className="text-[#6b7c6b] mt-2">
              Highly rated items our readers love.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <Link
                href="/home-problems/radiator-not-heating"
                className="bg-white border border-[#dce4d8] rounded-lg p-4 hover:bg-[#f0ede5] transition text-[#2c4a2e]"
              >
                Best Air Fryers 2025
              </Link>

              <Link
                href="/home-problems/boiler-not-working"
                className="bg-white border border-[#dce4d8] rounded-lg p-4 hover:bg-[#f0ede5] transition text-[#2c4a2e]"
              >
                Top Robot Vacuums
              </Link>

              <Link
                href="/home-problems/water-pressure-low"
                className="bg-white border border-[#dce4d8] rounded-lg p-4 hover:bg-[#f0ede5] transition text-[#2c4a2e]"
              >
                Best Coffee Makers
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST SECTION - Why Hometopia exists (nowa misja) */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="bg-gradient-to-br from-white to-[#f0ede5] rounded-2xl p-8 border border-[#dce4d8] shadow-sm">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
                <span className="text-sm font-medium text-[#2d5a2c]">🎯 Our Mission</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c4a2e] mb-6">
                Why Hometopia Exists
              </h2>
              
              <div className="space-y-4 text-[#4a5b4a] leading-relaxed">
                <p>
                  Choosing the right home equipment is harder than ever — hundreds of brands, conflicting reviews, hidden specs.
                </p>

                <p>
                  <strong className="text-[#2d5a2c]">Hometopia cuts through the noise.</strong> We aggregate real user experiences, test data, and value for money to give you clear, unbiased recommendations.
                </p>

                <p>
                  Whether you need a new air fryer, a quiet vacuum, or smart lighting, we help you find the product that truly fits your home and lifestyle.
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