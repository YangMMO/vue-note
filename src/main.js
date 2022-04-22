import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'

// createApp(App).use(store).use(router).mount('#app')
createApp(App).use(store).use(router).use(i18nPlugin, {
    cn: {
        header: {
            hello: '你好'
        }
    },
    en: {
        hello: 'Hello!'
    }
}).mount('#app')

