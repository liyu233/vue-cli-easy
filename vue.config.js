/*自定义配置文件*/
module.exports = {
    //构建判断引入路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    /*代理-本地跨域解决*/
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
};
