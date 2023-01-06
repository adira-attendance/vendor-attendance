import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification';
import {useUserStore} from './stores/session.ts'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
const userStore=useUserStore()  
app.use(ToastPlugin,{
    position:'top-right'
})

app.mount('#app')
