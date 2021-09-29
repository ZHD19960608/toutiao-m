// postcss的配置文件
module.exports = {
  plugins: {
    // 兼容不同浏览器厂商
    // autoprefixer: {
    //     // browsers用来配置要兼容到的系统环境
    //     // 写到这里会有控制台编译警告,因为会和browerslistrc文件冲突
    //     browsers: ['Android >= 4.0', 'iOS >= 8'],
    // },
    // 兼容px转rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
