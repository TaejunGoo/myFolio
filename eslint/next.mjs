import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * Next.js ESLint Configuration
 *
 * Next.js-specific rules and optimizations
 * - Core Web Vitals checks
 * - TypeScript support for Next.js
 * - React Hooks rules (included in core-web-vitals)
 * - Image optimization warnings
 * - Link component usage
 */
export default [
  ...nextVitals,
  ...nextTs,
];
