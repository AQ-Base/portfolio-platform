# Portfolio Platform

A monorepo for my personal portfolio website and dev blog

## Goals
- Digital CV / portfolio site built with Next.js + TypeScript
- Dev blog stored in Git (MDX/Markdown) to document engineering decisions
- Self-hosted deployment on a Debian home server using Docker and Cloudflare Tunnel (planned)
- Space to showcase projects (Bus Web App, 3D printing monitoring & mods)

## Repo structure
- `apps/web` - Next.js portfolio site
- `apps/bus-app` - Bus web app demo (planned)
- `content/blog` - blog posts (MD/MDX)
- `docs` - technical notes and architecture (planned)

## Tech Stack (Initial)
- Next.js (App Router, TypeScript)
- Tailwind CSS
- Git & Github

## Development
```bash
cd apps/web
npm run dev
```
Roadmap isn't final and is subject to change!

# Current Roadmap
## Phase 1 - Foundations - Almost complete :white_check_mark:
**Goal: Create a stable base you can build on.**

- Repo structure
- Next.js app running
- Clear navigation
- Projects treated as data
- Blog content rendering correctly

## Phase 2 - Content & Presentation
**Goal: Make the site feel alive and worth visiting.**

- Blog polish (images, readability, working tags)
- Project pages that tell a story
- Connecting blog posts and projects

## Phase 3 - Real Applications
**Goal: Show problem-solving depth substantive projects**

- Bus web app MVP
- A.I. Project Integration
- 3D printer project documentation
- Real-world debugging writeups

## Phase 4 - Deployment & Operations
**Goal: Show DevOps and system thinking.**

- Dockerisation
- Self-hosting on Debian
- Cloudflare Tunnel
- (Optional) CI pipeline

## Phase 5 - Tooling & Automation
**Goal: Reduce friction and show product thinking.**

- Internal blog authoring tool
- Image upload helper
- Plublishing automation (maybe fast-api)

## Phase 6 - Hardware Integration & Experiments
**Goal: Tie software + hardware together

- Printer camera feed
- Monitoring UI
- Security UI

