import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {rules: { 
        'react/no-unescaped-entities': 0,
        'indent': [2, 4],
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }]
    }}
];