# Katakana Coach

Personal learning website starter for helping a Chinese native speaker learn katakana.

## Cost policy (100% free)

- No paid APIs
- No paid database
- Static site only
- OSS dependencies only

## Tech stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- ESLint 9 + Prettier 3
- Vitest + Testing Library

## Recommended environment

- Node.js 22 LTS (see `.nvmrc`)
- npm 11+

## Free hosting options

- GitHub Pages: free on public repositories with GitHub Free
- Cloudflare Pages: Free plan available (for example, up to 500 builds/month)

If you want to keep the repository private with zero cost, Cloudflare Pages is usually easier.

## Deploy (free)

### GitHub Pages

1. Push this project to a public GitHub repository.
2. Keep the default branch as `main`.
3. In repository settings, enable Pages to use GitHub Actions.
4. Push to `main` and the workflow will publish automatically.

Workflow file:

- `.github/workflows/deploy-github-pages.yml`

### Cloudflare Pages

In Cloudflare Pages, set:

- Framework preset: `Vite`
- Build command: `npm run build:static`
- Build output directory: `dist`
- Node version: `22`

## Setup

```bash
nvm use
npm install
```

If `nvm` is not installed, use a Node.js 22 runtime manually.

## Development commands

```bash
npm run dev          # start local dev server
npm run test         # run tests once
npm run test:watch   # test watch mode
npm run lint         # lint all files
npm run format       # format all files
npm run build        # production build
npm run build:static # static-host-friendly build
npm run check        # format-check + lint + test + build
```

## Project structure

```text
src/
  App.tsx            # temporary landing shell
  App.test.tsx       # sample component test
  index.css          # Tailwind import + global styles
  test/setup.ts      # test environment setup
```

## Next build step

Implement the first katakana lesson screen with:

1. grouped characters by visual similarity
2. Chinese pronunciation hints for common confusion points
3. quick quiz loop with adaptive review frequency
