import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design';

import './less/iview-theme.less'

Vue.use(ViewUI);

import './assets/icons/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
