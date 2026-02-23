# Refactoring Design Document

> Version: 1.0.0 | Created: 2026-02-23 | Status: Draft

## 1. Overview
The design aims to optimize the rendering path and bundle size of the portfolio website. By transitioning major sections to Server Components and lazy loading heavy libraries, we reduce the initial Javascript payload and improve Hydration.

## 2. Architecture
### System Diagram
[Server Component: Home]
  ├── [Server Component: About] -> [Client Component: FadeInView]
  ├── [Server Component: Projects] -> [Client Component: FadeInView]
  ├── [Server Component: Maintenance] -> [Client Component: FadeInView]
  └── [Server Component: Skills] -> [Client Component: FadeInView]

### Components
- `FadeInView`: Stays as a Client Component. Used as a wrapper for animations within Server Components.
- `About`, `Projects`, `Maintenance`, `Skills`: Transitioned to Server Components by removing `"use client"`.
- `ImageViewer`: Transitioned to use `next/dynamic` for `Swiper` components.

## 3. Implementation Details
### Component Refactoring
- Remove `"use client"` from `src/components/main/about/index.tsx`, `src/components/main/projects/index.tsx`, `src/components/main/maintenance/index.tsx`, and `src/components/main/skills/index.tsx`.
- Update imports as necessary.

### Dynamic Import
- In `src/components/projects/detail/ImageViewer.tsx`, use `next/dynamic` to import `Swiper` and its modules.

### CSS Consolidation
- Move `ImageViewer.css` content into `src/app/globals.css` using Tailwind `@layer utilities` or directly apply Tailwind classes in the component.

### Image Optimization
- Update `ProjectCard.tsx` to accept a `priority` prop and apply it to `Image` components for the first 3 projects.

## 4. Test Plan
| Test Case | Expected Result |
|-----------|-----------------|
| Hydration | No hydration errors in the console. |
| Page Load | Initial JS bundle size is reduced. |
| Animations | `FadeInView` animations still trigger correctly on scroll. |
| Swiper | `Swiper` works correctly when `ImageViewer` is opened. |
| Images | First 3 projects load faster (LCP improvement). |
