import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import storybook from "eslint-plugin-storybook";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  ...compat.extends("airbnb"),
  ...compat.extends("airbnb-typescript"),
  ...storybook.configs["flat/recommended"],
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "import/prefer-default-export": "off",
      "import/extensions": "off",
      "react/function-component-definition": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    },
  },
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "postcss.config.mjs",
      "eslint.config.mjs",
      "vitest.config.ts",
      "vitest.shims.d.ts",
      "next.config.ts",
      "tailwind.config.ts",
      "components.json",
      ".storybook/**",
      "public/**",
    ],
  },
];

export default eslintConfig;
