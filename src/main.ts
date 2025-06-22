import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/base.css'
// font awsome imports
import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faFacebook, faTwitter, faPinterest, faInstagram)

const app = createApp(App)

app.use(router)
app.use(store)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
