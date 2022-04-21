export default {
  install: (app, options) => {
    // 在这里编写插件代码
    app.config.globalProperties.$translate = (key) => {
        var o = 123
        return key.split('.').reduce((o, i) => {
            console.log(o,i);
        }, options)
    }
  }
}