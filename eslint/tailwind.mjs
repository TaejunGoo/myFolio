import betterTailwindcss from "eslint-plugin-better-tailwindcss";

/**
 * Tailwind CSS ESLint Configuration
 *
 * Tailwind-specific linting rules for class organization
 * - Consistent class ordering (autofix available)
 * - Duplicate class detection
 * - Shorthand class enforcement
 * - Deprecated class warnings
 * - Conflicting class detection
 *
 * Uses eslint-plugin-better-tailwindcss for Tailwind optimization
 */
export default [
  {
    plugins: {
      "better-tailwindcss": betterTailwindcss,
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "./src/app/globals.css",
      },
    },
    rules: {
      // ============================================
      // Stylistic Rules (with autofix)
      // ============================================

      // Line wrapping (disabled for Windows compatibility)
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "off",
        { lineBreakStyle: "windows" },
      ],

      // Enforce official Tailwind class order
      "better-tailwindcss/enforce-consistent-class-order": "warn",

      // Enforce consistent variable syntax
      "better-tailwindcss/enforce-consistent-variable-syntax": "warn",

      // Enforce consistent ! position
      "better-tailwindcss/enforce-consistent-important-position": "warn",

      // Prefer shorthand classes (px-4 over pl-4 pr-4)
      "better-tailwindcss/enforce-shorthand-classes": "warn",

      // Prevent duplicate classes
      "better-tailwindcss/no-duplicate-classes": "error",

      // Warn on deprecated Tailwind classes
      "better-tailwindcss/no-deprecated-classes": "warn",

      // Remove unnecessary whitespace
      "better-tailwindcss/no-unnecessary-whitespace": "error",

      // ============================================
      // Correctness Rules
      // ============================================

      // Prevent conflicting classes (e.g., p-4 and p-2)
      "better-tailwindcss/no-conflicting-classes": "error",
    },
  },
];
