import { defineConfig } from "eslint/config";

// Import modular ESLint configurations
import accessibility from "./eslint/accessibility.mjs";
import base from "./eslint/base.mjs";
import ignores from "./eslint/ignores.mjs";
import imports from "./eslint/imports.mjs";
import next from "./eslint/next.mjs";
import react from "./eslint/react.mjs";
import security from "./eslint/security.mjs";
import stylistic from "./eslint/stylistic.mjs";
import tailwind from "./eslint/tailwind.mjs";
import typescript from "./eslint/typescript.mjs";

/**
 * ESLint Configuration
 *
 * Modular ESLint configuration for Next.js + TypeScript + React
 *
 * Configuration order matters:
 * 1. Base JavaScript/TypeScript setup
 * 2. Framework-specific rules (React, Next.js)
 * 3. Enhancement rules (TypeScript strictness, accessibility, security)
 * 4. Code style and organization (stylistic, imports, Tailwind)
 * 5. Ignore patterns
 *
 * Each configuration module is located in ./eslint/ directory
 * for easy reuse and distribution as npm package
 */
export default defineConfig([
  // ============================================
  // Core Configuration
  // ============================================
  ...base,        // JavaScript + TypeScript foundation
  ...typescript,  // TypeScript strictness and best practices

  // ============================================
  // Framework Configuration
  // ============================================
  ...react,       // React-specific rules
  ...next,        // Next.js + React Hooks rules

  // ============================================
  // Enhancement Rules
  // ============================================
  ...accessibility, // Web accessibility (a11y)
  ...security,      // Security best practices

  // ============================================
  // Code Style & Organization
  // ============================================
  ...stylistic,   // Code formatting (indentation, quotes, etc.)
  ...imports,     // Import ordering and organization
  ...tailwind,    // Tailwind CSS class organization

  // ============================================
  // Ignore Patterns
  // ============================================
  ...ignores,     // Files to exclude from linting
]);
