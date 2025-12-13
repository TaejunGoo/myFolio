import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import importPlugin from "eslint-plugin-import";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  // ============================================
  // 기본 설정: JavaScript, TypeScript, Next.js
  // ============================================
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...nextVitals,
  ...nextTs,
  ...storybook.configs["flat/recommended"],

  // ============================================
  // Tailwind CSS 설정
  // ============================================
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
      // Stylistic rules (recommended + autofix)
      "better-tailwindcss/enforce-consistent-line-wrapping": ["off", { lineBreakStyle: "windows" }],
      "better-tailwindcss/enforce-consistent-class-order": "warn",
      "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
      "better-tailwindcss/enforce-consistent-important-position": "warn",
      "better-tailwindcss/enforce-shorthand-classes": "warn",
      "better-tailwindcss/no-duplicate-classes": "error",
      "better-tailwindcss/no-deprecated-classes": "warn",
      "better-tailwindcss/no-unnecessary-whitespace": "error",

      // Correctness rules (recommended)
      "better-tailwindcss/no-conflicting-classes": "error",
    },
  },

  // ============================================
  // Import 설정
  // ============================================
  {
    plugins: {
      "import": importPlugin,
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
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before",
            },
            {
              "pattern": "@/**",
              "group": "internal",
            },
          ],
          "pathGroupsExcludedImportTypes": ["react"],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true,
          },
        },
      ],
    },
  },

  // ============================================
  // 무시할 파일 및 폴더
  // ============================================
  {
    ignores: ["build/*", "dist/*", "**/.next/*", "**/node_modules/*"],
  },

  // ============================================
  // 파일별 언어 설정
  // ============================================
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // ============================================
  // React 설정
  // ============================================
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },

  // ============================================
  // 코드 스타일 규칙 (@stylistic)
  // ============================================
  {
    plugins: { "@stylistic": stylistic },
    rules: {
      // 들여쓰기 및 따옴표
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/jsx-quotes": ["error", "prefer-double"],

      // 공백 및 괄호
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
      "@stylistic/arrow-parens": ["error", "always"],

      // 줄바꿈 및 빈 줄
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
    },
  },
]);
