module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@libs': './src/libs',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
        },
      },
    ],
    ['@babel/plugin-transform-private-methods', {loose: true}],
  ],
};
