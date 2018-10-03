import Vue from 'vue';
import App from './App.vue';

import VueRouter  from "vue-router";
import store      from "./store/index";
import VueTheMask from 'vue-the-mask';

// components || paths
import Home     from "./components/_Home";
import Contacts from "./components/_Contacts";

// connect routing
Vue.use(VueRouter);
Vue.use(VueTheMask);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }, {
        path: "/contacts.html",
        name: "Contacts",
        component: Contacts
    }
];

const router = new VueRouter({
    mode: "history",
    routes: routes
});

const app = new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});

window.APCVUE = app;
