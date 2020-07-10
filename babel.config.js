module.exports = api => {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ]

  // https://github.com/babel/babel/issues/8829
  const plugins = [
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]

  return {
    presets,
    plugins
  };
}