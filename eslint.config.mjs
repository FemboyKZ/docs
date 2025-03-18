import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  { ignores: ["**/node_modules/**", "**/dist/**", "**/build/**"] },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "no-unused-vars": "off",
    },
  },
];
