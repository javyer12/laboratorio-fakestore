const path = require('path');

module.exports = {
      entry: "src/index.js",
      mode: 'development',
      output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: '/',
      },
      resolve: {
            extensions: [ '.js', '.jsx' ],
      },
      module: {
            rules: [
                  {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                              loader: 'babel-loader',
                        },
                  },
                  {
                        test: /\.html$/,
                        use: [
                              {
                                    loader: 'html-loader',
                              },
                        ],
                  },
                  {
                        test: /\.js$/,
                        use: 'raw-loader'
                  },
                  {
                        test: /\.(css)$/,
                        use: [
                              {
                                    loader: MiniCssExtractPlugin.loader,
                              },
                              'css-loader'
                        ],
                  },
                  {
                        test: /\.(png|gif|jpg|svg)$/,
                        use: [
                              {
                                    loader: 'file-loader',
                                    options: { name: 'assets/[hash].[ext]' },
                              }
                        ],
                  },
            ]
      },
      plugins: [
            new HtmlWebpackPlugin({
                  template: './public/index.html',
                  filename: './index.html',
            }),
            new MiniCssExtractPlugin({
                  filename: 'assets/[name].css',
            }),
      ],
      devServer: {
            static: {
                  directory: path.join(__dirname, 'public'),
            },
            compress: true,
            historyApiFallback: true,
            open: true,
            port: 3007,
      },
}