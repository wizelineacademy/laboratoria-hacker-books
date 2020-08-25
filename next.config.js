module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const { dev, isServer } = options
    const extractCSSPlugin = new ExtractTextPlugin({
      filename: 'static/style.css',
      disable: dev
    })
    
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    config.module.rules.push({
      test: /\\.css$/,
      use: cssLoaderConfig(extractCSSPlugin, {
        cssModules,
        dev,
        isServer
      })
    })

    // Important: return the modified config
    return config
  },
}