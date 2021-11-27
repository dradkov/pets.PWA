import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./styles/_index.scss";
import { store, key } from './store/store'


createApp(App).use(store, key).use(router).mount("#app");
