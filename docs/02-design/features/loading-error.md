# Loading & Error States Design Document

> Version: 1.0.0 | Created: 2026-02-23 | Status: Draft

## 1. Overview
Next.js App Router uses `loading.tsx` to show a temporary UI during data fetching and `error.tsx` to catch runtime errors within a specific route segment.

## 2. Components
### `src/components/ui/skeleton.tsx`
- Tailwind-based animated background (`animate-pulse`).
- Basic implementation: `<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />`.

### `src/app/loading.tsx` (Root)
- Displays a series of skeleton cards mimicking the `About` and `Projects` sections.
- Uses `Container` for layout consistency.

### `src/app/error.tsx` (Root)
- Shows a simple error message with a "Try again" button (`reset()` function).
- Follows the project's typography and button styles.

### `src/app/projects/[slug]/loading.tsx`
- Skeleton for a single project detail page (Hero image + content blocks).

## 3. Implementation Details
### `loading.tsx` Strategy
- Mimic the layout of `page.tsx` as closely as possible to prevent layout shifts.

### `error.tsx` Strategy
- Must be a `"use client"` component.
- Captures errors and provides a `reset()` callback to attempt re-rendering.

## 4. Test Plan
| Test Case | Expected Result |
|-----------|-----------------|
| Initial Load | Root `loading.tsx` skeleton appears briefly during build/cold start. |
| Navigation | `loading.tsx` shows when switching routes if data is slow. |
| Error Catch | Throwing a manual error triggers `error.tsx` UI. |
| Reset | Clicking "Try again" triggers a re-render attempt. |
