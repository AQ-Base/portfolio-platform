import { notFound } from "next/navigation";
import { projects } from "../../../content/projects";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    
    const { slug } = await params;
    // Debug: this logs in your terminal, not the browser
    // console.log("slug:", slug);
    
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="mt-4">{project.shortDescription}</p>

            <section className="mt-6">
                <h2 className="font-semibold">Tech</h2>
                <ul className="list-disc ml-6 mt-2">
                    {project.tech.map((t) => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </section>

            <p className="mt-6 text-sm opacity-80">Status: {project.status}</p>
        </main>
    );
}