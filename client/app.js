/*
 * https://github.com/egoist/vuepack
 * https://github.com/vuejs/vuex/tree/dev/examples
 * https://coverr.co/
 */
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Home from './modules/home';
import router from './router';
import store from './store';

sync(store, router);

const app = new Vue({
  router,
  store,
  ...Home,
});

export { app, router, store };
