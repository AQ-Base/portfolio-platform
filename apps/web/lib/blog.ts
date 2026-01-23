import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
    title: string;
    date: string; // keep as ISO string for now
    tags?: string[];
    project?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
    slug: string;
}


const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function filenameToSlug(filename: string) {
  // "2026-01-22-kickoff.mdx" -> "kickoff" (optional nicer slugs)
  const noExt = filename.replace(/\.mdx$/, "");
  return noExt.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export async function getAllPostMeta(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(BLOG_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (filename) => {
      const fullPath = path.join(BLOG_DIR, filename);
      const raw = await fs.readFile(fullPath, "utf8");
      const { data } = matter(raw);

      const fm = data as BlogFrontmatter;

      return {
        slug: filenameToSlug(filename),
        title: fm.title,
        date: fm.date,
        tags: fm.tags ?? [],
        project: fm.project,
      };
    })
  );

  // Newest first (assuming ISO dates)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export async function getPostSourceBySlug(slug: string): Promise<string> {
  const files = await fs.readdir(BLOG_DIR);
  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));

  const filename = mdxFiles.find((f) => filenameToSlug(f) === slug);
  if (!filename) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const fullPath = path.join(BLOG_DIR, filename);
  return fs.readFile(fullPath, "utf8");
}