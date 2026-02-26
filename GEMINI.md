# GEMINI.md

This file provides guidance to Gemini CLI when working with code in this repository.

## Language

- **Chat**: Always respond in Korean (한국어로 답변)
- **Code & Documentation**: Write in English

## Project Overview

myFolio is a Next.js 16 portfolio website built with React 19, TypeScript, and Tailwind CSS v4. It features animated hero sections, project showcases, and a responsive design with dark mode support.

## Interaction Workflow

When a task is assigned, **always provide a concise plan** before proceeding with any implementation. This ensures alignment and allows for early feedback.

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

## Content Management

**Customize profile**: 
Edit `src/data/profile/profile.ts` — name, title, email, avatar, career start date, bio, highlights, job descriptions, tech stacks, and social links are all in this single file.

**New project**: 
1. Add entry to `src/data/projects/projects.ts` with images in `public/images/projects/`.
2. For detailed project pages, add to `src/data/projects/projectDetails.ts`.

**New skill**: 
Add to `src/data/skills/skills.ts` under the appropriate category (core or professional).

**New tech badge**: 
Add to `TECH_CONFIG` in `src/shared/components/tech/tech-config.ts` with icon, label, and background style.

**New social link**: 
Add to `profile.socialLinks` in `src/data/profile/profile.ts`, then add the icon mapping in `src/data/shared/socialLinks.ts`.

**New navigation item**: 
Edit `src/data/navigation/navigation.ts`.

**New page**: 
Create folder in `src/app/` with `page.tsx` following App Router conventions.
