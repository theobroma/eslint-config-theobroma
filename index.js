import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';

const base = [
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

            // prettier-ignore
            "eqeqeq": ["error", "always"],
            'no-implicit-coercion': 'warn',
            'no-throw-literal': 'error',

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

        languageOptions: {
            globals: {
                window: 'readonly',
                process: 'readonly',
            },
        },
    },
];

export default [...base, prettier];
