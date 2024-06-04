import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["vite.config.js", "dist","server/*"]
  },
  {
    rules: {
      '@typescript-eslint/no-this-alias': [
        'error',
        { allowedNames: ["self"] }
      ],
    }
  }
];
