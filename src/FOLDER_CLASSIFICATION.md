# Folder classification and suggested organization

This document maps the current project folders into high-level categories and gives safe, optional `git mv` commands you can run to reorganize the filesystem. I will not move files automatically — run the commands below when you're ready.

## Categories

- **Site UI components**: page-level components used to build pages
  - Current path examples:
    - `src/components/site/Background.tsx`
    - `src/components/site/Hero.tsx`
    - `src/components/site/Navbar.tsx`

- **UI primitives / Design system**: small, reusable primitives and controls
  - Current path examples:
    - `src/components/ui/button.tsx`
    - `src/components/ui/input.tsx`
    - `src/components/ui/tooltip.tsx`

- **Pages & Routes**: top-level route components (pages)
  - Current path examples:
    - `src/routes/index.tsx`
    - `src/routes/dashboard.tsx`
    - `src/routes/__root.tsx`

- **Routing & Startup**: routing, route-tree generation, server and start scripts
  - Files:
    - `src/router.tsx`
    - `src/routeTree.gen.ts`
    - `src/server.ts`
    - `src/start.ts`

- **Hooks**: reusable React hooks
  - `src/hooks/use-mobile.tsx`

- **Libraries / Utilities**: helpers, error pages, utilities
  - `src/lib/utils.ts`
  - `src/lib/error-page.ts`

- **Assets & Styles**: static assets and global styles
  - `src/assets/*`, `src/styles.css`, `src/assets/site.webmanifest`

- **Project config & Tooling**: build and tool configuration files
  - `package.json`, `tsconfig.json`, `vite.config.ts`, `eslint.config.js`, `wrangler.jsonc`, `components.json`

## Notes and next steps

- The repository currently has untracked files. I will create a branch and commit the current workspace snapshot.
- I will not overwrite `main` or force-push; instead I'll push a new branch named `organize-structure` so you can review the changes and merge on GitHub.

If you want me to proceed differently (push directly to `main` or apply more extensive reorganizations and import rewrites), tell me and I will follow your instruction.
