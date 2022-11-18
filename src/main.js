import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import {BootstrapIconsPlugin} from "bootstrap-icons-vue";

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

createApp(App).use(router).use(BootstrapVue3).use(BootstrapIconsPlugin).mount('#app');


