# Refactoring Plan Document

> Version: 1.0.0 | Created: 2026-02-23 | Status: Draft

## 1. Executive Summary
This feature focuses on refactoring the existing Next.js 15 portfolio website to improve performance, maintainability, and initial page load speed. The primary focus is on optimizing Server/Client component boundaries and lazy loading heavy client libraries.

## 2. Goals and Objectives
- Improve initial page load performance (LCP, TBT).
- Reduce client-side bundle size.
- Enhance maintainability by cleaning up redundant CSS and improving component structure.
- Align with Next.js 15 Server Component best practices.

## 3. Scope
### In Scope
- Refactoring `About`, `Projects`, `Maintenance`, and `Skills` to be Server Components.
- Optimizing `FadeInView` usage for Framer Motion.
- Implementing `next/dynamic` for `Swiper` in `ImageViewer.tsx`.
- Consolidating `ImageViewer.css` into Tailwind CSS v4.
- Improving image loading priority for LCP in project detail pages.

### Out of Scope
- Major UI/UX changes.
- Backend implementation (not requested).

## 4. Success Criteria
| Criterion | Metric | Target |
|-----------|--------|--------|
| Performance | PageSpeed LCP | < 1.5s (Mobile) |
| Bundle Size | Client JS size | > 10% reduction |
| Maintainability | Code quality | Pass ESLint and no redundant CSS files |

## 5. Timeline
| Milestone | Date | Description |
|-----------|------|-------------|
| Phase 1: Analysis | Day 1 (AM) | Identify performance bottlenecks. |
| Phase 2: Refactoring | Day 1 (PM) | Implement Server Component optimization and lazy loading. |
| Phase 3: Cleanup | Day 2 (AM) | Consolidate CSS and improve image optimization. |
| Phase 4: Verification | Day 2 (PM) | Run audits and gap analysis. |

## 6. Risks
| Risk | Impact | Mitigation |
|------|--------|------------|
| Hydration Mismatch | Medium | Ensure client components are only used where needed and follow hydration rules. |
| Animation Jitter | Low | Test Framer Motion triggers in Server/Client hybrid components. |
