export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Alfie Quinn</h1>
      <p className="mt-4">
        Graduate software engineering portfolio. I’m building this platform to
        showcase projects, document decisions, and demonstrate self-hosting and DevOps.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Portfolio Platform (this site)</li>
          <li>Bus Web App (in progress)</li>
          <li>3D Printer Monitoring & Mods</li>
        </ul>
      </section>
    </main>
  );
}
