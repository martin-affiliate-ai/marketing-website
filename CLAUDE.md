# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Install dependencies
pnpm install

# Run all apps in development mode (uses Turbo)
pnpm dev

# Build all apps
pnpm build

# Type check all apps
pnpm typecheck

# Generate Cloudflare types for all apps
pnpm cf-typegen

# Deploy all apps
pnpm deploy

# If dev servers don't start cleanly (port conflicts)
pnpm dev:clean
```

### Per-app commands (run from app directory or use --filter)

```bash
# Development for specific app
pnpm --filter web dev
pnpm --filter auth dev
pnpm --filter portal dev

# Type check specific app
pnpm --filter web typecheck

# Build specific app
pnpm --filter web build

# Deploy specific app
pnpm --filter web deploy
```

## Architecture Overview

This is a **pnpm monorepo** managed with **Turborepo**, containing three React Router v7 apps deployed to **Cloudflare Workers**.

### Apps

| App | Domain | Purpose |
|-----|--------|---------|
| `web` | affiliate.ai | Public marketing website |
| `auth` | auth.affiliate.ai | Authentication service |
| `portal` | portal.affiliate.ai | User portal/dashboard |

Each app uses:
- React Router v7 with SSR enabled
- Cloudflare Workers via `@cloudflare/vite-plugin`
- TailwindCSS v4 via `@tailwindcss/vite`
- Vite for bundling

### Packages

- **`@workspace/ui`**: Shared UI component library built with [shadcn/ui](https://ui.shadcn.com/) and Radix primitives
  - Import components: `@workspace/ui/components/button`
  - Import styles: `@workspace/ui/globals.css`
  - Import utilities: `@workspace/ui/lib/utils`
- **`@workspace/typescript-config`**: Shared TypeScript configuration

### Design System

Components are designed in Figma: https://www.figma.com/design/9iUgcY3kHuFZDOW5T7lmzw/

Uses shadcn/ui (new-york style) with:
- Radix UI primitives
- Tailwind CSS for styling
- `cn()` utility for class merging (from `@workspace/ui/lib/utils`)

### Local Development Setup

Apps run on `affiliate-ai.local` domain (requires hosts file entry):
- web: http://affiliate-ai.local:5173
- auth: http://affiliate-ai.local:5174
- portal: http://affiliate-ai.local:5175

### Key Patterns

**Routes**: Defined in `app/routes.ts` using React Router's file-based routing API
**Cloudflare bindings**: Configured in `wrangler.json`, types generated via `cf-typegen`
**Path alias**: `~` maps to `/app` directory in each app

### Content Sources (web app)

- Blog posts: Sanity CMS client at `app/sanity/`
- Policies: Local markdown files in `app/content/`
