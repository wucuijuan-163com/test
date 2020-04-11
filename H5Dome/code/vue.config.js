const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    configureWebpack: {
        //配置别名
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                '@assets': resolve('src/assets'),
                '@css':resolve('src/assets/css'),
                '@images':resolve('src/assets/images'),
                '@views': resolve('src/views'),
                '@components':resolve('src/components'),
                '@api':resolve('src/api'),
                '@store': resolve('src/store'),
            }
        }
    },
    productionSourceMap: false,   //关闭source map（1.减少打包编译的时间，2.避免在生产环境中用F12开发者工具在Sources中看到源码）
    devServer:{
      port: 8000,         //固定端口
      hot: true,          //开启热更新
      open: 'Google Chrome'         //固定打开浏览器
  }
}
