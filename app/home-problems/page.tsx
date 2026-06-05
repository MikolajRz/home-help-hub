import Link from "next/link";
import { getHomeProblemPosts } from "@/lib/posts";

export const metadata = {
  title: "Home Problems - Guides & Fixes",
  description: "All home repair guides and troubleshooting articles",
};

export default function HomeProblemsPage() {
  const posts = getHomeProblemPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold">Home Problems</h1>

      <p className="mt-4 text-gray-600">
        Browse all home repair guides and troubleshooting articles.
      </p>

      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/home-problems/${post.slug}`}
            className="border p-4 rounded hover:shadow"
          >
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}