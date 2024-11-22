import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,vue}"],
      languageOptions: {
        globals: globals.browser,
        parser: "@typescript-eslint/parser",
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: "module",
        },
      },
      plugins: [
        "@typescript-eslint",
        "vue"
      ],
      rules: {
        // Add your custom rules here
      },
    },
  ],
};