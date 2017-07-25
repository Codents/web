/*
 * https://vuex.vuejs.org/en/modules.html
 */
import { enterprise } from './clients/enterprise';
import { startup } from './clients/startup';
import { web } from './products/web';
import { mobile } from './products/mobile';
import { home } from './modules/home';

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

const home = {
  namespaced: true,
  modules: {
    home,
  },
};

export { clients, productsme, home };
