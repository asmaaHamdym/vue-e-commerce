import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/assets/base.css'
// font awsome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBars,
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
  faCartShopping,
  faStar,
  faStarRegular,
)

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
