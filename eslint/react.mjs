/**
 * React ESLint Configuration
 *
 * React-specific rules and best practices
 * - Auto-detect React version
 * - Arrow function components (consistency)
 * - React 17+ JSX transform (no import React needed)
 * - Component definition standards
 *
 * Note: React Hooks rules are included in Next.js config
 */
export default [
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React 17+ doesn't need React import for JSX
      "react/react-in-jsx-scope": "off",

      // Enforce arrow function components for consistency
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      // Prevent missing props validation (warn, not error for flexibility)
      "react/prop-types": "off", // We use TypeScript for prop validation

      // Enforce self-closing for components without children
      "react/self-closing-comp": [
        "warn",
        {
          component: true,
          html: true,
        },
      ],
    },
  },
];
