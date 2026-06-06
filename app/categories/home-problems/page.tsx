import Link from "next/link";
import { getHomeProblemPosts } from "@/lib/posts";

export const metadata = {
  title: "Home Problems - Fix Household Issues | Hometopia",
  description:
    "Learn how to fix common home problems, repairs and maintenance issues with simple step-by-step guides. From heating to plumbing - practical solutions for your home.",
};

export default function HomeProblemsCategoryPage() {
  const posts = getHomeProblemPosts();

  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="max-w-7xl mx-auto px-4 py-2">
        
        {/* HEADER */}
        <div className="mb-10">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">🔧 Troubleshooting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e]">
            Home Problems
          </h1>
          <p className="mt-4 text-lg text-[#4a5b4a] max-w-2xl">
            Step-by-step solutions for common household issues and repairs. 
            From heating problems to plumbing fixes — practical guides you can follow at home.
          </p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/home-problems/${post.slug}`}
              className="group bg-white rounded-2xl border border-[#dce4d8] p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* ARTICLE CARD */}
              <div>
                {/* INDEX NUMBER */}
                <div className="text-sm text-[#c4a86b] font-medium mb-3">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
                
                {/* TITLE */}
                <h2 className="text-xl font-semibold text-[#2c4a2e] group-hover:text-[#2d5a2c] transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                {/* DESCRIPTION */}
                <p className="text-[#4a5b4a] mt-2 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                
                {/* READ MORE LINK */}
                <div className="mt-4 flex items-center gap-1 text-[#2d5a2c] font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Read guide</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔧</div>
            <h2 className="text-2xl font-semibold text-[#2c4a2e]">No guides yet</h2>
            <p className="text-[#4a5b4a] mt-2">Check back soon for new home problem solutions.</p>
          </div>
        )}

        {/* BOTTOM INFO */}
        <div className="mt-12 pt-8 border-t border-[#dce4d8] text-center">
          <p className="text-sm text-[#6b7c6b]">
            Can't find your problem? 
            <Link href="/categories/home-calculators" className="text-[#2d5a2c] hover:underline ml-1">
              Try our home calculators →
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}