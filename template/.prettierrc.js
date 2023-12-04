module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  singleQuote: true,
  printWidth: 150,
  importOrder: ['<THIRD_PARTY_MODULES>', '^@assets/(.*)$', '^@components/(.*)$', '^@styles/(.*)$', '^[./]'],
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
