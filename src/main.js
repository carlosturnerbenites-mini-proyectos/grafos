import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.appVue = new Vue({
  el: '#app',
  template: '<App ref="app" />',
  components: { App },
});
