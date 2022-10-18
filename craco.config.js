const CracoLessPlugin = require('craco-less')

const path = require('path')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  webpack: {
    // 配置路径别名
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils')
    }
  },
  plugins: [
    // 配置支持less
    {
      plugin: CracoLessPlugin
    }
  ]
}
