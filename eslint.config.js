import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-console': 'error',
      'no-var': 'error',
      'no-unused-vars': 'error',
      'no-redeclare': 'error',
      'prefer-const': 'error',
    },
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  eslintConfigPrettier,
])
