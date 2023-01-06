import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification';

import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)


app.use(ToastPlugin,{
    position:'top-right'
})

app.mount('#app')
