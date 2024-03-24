import { createApp } from "vue";
import "./style.css";
import router from "./router/routerIndex";
import App from "./App.vue";
import axios from "axios";
import { createPinia } from "pinia";
const pinia = createPinia();
createApp(App).use(pinia).use(axios).use(router).mount("#app");
