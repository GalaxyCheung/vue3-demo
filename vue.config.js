const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // 多入口配置
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //   }
  // },
  // 打包app时放开该配置
  // publicPath:'./',
  configureWebpack: (config) => {
    // 生产环境取消 console.log
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'))
    // 生产环境，开启压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin').use(new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css/, // 匹配文件名
        threshold: 0, // 对超过0k的数据压缩
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false // 不删除源文件
      }))
    }
    // 配置 webpack 识别 markdown 为普通的文件
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use()
      .loader('file-loader')
      .end()
    // 编译某些npm包里的es6代码
    config.module
      .rule('vxe')
      .test(/\.js$/)
      .include
      .end()
      .use()
      .loader('babel-loader')
      .end()
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    hot: true,
    open: true,
    port: 3000
    // proxy: {
    //   '/xxx': {
    //     target: 'http://xxx',
    //     ws: false,
    //     changeOrigin: true,
    //     pathRewrite: { '^/xxx': '/xxx' }
    //   }
    // }
  },
  lintOnSave: undefined
}
