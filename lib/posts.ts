import fs from "fs";
import path from "path";
import matter from "gray-matter";

const homeDir = path.join(process.cwd(), "content/home-problems");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export function getHomeProblemPosts(): Post[] {
  const files = fs.readdirSync(homeDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(homeDir, file);

    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });
}

export function getPostBySlug(slug: string): Post & { content: string } | null {
  const filePath = path.join(homeDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return {
    slug,
    content,
    title: data.title,
    description: data.description,
    date: data.date,
  };
}

export function getRelatedPosts(currentSlug: string, limit = 3) {
  const posts = getHomeProblemPosts();

  return posts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}