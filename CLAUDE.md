# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- `src/data/` - Static data (projects, maintenance, skills, shared)
- `src/types/` - TypeScript type definitions

### Key Patterns

**UI Components**: Built on shadcn/ui with class-variance-authority (CVA) for variants. Use the `cn()` utility from `@/shared/utils` for merging Tailwind classes.

**Styling**: Tailwind CSS v4 with CSS variables. Theme colors use OkLCH color model defined in `globals.css`. Dark mode via next-themes.

**Animation**: Framer Motion for complex animations (hero, about sections). Swiper for image carousels in project cards.

**Data**: Projects, maintenance items, and skills are defined as static TypeScript arrays in `src/data/` directory and dynamically imported in server components.

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

**New project**: Add entry to `src/data/projects/projects.ts` with images in `public/images/projects/`. For detailed project pages, add to `src/data/projects/projectDetails.ts`.

**New skill**: Add to `src/data/skills/skills.ts` under the appropriate category (core or professional).

**New tech badge**: Add to `TECH_CONFIG` in `src/shared/components/tech/tech-config.ts` with icon, label, and background style.

**New page**: Create folder in `src/app/` with `page.tsx` following App Router conventions.
