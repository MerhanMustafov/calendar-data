import { Configuration as _WebpackConfig } from 'webpack';
import { Configuration as _WebpackDevServerConfig } from 'webpack-dev-server';

export type Env = {
  mode: 'dev' | 'prod';
};

export type WebpackConfig = (env: Env) => _WebpackConfig & { devServer?: _WebpackDevServerConfig };
