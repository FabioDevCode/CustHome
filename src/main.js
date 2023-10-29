import './assets/main.css';
import 'vue3-toastify/dist/index.css';


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.mount('#app');