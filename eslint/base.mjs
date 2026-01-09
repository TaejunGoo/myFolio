import js from "@eslint/js";
import globals from "globals";

/**
 * Base ESLint Configuration
 *
 * Core JavaScript rules and language options
 * - Recommended JS rules from @eslint/js
 * - Browser globals configuration
 * - File pattern matching for JS/TS/JSX/TSX
 */
export default [
  // Apply ESLint recommended rules
  js.configs.recommended,

  // Language options and file patterns
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
