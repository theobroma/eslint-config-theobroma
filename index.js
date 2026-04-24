import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
    js.configs.recommended,

    {
        plugins: {
            import: importPlugin,
            'unused-imports': unusedImports,
        },

        rules: {
            // general quality
            'no-console': 'warn',
            'no-debugger': 'error',

            // imports
            'import/order': [
                'warn',
                {
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],

            // unused
            'unused-imports/no-unused-imports': 'error',
            'no-unused-vars': 'off',

            'unused-imports/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
        },
    },
];
