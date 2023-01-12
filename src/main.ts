import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification';
import './assets/main.css'
import VueCookies from 'vue3-cookies'

const app = createApp(App)
app.use(router)
app.use(VueCookies, {
    expireTimes: 1800,
    secure: true,
});
app.use(createPinia())
app.use(ToastPlugin,{
    position:'top-right'
})

app.mount('#app')
