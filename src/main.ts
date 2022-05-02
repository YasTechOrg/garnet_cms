import { createApp } from 'vue'
import App from './App.vue'
import Particles from "particles.vue3"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/vendors/uicons-regular-rounded.css"
import "font-awesome/css/font-awesome.min.css"

const app = createApp(App)
app.use(Particles)
app.mount('#app')
