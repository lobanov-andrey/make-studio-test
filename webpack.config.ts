import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import * as webpack from 'webpack'
import * as webpackDevServer from 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// @ts-ignore
module.exports = (env, args): webpack.Configuration => {
  const production = args.mode == 'production'

  const plugins: webpack.Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]

  return {
    target: 'web',
    entry: './src/index.tsx',
    mode: production ? 'production' : 'development',
    devtool: production ? 'source-map' : 'eval',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, '/public'),
      },
      port: 8888,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        edge: '17',
                        firefox: '60',
                        chrome: '67',
                        safari: '11.1',
                        ie: '11',
                      },
                      useBuiltIns: 'usage',
                      corejs: '3.22.5',
                    },
                  ],
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[hash].[ext]',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
  }
}
