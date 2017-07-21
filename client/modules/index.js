/*
 * https://vuex.vuejs.org/en/modules.html
 */
import { enterprise } from './clients/enterprise';
import { startup } from './clients/startup';
import { web } from './products/web';
import { mobile } from './products/mobile';

const clients = {
  namespaced: true,
  modules: {
    enterprise,
    startup,
  },
};

const products = {
  namespaced: true,
  modules: {
    mobile,
    web,
  },
};

export { clients, products };
