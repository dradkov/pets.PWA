import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from 'vue-cookies';
import "./registerServiceWorker";
import router from "./router";
import "./styles/_index.scss";
import Vue from 'vue';
import vuetify from 'vuetify';


import { configureStore } from './store/store';


export let store: any;

(async () => {
 store = await configureStore();
 createApp(App).use(store).use(router).use(VueCookies, { expires: '1h'}).mount("#app");
})();
