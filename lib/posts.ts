import fs from "fs";
import path from "path";
import matter from "gray-matter";

// =========================
// ŚCIEŻKI DO TREŚCI
// =========================
const homeDir = path.join(process.cwd(), "content/home-problems");
const gardenDir = path.join(process.cwd(), "content/garden-problems");
const reviewsDir = path.join(process.cwd(), "content/reviews");

// =========================
// TYPY (ROZSZERZONE O RANKINGI)
// =========================
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;

  // SEO STRUCTURE FIELDS
  category?: string;      // e.g. "heating", "plumbing", "garden"
  tags?: string[];        // e.g. ["radiator", "boiler", "pressure"]
  type?: "guide" | "review";  // typ treści
  rating?: number;        // ocena produktu (dla rankingów) 1-5
  affiliateUrl?: string;  // link afiliacyjny (dla rankingów)
};

export type PostWithContent = Post & {
  content: string;
};

// =========================
// FUNKCJE POMOCNICZE
// =========================
function getContentFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter(file => file.endsWith(".mdx"));
}

function parsePost(file: string, directory: string): Post {
  const slug = file.replace(".mdx", "");
  const filePath = path.join(directory, file);

  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  // Określenie typu treści na podstawie ścieżki
  let type: "guide" | "review" = "guide";
  if (directory.includes("reviews")) {
    type = "review";
  } else if (directory.includes("garden-problems")) {
    type = "guide";
  } else {
    type = "guide";
  }

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || new Date().toISOString().split("T")[0],

    category: data.category || "general",
    tags: data.tags || [],
    type,
    rating: data.rating || undefined,
    affiliateUrl: data.affiliateUrl || undefined,
  };
}

// =========================
// POBRANIE WSZYSTKICH POSTÓW (Z WSZYSTKICH KATEGORII)
// =========================
export function getAllPosts(): Post[] {
  const homePosts = getContentFiles(homeDir).map(file => parsePost(file, homeDir));
  const gardenPosts = getContentFiles(gardenDir).map(file => parsePost(file, gardenDir));
  const reviewPosts = getContentFiles(reviewsDir).map(file => parsePost(file, reviewsDir));

  return [...homePosts, ...gardenPosts, ...reviewPosts];
}

// =========================
// POBRANIE POSTÓW Z HOME PROBLEMS
// =========================
export function getHomeProblemPosts(): Post[] {
  const files = getContentFiles(homeDir);
  return files.map(file => parsePost(file, homeDir));
}

// =========================
// POBRANIE POSTÓW Z GARDEN PROBLEMS
// =========================
export function getGardenProblemPosts(): Post[] {
  const files = getContentFiles(gardenDir);
  return files.map(file => parsePost(file, gardenDir));
}

// =========================
// POBRANIE RANKINGÓW (REVIEWS)
// =========================
export function getReviewPosts(): Post[] {
  const files = getContentFiles(reviewsDir);
  return files.map(file => parsePost(file, reviewsDir));
}

// =========================
// POBRANIE 3 NAJNOWSZYCH POSTÓW
// =========================
export function getLatestPosts(limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  return allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// =========================
// POBRANIE POSTA PO SLUGU (SZUKA WE WSZYSTKICH KATEGORIACH)
// =========================
export function getPostBySlug(slug: string): PostWithContent | null {
  // Sprawdź w home-problems
  const homePath = path.join(homeDir, `${slug}.mdx`);
  if (fs.existsSync(homePath)) {
    const fileContent = fs.readFileSync(homePath, "utf8");
    const { content, data } = matter(fileContent);
    return {
      slug,
      content,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      category: data.category || "general",
      tags: data.tags || [],
      type: "guide",
      rating: data.rating || undefined,
      affiliateUrl: data.affiliateUrl || undefined,
    };
  }

  // Sprawdź w garden-problems
  const gardenPath = path.join(gardenDir, `${slug}.mdx`);
  if (fs.existsSync(gardenPath)) {
    const fileContent = fs.readFileSync(gardenPath, "utf8");
    const { content, data } = matter(fileContent);
    return {
      slug,
      content,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      category: data.category || "general",
      tags: data.tags || [],
      type: "guide",
      rating: data.rating || undefined,
      affiliateUrl: data.affiliateUrl || undefined,
    };
  }

  // Sprawdź w reviews
  const reviewPath = path.join(reviewsDir, `${slug}.mdx`);
  if (fs.existsSync(reviewPath)) {
    const fileContent = fs.readFileSync(reviewPath, "utf8");
    const { content, data } = matter(fileContent);
    return {
      slug,
      content,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      category: data.category || "reviews",
      tags: data.tags || [],
      type: "review",
      rating: data.rating || undefined,
      affiliateUrl: data.affiliateUrl || undefined,
    };
  }

  return null;
}

// =========================
// POBRANIE POWIĄZANYCH POSTÓW (SEO CLUSTER LOGIC)
// =========================
function calculateRelevanceScore(current: Post, candidate: Post): number {
  let score = 0;

  // CATEGORY MATCH (HIGHEST WEIGHT)
  if (current.category && candidate.category) {
    if (current.category === candidate.category) {
      score += 10;
    }
  }

  // TYPE MATCH (guide/review)
  if (current.type === candidate.type) {
    score += 5;
  }

  // TAG MATCH (MEDIUM WEIGHT)
  if (current.tags?.length && candidate.tags?.length) {
    const sharedTags = current.tags.filter((tag) =>
      candidate.tags?.includes(tag)
    );
    score += sharedTags.length * 4;
  }

  // TITLE SEMANTIC MATCH
  const currentTitleWords = current.title.toLowerCase().split(/\s+/);
  const candidateTitleWords = candidate.title.toLowerCase().split(/\s+/);
  currentTitleWords.forEach((word) => {
    if (candidateTitleWords.includes(word) && word.length > 2) {
      score += 2;
    }
  });

  return score;
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const allPosts = getAllPosts();
  const current = allPosts.find((p) => p.slug === currentSlug);

  if (!current) return [];

  const scored = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: calculateRelevanceScore(current, p),
    }));

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

// =========================
// POBRANIE POSTÓW PO KATEGORII
// =========================
export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// =========================
// POBRANIE POSTÓW PO TAGU
// =========================
export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}