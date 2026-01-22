export type ProjectStatus = "planned" | "in-progress" | "completed";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tech: string[];
  status: ProjectStatus;
  repoUrl?: string;
  liveUrl?: string;
};


export const projects: Project[] = [
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    shortDescription: "My self-hosted portfolio and dev blog platform.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "in-progress",
  },
  {
    slug: "bus-web-app",
    title: "Bus Web App",
    shortDescription: "A web app for bus times/routes (MVP in progress).",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "planned",
  },
  {
    slug: "3d-printer",
    title: "3D Printer Monitoring & Mods",
    shortDescription: "Hardware debugging and monitoring experiments.",
    tech: ["Raspberry Pi", "Linux"],
    status: "planned",
  },
];