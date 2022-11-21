import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import {BootstrapIconsPlugin} from "bootstrap-icons-vue";
//import Datepicker from '@vuepic/vue-datepicker';

import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import NavbarOrganism from "@/components/subComponents/Navbar-Organism";
import FooterComponent from "@/components/subComponents/FooterOrganism";

const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.use(BootstrapIconsPlugin);

//you can use components application wide, by adding them before the full app is mounted
//this way you have them available in the App.vue file as well
app.component('NavbarOrganism', NavbarOrganism)
app.component('FooterComponent', FooterComponent);

app.mount('#app');

