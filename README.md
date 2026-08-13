# Portfolio

My personal portfolio website — a space to showcase my experiences and myself. Each project entry is written up like a small case study, and the site is designed to grow with me: it can later be extended into a blog or a bigger personal site.

## Tech stack

- [Astro](https://astro.build) — content-focused static site generator; easy to extend into a blog later
- [Tailwind CSS](https://tailwindcss.com) — styling
- Deployed on [GitHub Pages](https://pages.github.com)

## About this project

The site currently features a single project — [Hobby Tracker](https://github.com/pilif139/hobby-tracker), a cross-platform application with a React web app, a native Android app in Java, and a TypeScript backend running on Cloudflare Workers.

Project entries live in `web/src/content/projects/` and follow a simple frontmatter schema (`title`, `description`, `tech`, optional `links` and `hidden`). Entries marked `hidden: true` are excluded from the homepage project list but still get their own page.

The `web/scripts/sync-readmes.mjs` script synchronizes this repository's README into the portfolio as its own project entry (`content/projects/portfolio.md`). The plan is to extend this script to pull READMEs from my other GitHub repositories and add them to the portfolio automatically.

## Repository layout

- `web/` — the Astro site
  - `src/content/projects/` — Markdown project entries
  - `src/pages/` — site pages (homepage, project pages, contact, 404/500)
  - `src/components/` — Astro components
  - `scripts/sync-readmes.mjs` — README sync script

## Development

Requires Node.js >= 22.12.

```bash
pnpm install          # install dependencies
pnpm dev              # start dev server
pnpm build            # build for production
pnpm preview          # preview the production build
pnpm sync:readmes     # sync READMEs into content/projects
```

## Roadmap

- [ ] Extend `sync-readmes.mjs` to fetch READMEs from all my GitHub repositories
- [ ] Turn the site into a blog (Astro makes this straightforward)
- [ ] Add more project entries

## License

All content in this repository is for personal/portfolio use.