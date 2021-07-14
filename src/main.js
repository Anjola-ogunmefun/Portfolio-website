import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import NavBar from "./components/BaseComponents.vue/NavBar.vue"
const app = createApp(App)
app.use(router)

app.use('nav-bar', NavBar)

app.mount('#app')
