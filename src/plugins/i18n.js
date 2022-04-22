export default {
    // app.use时会可传参options，当options存在，则reduce有初始值o
    // reduce会遍历，i = 每一个item
    // 这里模拟的i18n 从options中匹配对应的值
    install: (app, options) => {
        // 在这里编写插件代码
        app.config.globalProperties.$translate = (key) => {
            let index = 0;
            return key.split('.').reduce((o, i) => {
                // 如果options中存在对应的值，则返回对应的语言包
                console.log(o, i);
                if (o) return o[i]
        }, options)
    }
  }
}