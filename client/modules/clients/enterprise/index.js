const enterprise = {
    namespaced: true,
    state: {
        clients: 0,
    },
    mutations: {
        add(state) {
            state.clients++;
        }
    },
    actions: {},
    getters: {
        doubleClients(state) {
            return state.client * 2;
        }
    },
};

export { enterprise };