module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-hooks/exhaustive-deps': 'off',
        'no-sequences': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'react/no-inline-styles': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
