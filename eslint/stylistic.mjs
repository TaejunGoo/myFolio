import stylistic from "@stylistic/eslint-plugin";

/**
 * Stylistic ESLint Configuration
 *
 * Code formatting and style consistency rules
 * - Indentation (2 spaces)
 * - Quote style (double quotes)
 * - Semicolons (required)
 * - Spacing and brackets
 * - Line breaks and empty lines
 *
 * Uses @stylistic/eslint-plugin for formatting rules
 */
export default [
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      // ============================================
      // Indentation & Quotes
      // ============================================
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],

      // ============================================
      // Spacing & Brackets
      // ============================================
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
      "@stylistic/arrow-parens": ["error", "always"],

      // ============================================
      // Line Breaks & Empty Lines
      // ============================================
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
    },
  },
];
