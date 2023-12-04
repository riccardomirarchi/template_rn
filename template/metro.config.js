const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const sourceExts = require('metro-config/src/defaults/defaults').sourceExts;
const assetExts = require('metro-config/src/defaults/defaults').assetExts;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('./customTransformer.js'),
    getTransformOptions: async () => {
      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      };
    },
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg' && ext !== 'scss'),
    sourceExts: [...sourceExts, 'svg', 'scss', 'sass'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
