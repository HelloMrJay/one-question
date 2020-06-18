/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const { POSTCSS_MODES } = require("@craco/craco");
const path = require('path')

module.exports = {
    // ...
    style: {
      postcss: {
        mode: POSTCSS_MODES.file
      }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    modifyVars: { '@primary-color': '#1DA57A' },
                    javascriptEnabled: true,
                }
            }
        }
    ],
  webpack: {
      alias: {
        '@': path.join(path.resolve(__dirname, './src')),
        '@image': path.join(path.resolve(__dirname, './src/assets/images')),
        '@api': path.join(path.resolve(__dirname, './src/api'))
      }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
    }
  }
};
