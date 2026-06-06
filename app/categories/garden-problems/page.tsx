import Link from "next/link";
import { getGardenProblemPosts } from "@/lib/posts";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Garden Problems - Plant & Garden Solutions | Hometopia",
  description:
    "Solve common gardening problems, plant diseases, pest control, and outdoor maintenance issues with our practical step-by-step guides.",
};

export default function GardenProblemsCategoryPage() {
  const posts = getGardenProblemPosts();

  return (
    <main className="min-h-screen bg-[#f8f6f0]">
      <div className="max-w-7xl mx-auto px-4 py-2">

        {/* BREADCRUMBS */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Garden Problems", href: "/categories/garden-problems" },
            ]}
          />
        </div>
        
        {/* HEADER */}
        <div className="mb-10">
          <div className="inline-block bg-[#2d5a2c]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-[#2d5a2c]">🌱 Gardening Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c4a2e]">
            Garden Problems
          </h1>
          <p className="mt-4 text-lg text-[#4a5b4a] max-w-2xl">
            Practical solutions for common garden issues, plant diseases, and outdoor maintenance. 
            From pest control to soil problems — easy-to-follow guides for a thriving garden.
          </p>
        </div>

        {/* ARTICLES GRID */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/garden-problems/${post.slug}`}
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
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🌱</div>
            <h2 className="text-2xl font-semibold text-[#2c4a2e]">Garden guides coming soon</h2>
            <p className="text-[#4a5b4a] mt-2 max-w-md mx-auto">
              We're busy creating practical garden solutions for you. 
              Check back soon for plant care tips, pest control guides, and seasonal maintenance advice.
            </p>
            <Link 
              href="/" 
              className="inline-block mt-6 bg-[#2d5a2c] hover:bg-[#1f3d1e] text-white px-6 py-3 rounded-full transition shadow-sm"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* BOTTOM INFO */}
        {posts.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#dce4d8] text-center">
            <p className="text-sm text-[#6b7c6b]">
              Can't find what you're looking for?
              <Link href="/contact" className="text-[#2d5a2c] hover:underline ml-1">
                Suggest a garden topic →
              </Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}