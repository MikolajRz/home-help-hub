import fs from "fs";
import path from "path";
import matter from "gray-matter";

const homeDir = path.join(process.cwd(), "content/home-problems");

/**
 * =========================
 * TYPES (SEO EXPANDED MODEL)
 * =========================
 */

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;

  // 🧠 SEO STRUCTURE FIELDS
  category?: string;   // e.g. "heating", "plumbing", "garden"
  tags?: string[];     // e.g. ["radiator", "boiler", "pressure"]
};

export type PostWithContent = Post & {
  content: string;
};

/**
 * =========================
 * INTERNAL: SAFE PARSE
 * =========================
 */
function parsePost(file: string): Post {
  const slug = file.replace(".mdx", "");
  const filePath = path.join(homeDir, file);

  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",

    // optional SEO fields (fallback safe)
    category: data.category || "general",
    tags: data.tags || [],
  };
}

/**
 * =========================
 * GET ALL POSTS
 * =========================
 */
export function getHomeProblemPosts(): Post[] {
  const files = fs.readdirSync(homeDir);
  return files.map(parsePost);
}

/**
 * =========================
 * GET SINGLE POST
 * =========================
 */
export function getPostBySlug(
  slug: string
): PostWithContent | null {
  const filePath = path.join(homeDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return {
    slug,
    content,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    category: data.category || "general",
    tags: data.tags || [],
  };
}

/**
 * =========================
 * SEO SEMANTIC SCORING ENGINE
 * =========================
 */
function calculateRelevanceScore(
  current: Post,
  candidate: Post
): number {
  let score = 0;

  // -------------------------
  // CATEGORY MATCH (HIGHEST WEIGHT)
  // -------------------------
  if (current.category && candidate.category) {
    if (current.category === candidate.category) {
      score += 10;
    }
  }

  // -------------------------
  // TAG MATCH (MEDIUM WEIGHT)
  // -------------------------
  if (current.tags?.length && candidate.tags?.length) {
    const sharedTags = current.tags.filter((tag) =>
      candidate.tags?.includes(tag)
    );

    score += sharedTags.length * 4;
  }

  // -------------------------
  // TITLE SEMANTIC MATCH
  // -------------------------
  const currentTitleWords =
    current.title.toLowerCase().split(/\s+/);
  const candidateTitleWords =
    candidate.title.toLowerCase().split(/\s+/);

  currentTitleWords.forEach((word) => {
    if (candidateTitleWords.includes(word)) {
      score += 3;
    }
  });

  // -------------------------
  // DESCRIPTION SOFT MATCH
  // -------------------------
  const currentDescWords =
    current.description.toLowerCase().split(/\s+/);
  const candidateDescWords =
    candidate.description.toLowerCase().split(/\s+/);

  currentDescWords.forEach((word) => {
    if (candidateDescWords.includes(word)) {
      score += 1;
    }
  });

  return score;
}

/**
 * =========================
 * RELATED POSTS (SEO CLUSTER LOGIC)
 * =========================
 */
export function getRelatedPosts(currentSlug: string) {
  const posts = getHomeProblemPosts();
  const current = posts.find((p) => p.slug === currentSlug);

  if (!current) return [];

  const scored = posts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: calculateRelevanceScore(current, p),
    }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}