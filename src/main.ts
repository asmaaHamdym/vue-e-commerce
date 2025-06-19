import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// font awsome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(router)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
