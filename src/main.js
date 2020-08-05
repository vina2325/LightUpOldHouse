import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IntroJs from 'intro.js'
import $ from 'jquery'
import carousel from 'vue-owl-carousel'
import Photoswipe from 'vue-pswipe'
import VueSweetalert2 from 'vue-sweetalert2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'intro.js/minified/introjs.min.css'
import 'intro.js/themes/introjs-modern.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import './style/style.css'
import { mdbBtn, mdbView, mdbMask, mdbCollapse, mdbContainer } from 'mdbvue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDoubleDown, faTimes, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleDown, faTimes, faHome)

// 讓 axios 預設會傳認證資訊
axios.defaults.withCredentials = true
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('mdb-btn', mdbBtn)
Vue.prototype.$ = $
Vue.config.productionTip = false
Vue.use(IntroJs)
Vue.use(Photoswipe)
Vue.use(VueSweetalert2)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default {
  components: {
    carousel,
    $,
    mdbView,
    mdbMask,
    mdbBtn,
    mdbCollapse,
    mdbContainer
  }
}
