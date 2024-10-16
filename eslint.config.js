import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import antfu from '@antfu/eslint-config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default antfu({
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],

  rules: {
    'no-undef': 'off',
    'no-restricted-globals': [
      'error',
      {
        name: 'process',
        message: 'Use require("process") instead.',
      },
    ],
  },

  parser: '@typescript-eslint/parser', // Parser üst düzeyde

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json', // TypeScript projeyi tanımla
  },
})
