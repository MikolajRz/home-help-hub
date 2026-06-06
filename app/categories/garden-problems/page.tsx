import Link from "next/link";
import { getHomeProblemPosts } from "@/lib/posts";

export const metadata = {
  title: "Garden Problems - Plant & Garden Solutions",
  description:
    "Solve common gardening problems, plant diseases and outdoor maintenance issues.",
};

export default function GardenProblemsCategoryPage() {
  const posts = getHomeProblemPosts(); // na razie placeholder

  return (
    <main className="mx-auto max-w-4xl px-4 py-2">
      <h1 className="text-4xl font-bold">
        Garden Problems
      </h1>

      <p className="mt-4 text-gray-600">
        Solutions for plant care, pests, and gardening issues.
      </p>

      <div className="mt-10">
        <p className="text-gray-500">
          (Dodamy osobne artykuły dla garden w kolejnym kroku)
        </p>
      </div>
    </main>
  );
}