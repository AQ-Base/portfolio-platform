import Link from "next/link";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="mt-6 space-y-4">
        {projects.map((p) => (
          <li key={p.slug} className="border rounded p-4">
            <h2 className="text-lg font-semibold">
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-1">{p.shortDescription}</p>
            <p className="mt-2 text-sm opacity-80">
              Status: {p.status} · Tech: {p.tech.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}