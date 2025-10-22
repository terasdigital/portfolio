import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
// import pluginNext from "@next/eslint-plugin-next"; // penting agar rules Next aktif
// import tseslint from "@typescript-eslint/eslint-plugin"; // untuk rules TS
// import parser from "@typescript-eslint/parser"; // parser TS
import { plugin } from "postcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    // rules: {
    //   // nonaktifkan rules yang menyebabkan gagal build di vercel
    //   "react/no-unescaped-entities": "off",
    //   "@next/next/no-img-element": "off",
    //   "next/next/no-html-link-for-pages": "off",
    //   "@typescript-eslint/no-unused-vars": "warn", // jangan erro, cukup warning
    // },
    plugins: {
      "@next/next": pluginNext,
      "@typescript-eslint": tseslint,
    },
    // languageOptions: {
    //   parser,
    // },
  },
];

export default eslintConfig;
