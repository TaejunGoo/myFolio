import importPlugin from "eslint-plugin-import";

/**
 * Import ESLint Configuration
 *
 * Import statement ordering and organization
 * - Automatic import sorting
 * - Group separation (builtin → external → internal → relative)
 * - React imports prioritized
 * - Alphabetical ordering within groups
 * - TypeScript path resolution (@/ alias support)
 *
 * Uses eslint-plugin-import for import management
 */
export default [
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",   // Node.js built-in modules
            "external",  // npm packages
            "internal",  // @/ aliased imports
            ["parent", "sibling"], // ../ and ./
            "index",     // ./index
            "object",    // object imports
            "type",      // type imports
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
