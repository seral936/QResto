import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import { store } from './components/store/store.js';

// export const enventBus = new Vue();
Vue.prototype.$ebus = new Vue()



const router = new VueRouter({
	routes,
  mode: 'history',
})


Vue.use(VueRouter);




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
