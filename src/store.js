import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    name: '',
    list: [
        {
            id: '1',
            name: 'aaaa',
        },
        {
            id: '2',
            name: 'bbbb',
        },
        {
            id: '3',
            name: 'cccc',
        },
    ]
};

const mutations = {
    setName(state, name) {
        state.name = name
    },
    addStock(state, obj) {
        state.list.push({ id: obj.id, name: obj.name })
    },
    removeStock(state, obj) {
        state.list.pop({ id: obj.id, name: obj.name })
    },
    logout(state) {
        state.name = ''
    }
};

export default new Vuex.Store({
    state,
    mutations,
});
