import Vue  from 'vue'
import Vuex from 'vuex';

// connect vuex
Vue.use(Vuex);

export default new Vuex.Store({
    namespaces: true,
    state: {
        form: {
            name: "Tom",
            mobile: "9563333333"
        }
    },
    actions: {
        updateFormProp: function(context, payload) {
            context.commit("setFormProp", payload);
        }
    },
    mutations: {
        setFormProp: function(state, payload) {
            state.form = payload;
        }
    }
})
