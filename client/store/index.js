import Vue from 'vue'
import Vuex from 'vuex'
import { clients, products } from '../modules';
import { enterprise } from '../modules/clients/enterprise';

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

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

export default store
