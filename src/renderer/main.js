import Vue from 'vue'
import i18n from './locale'

import App from './App'
import router from './router'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.config.lang = 'en';

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>',
  i18n
}).$mount('#app')
