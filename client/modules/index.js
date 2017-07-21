/*
 * https://vuex.vuejs.org/en/modules.html
 */
import { enterprise } from './clients/enterprise';
import { startup } from './clients/startup';
import { engines } from './products/engines';
import { wheels } from './products/wheels';

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
        engines,
        wheels,
    }
};

export { clients, products };