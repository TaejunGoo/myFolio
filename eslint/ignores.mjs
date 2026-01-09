/**
 * ESLint Ignore Configuration
 *
 * Files and directories to exclude from linting
 * - Build outputs (dist, build, .next)
 * - Dependencies (node_modules)
 * - Generated files
 * - Cache directories
 */
export default [
  {
    ignores: [
      // Build outputs
      "build/*",
      "dist/*",
      "**/.next/*",

      // Dependencies
      "**/node_modules/*",

      // Cache directories
      ".cache/*",
      "*.cache",

      // Generated files
      "*.generated.*",

      // ESLint config files (avoid linting ESLint configs themselves)
      "eslint/*.mjs",

      // Environment files (optional, already in .gitignore)
      // ".env*",
    ],
  },
];
