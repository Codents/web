import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';
import { clients, products } from '../modules';
import { es, en } from '../i18n';

Vue.use(Vuex);

const state = {};
const mutations = {};
const actions = {};

console.log(clients, products);
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    clients,
    products,
  },
});

Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', en);
Vue.i18n.add('de', es);
Vue.i18n.set(navigator.languaje);

export default store;
