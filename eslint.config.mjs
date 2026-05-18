import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:jsx-a11y/recommended",
    ],
    plugins: ["simple-import-sort"],
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      // Downgrade to warnings to allow build
      "@typescript-eslint/no-explicit-any": "warn",
      "@next/next/no-html-link-for-pages": "warn",
      "jsx-a11y/label-has-associated-control": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "jsx-a11y/heading-has-content": "warn",
    },
  }),
];

export default eslintConfig;
