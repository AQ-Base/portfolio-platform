import Link from "next/link";
import { getAllPostMeta } from "../../lib/blog";

export default async function BlogPage() {
  const posts = await getAllPostMeta();

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Dev Blog</h1>

      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="border rounded p-4">
            <h2 className="text-lg font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-1 text-sm opacity-80">{p.date}</p>
            {p.tags?.length ? (
              <p className="mt-2 text-sm">Tags: {p.tags.join(", ")}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}