import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/base.css'
// font awsome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)

const app = createApp(App)

app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
