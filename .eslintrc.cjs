// .eslintrc.cjs

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
    plugins: [],
    rules: {
        'prettier/prettier': [
            'off',
            { singleQuote: true, endOfLine: 'auto', tabWidth: 2 },
        ],
    },
};
