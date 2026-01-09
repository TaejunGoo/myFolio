import tseslint from "typescript-eslint";

/**
 * TypeScript ESLint Configuration
 *
 * Enhanced TypeScript strictness and best practices
 * - Recommended & stylistic rules from typescript-eslint
 * - Strict type checking and imports
 * - Unused variable detection
 * - Explicit any prevention
 */
export default [
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    rules: {
      // Prevent implicit any types (warn to allow gradual adoption)
      "@typescript-eslint/no-explicit-any": "warn",

      // Enforce consistent type imports (type-only imports separated)
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      // Detect unused variables (ignore vars starting with _)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // Prevent non-null assertions (allow for now, can be stricter)
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },
];
