module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@infrastructure': './src/infrastructure',
          '@adapters': './src/adapters',
          '@domain': './src/domain',
          '@application': './src/application'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts', '**/*.interface.ts']
};
