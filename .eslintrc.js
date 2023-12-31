module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'airbnb',
        'airbnb-typescript',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
                es2021: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'spaced-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'arrow-body-style': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-nested-ternary': 'off',
        'react/require-default-props': 'warn', // or "warn"
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'snake_case', 'UPPER_CASE', 'PascalCase'],
            },
        ],
        'react/function-component-definition': [
            2,
            { namedComponents: ['arrow-function', 'function-declaration'] },
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
    },
};
