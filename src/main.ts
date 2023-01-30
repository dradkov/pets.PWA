import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./styles/_index.scss";
// import { store } from './store/store'

import { configureStore } from './store/store';


// createApp(App).use(store).use(router).mount("#app");

export let store: any;

(async () => {
 store = await configureStore();
 createApp(App).use(store).use(router).mount("#app");
})();
