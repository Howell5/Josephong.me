// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import elementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import App from './App';
import router from './router';


Vue.config.productionTip = true;  // 生产环境提示

Vue.prototype.$http = axios;
Vue.use(elementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
