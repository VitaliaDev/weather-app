module.exports = {
    // Otras configuraciones de Webpack
    module: {
      rules: [
        // Otros loaders
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/icons',
                publicPath: 'assets/icons',
              },
            },
          ],
        },
      ],
    },
  };
  