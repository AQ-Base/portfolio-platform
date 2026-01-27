import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPostMeta, getPostSourceBySlug } from "../../../lib/blog";
import { MdxImage } from "@/components/MdxImage";
import { Figure } from "@/components/Figure";
import { ImageGrid } from "@/components/ImageGrid";
import rehypePrettyCode from "rehype-pretty-code";
import { BlogImage } from "@/components/BlogImage";

export async function generateStaticParams() {
  const posts = await getAllPostMeta();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }>; }) {

  const { slug } = await params;

  let source: string;
  try {
    // try to get the blog by slug  (must be careful with unique slugs here)
    source = await getPostSourceBySlug(slug);
  } catch {
    // if the blog post cannot be found return 404
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    tags?: string[];
    project?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode,{theme: "github-dark"}],]
      },
    },
    // this is for our image MDX to next image rendering <img> and <Figure> for use
    components: {
      img: (props) => <BlogImage {...props}/>,
      BlogImage,
      ImageGrid,
      Figure,
    },
  });

  return (
    <main>
      <h1 className="text-2xl font-bold">{frontmatter.title}</h1>
      <p className="mt-2 text-sm opacity-80">{frontmatter.date}</p>
      <br />

      <article className="prose dark:prose-invert max-w-none">
        {content}
      </article>
    </main>
  );
}