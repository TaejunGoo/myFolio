/**
 * Accessibility ESLint Configuration
 *
 * Web accessibility (a11y) rules for inclusive UX
 * - Semantic HTML enforcement
 * - ARIA attribute validation
 * - Keyboard navigation support
 * - Screen reader compatibility
 * - Color contrast warnings
 *
 * Note: jsx-a11y plugin is already included in Next.js config
 * This config only adds additional rules on top of Next.js defaults
 */
export default [
  {
    rules: {
      // Enforce alt text on images
      "jsx-a11y/alt-text": "warn",

      // Ensure ARIA props are valid
      "jsx-a11y/aria-props": "error",

      // Ensure ARIA prop values are valid
      "jsx-a11y/aria-proptypes": "error",

      // Ensure ARIA roles are valid
      "jsx-a11y/aria-role": "error",

      // Ensure ARIA state and property values are valid
      "jsx-a11y/aria-unsupported-elements": "error",

      // Enforce onClick is accompanied by keyboard event handler
      "jsx-a11y/click-events-have-key-events": "warn",

      // Enforce that heading elements (h1, h2, etc.) have content
      "jsx-a11y/heading-has-content": "warn",

      // Enforce that <html> element has lang prop
      "jsx-a11y/html-has-lang": "warn",

      // Enforce that elements with interactive handlers are focusable
      "jsx-a11y/interactive-supports-focus": "warn",

      // Enforce label has associated control
      "jsx-a11y/label-has-associated-control": [
        "warn",
        {
          assert: "either",
        },
      ],

      // Enforce that <img> or <area> use valid alt text
      "jsx-a11y/img-redundant-alt": "warn",

      // Enforce no access key attribute on elements
      "jsx-a11y/no-access-key": "warn",

      // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur
      "jsx-a11y/mouse-events-have-key-events": "warn",

      // Enforce that non-interactive elements have no interactive handlers
      "jsx-a11y/no-noninteractive-element-interactions": [
        "warn",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],

      // Enforce that static HTML elements have no event handlers
      "jsx-a11y/no-static-element-interactions": [
        "warn",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],

      // Enforce that tabIndex is not greater than zero
      "jsx-a11y/tabindex-no-positive": "warn",
    },
  },
];
