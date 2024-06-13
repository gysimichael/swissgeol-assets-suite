const templateParser = require('@angular-eslint/template-parser');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nxEslintPlugin = require('@nx/eslint-plugin');
const stylistic = require('@stylistic/eslint-plugin');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginImport = require('eslint-plugin-import');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  {
    plugins: {
      '@nx': nxEslintPlugin,
      import: eslintPluginImport,
      '@stylistic': stylistic,
    },
  },
  ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
  })),
  ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx'],
  })),
  ...compat.config({ env: { jest: true } }).map((config) => ({
    ...config,
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx'],
  })),
  ...compat.config({ extends: ['plugin:@nx/angular'] }),
  ...compat
    .config({
      extends: ['plugin:@nx/angular-template', 'plugin:@angular-eslint/template/process-inline-templates'],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.html'],
      languageOptions: {
        parser: templateParser,
      },
      rules: {
        ...config.rules,

        // Require equality to be checked with `===` instead of `==`.
        // Make an exception for `null` and `undefined` to cover both in a single comparison.
        '@angular-eslint/template/eqeqeq': [
          'error',
          {
            allowNullOrUndefined: true,
          },
        ],
      },
    })),
  eslintConfigPrettier,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Enforce imports of NX modules to go through the module's entrypoint.
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],

      // Require imports to be sorted alphabetically.
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'sort-imports': 'off',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];
