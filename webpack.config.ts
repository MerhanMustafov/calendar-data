import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration as WebpackConfig } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';
import TerserPlugin from 'terser-webpack-plugin';

type IEnv = {
  mode: 'dev' | 'prod';
};
type IConfiguration = (env: IEnv) => WebpackConfig & { devServer?: WebpackDevServerConfig };

const config: IConfiguration = (env) => {
  const isProduction = env.mode === 'prod' ? true : false;

  return {
    mode: isProduction ? 'production' : 'development',
    stats: isProduction ? 'none' : 'minimal',
    devtool: 'source-map',
    entry: {
      index: {
        import: './src/index.ts'
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[contenthash].chunk.js', // Specify a unique filename for chunks
      sourceMapFilename: '[name].[contenthash].js.map', // Specify the desired name template for source maps
      path: path.resolve(__dirname, 'dist'),
      clean: true // clean the dist folder before each build
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', '*']
    },
    devServer: {
      compress: true,
      port: 9000,
      open: true,
      hot: true // enable hot module replacement feature
    },
    module: {
      rules: [
        {
          test: /\.(ts)$/i,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]]
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: '[name].html',
        title: 'Calendar-Data'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: true,
            format: {
              comments: false
            }
          },
          extractComments: false
        })
      ]
    }
  };
};

export default config;
