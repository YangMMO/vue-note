import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'


createApp(App).use(store).use(router).use(i18nPlugin).mount('#app')

