module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@providers': './src/providers',
          '@services': './src/services',
          '@state': './src/state',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@src': './src',
        },
      },
    ],
  ],
};
