/**
 * Security ESLint Configuration
 *
 * Security best practices to prevent common vulnerabilities
 * - XSS (Cross-Site Scripting) prevention
 * - Code injection prevention
 * - Unsafe pattern detection
 * - Dangerous API usage warnings
 *
 * Uses built-in ESLint security rules
 */
export default [
  {
    rules: {
      // Prevent eval() usage (code injection risk)
      "no-eval": "error",

      // Prevent implied eval (setTimeout/setInterval with strings)
      "no-implied-eval": "error",

      // Prevent Function constructor (similar to eval)
      "no-new-func": "error",

      // Warn on unescaped HTML in JSX (XSS risk)
      "react/no-danger": "warn",

      // Prevent dangerouslySetInnerHTML with user input
      "react/no-danger-with-children": "error",

      // Prevent usage of javascript: URLs (XSS risk)
      "no-script-url": "error",

      // Warn on console.log (might expose sensitive data)
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],

      // Prevent debugger statements in production
      "no-debugger": "error",

      // Prevent alert/confirm/prompt (poor UX, potential phishing)
      "no-alert": "warn",

      // Warn on target="_blank" without rel="noopener noreferrer"
      "react/jsx-no-target-blank": [
        "warn",
        {
          enforceDynamicLinks: "always",
        },
      ],
    },
  },
];
