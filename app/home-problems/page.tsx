import Link from "next/link";
import { getHomeProblemPosts } from "@/lib/posts";

export default function HomeProblemsPage() {
  const posts = getHomeProblemPosts();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold">
        Home Problems
      </h1>

      <p className="mt-2 text-gray-600">
        Find practical solutions for common household issues.
      </p>

      <div className="mt-10 grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/home-problems/${post.slug}`}
            className="border rounded-lg p-5 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              {post.title}
            </h2>

            <p className="text-gray-600 mt-1">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}