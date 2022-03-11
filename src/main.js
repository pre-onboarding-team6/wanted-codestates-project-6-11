import Vue from 'vue';
import App from './App.vue';
import './assets/css/reset.css';

export const eventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
