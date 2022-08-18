import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'
import vFocus from '@/custom/v-focus'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store)

app.directive('focus', vFocus)

app.mount('#app')
