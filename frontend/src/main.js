import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naver from "vue3-naver-maps"
import BootstrapVue3 from 'bootstrap-vue-3'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import { BToastPlugin } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from 'axios'
import mitt from 'mitt'
import { VueGeolocationApi } from 'vue-geolocation-api'

const app = createApp(App);
const emitter = mitt();

axios.defaults.baseURL = 'http://127.0.0.1:3000'

app.use(router);
app.use(BootstrapVue3);
app.use(BootstrapIconsPlugin);
app.use(BToastPlugin);
app.use(VueGeolocationApi);
app.use(naver, {
    clientId: process.env.VUE_APP_CLIENT_ID,
})

app.config.globalProperties.emitter = emitter;
app.mount('#app');
