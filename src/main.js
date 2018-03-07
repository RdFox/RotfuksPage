import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueFire from 'vuefire';

import App from './App';
import router from './router';


Vue.use(VueFire);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
