import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

const updater = remote.require('electron-simple-updater');

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

setText('0.0.1', updater.version);
setText('dev', updater.buildId);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
