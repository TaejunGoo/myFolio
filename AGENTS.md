# AGENTS.md

This file is the single source of truth for AI coding agents working in this repository.
Tool-specific instruction files should import this file instead of duplicating its contents.

## Language

- **Chat**: Always respond in Korean
- **Code & Documentation**: Write in English

## Project Overview

myFolio is a Next.js 16 portfolio website built with React 19, TypeScript, and Tailwind CSS v4. It features animated hero sections, project showcases, and a responsive design with dark mode support.

## Commands

```bash
# Development
pnpm dev              # Start dev server (port 3000)
pnpm build            # Production build
pnpm start            # Run production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix ESLint issues
```

Package manager: **pnpm**

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages
- `src/components/ui/` - shadcn/ui primitives (button, card, badge, etc.)
- `src/components/layout/` - Header, navigation, containers
- `src/components/main/` - Page sections (hero, about, projects)
- `src/shared/` - Utilities, providers, and shared components
- `src/data/` - Static data (profile, projects, maintenance, skills, navigation)
- `src/types/` - TypeScript type definitions

### Key Patterns

**UI Components**: Built on shadcn/ui with class-variance-authority (CVA) for variants. Use the `cn()` utility from `@/shared/utils` for merging Tailwind classes.

**Styling**: Tailwind CSS v4 with CSS variables. Theme colors use OkLCH color model defined in `globals.css`. Dark mode via next-themes.

**Animation**: Framer Motion for complex animations (hero, about sections). Swiper for image carousels in project cards.

**Data**: All site data is centralized in `src/data/`. Personal info lives in `src/data/profile/profile.ts` — editing this single file updates the entire site (header, about, footer, metadata). Projects, maintenance, and skills are static TypeScript arrays dynamically imported in server components. Navigation data lives in `src/data/navigation/`.

**Tech Badges**: Technology icons are mapped in `src/shared/components/tech/tech-config.ts` using the `TechName` type union.

**Scroll Utility**: Custom scroll functions in `src/shared/utils/scroll.ts` handle smooth scrolling with header offset. Use `scrollToSection(targetId)` instead of native `scrollIntoView` for section navigation.

**Section Spacing**: All main page sections use consistent spacing of `my-16 md:my-20` between sections. Individual section components should not add their own padding to maintain uniform spacing.

### Path Aliases

- `@/*` → `./src/*`
- `@/components` → components
- `@/ui` → components/ui
- `@/utils` → shared/utils

## Code Standards

- **Quotes**: Double quotes
- **Indentation**: 2 spaces
- **Semicolons**: Always
- **Components**: Arrow function components
- **Imports**: Organized - react first, then external, then internal (`@/**`)

ESLint flat config with Tailwind linting (duplicate class detection, consistent ordering).

## Implementation Principles

- Follow the existing project structure and conventions before introducing new abstractions.
- Use React Server Components by default. Add `"use client"` only when hooks, browser APIs, or client-side interaction require it.
- Keep personal information and portfolio content centralized in `src/data/`.
- Prefer the existing component and utility patterns over adding new dependencies.
- Maintain strict TypeScript safety and avoid `any`.
- Consider loading, error, empty, and disabled states when adding interactive UI.

## UI Quality

- Verify layouts at representative mobile and desktop sizes using the project's existing breakpoints.
- Prevent horizontal overflow and unintended layout shifts.
- Preserve keyboard navigation, accessible names, focus states, and adequate touch targets.
- Respect `prefers-reduced-motion` when adding or changing animation.
- Use the existing design tokens, Tailwind utilities, and animation patterns rather than imposing a separate design system.

## Content Style

- User-facing Korean copy should be natural, concise, and appropriate for a professional portfolio.
- Avoid generic AI-like introductions, exaggerated praise, and unnecessary filler.
- Prefer concrete technologies, responsibilities, and outcomes over abstract claims.
- Preserve the author's intended tone when editing portfolio or resume content.

## Review and Workflow

- Share a plan when a task has multiple dependent steps or meaningful design decisions. Skip ceremonial planning for simple edits.
- For high-impact architecture, security, privacy, or cost decisions, identify important risks and alternatives without forcing opposition to every decision.
- Use specialized agents only when delegation provides clear value. Do not require agent orchestration for routine tasks.
- Before handoff, run verification proportional to the change. For production-facing code, prefer `pnpm lint`, TypeScript checks, and a production build.

## Page Sections

### Skills Section

The Skills section displays professional capabilities in two categories with checklist-style presentation:

- **Core Skills**: Technical competencies (UI component development, responsive design, styling systems, accessibility, etc.) - Blue theme with Code icon
- **Professional Skills**: Practical work skills (tech stack selection, collaboration, project leadership, etc.) - Purple theme with Users icon

Each category is a card component with:
- Category-specific icon and color theme
- Hover animation effects
- Checklist items with check icons
- Responsive 2-column layout (1 column on mobile)

Type: Only `"Core"` and `"Professional"` categories are supported. Tech stack information is displayed in the About section to avoid duplication.

## Adding Content

**Customize profile**: Edit `src/data/profile/profile.ts` — name, title, email, avatar, career start date, bio, highlights, job descriptions, tech stacks, and social links are all in this single file.

**New project**: Add entry to `src/data/projects/projects.ts` with images in `public/images/projects/`. For detailed project pages, add to `src/data/projects/projectDetails.ts`.

**New skill**: Add to `src/data/skills/skills.ts` under the appropriate category (core or professional).

**New tech badge**: Add to `TECH_CONFIG` in `src/shared/components/tech/tech-config.ts` with icon, label, and background style.

**New navigation item**: Edit `src/data/navigation/navigation.ts`.

**New page**: Create folder in `src/app/` with `page.tsx` following App Router conventions.
