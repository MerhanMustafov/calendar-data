import path from 'path';
import { WebpackConfig } from './webpack/webpack.types';
import TerserPlugin from 'terser-webpack-plugin';

const config: WebpackConfig = (env) => {
  const isProduction = env.mode === 'prod' ? true : false;
  const plugins: any[] = [];

  return {
    target: 'node',
    mode: isProduction ? 'production' : 'development',
    stats: isProduction ? 'none' : 'minimal',
    devtool: isProduction ? undefined : 'source-map',
    entry: {
      index: {
        import: './src/index.ts'
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: isProduction ? undefined : '[name].[contenthash].chunk.js', // Specify a unique filename for chunks
      sourceMapFilename: isProduction ? undefined : '[name].[contenthash].js.map', // Specify the desired name template for source maps
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      clean: true // clean the dist folder before each build
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', '*']
    },
    devServer: {
      compress: true,
      port: 9001,
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
    plugins: plugins,
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
