// 官方文件
import Vue from 'vue'
import VueRouter from 'vue-router'

// 自定義分頁元件
// 載入元件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Location from '../views/Location.vue'
import Story from '../views/Story.vue'
import Find from '../views/Find.vue'
import Login from '../views/Login.vue'
import Link from '../views/Link.vue'
import Provider from '../views/Provider.vue'
// import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 預設載入首頁
    name: 'Home', // 元件呈現名稱
    component: Home, // 相對應元件
    meta: {
      title: '首頁',
      needLogin: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '關於我們',
      needLogin: false
    }
  },
  {
    path: '/location',
    name: 'Location',
    component: Location,
    meta: {
      title: '老屋據點',
      needLogin: false
    }
  },
  {
    path: '/story',
    name: 'Story',
    component: Story,
    meta: {
      title: '老屋新生',
      needLogin: false
    }
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    meta: {
      title: '老屋媒合',
      needLogin: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '老屋登錄',
      needLogin: false
    }
  },
  {
    path: '/link',
    name: 'Link',
    component: Link,
    meta: {
      title: '友善連結',
      needLogin: false
    }
  },
  {
    path: '/provider',
    name: 'Provider',
    component: Provider,
    meta: {
      title: '提供者',
      needLogin: true
    }
  }
]

// const router = new VueRouter({
//   routes
// })

// 進入每頁前檢查登入狀態
// to 即將訪問的頁面
// from 是來源頁面
// next 是採取的導向動作
// router.beforeEach((to, from, next) => {
//   // 如果要去的地方需要登入，但是 vuex 沒有使用者資料時
//   if (to.meta.needLogin && store.state.user.length === 0) {
//     // 跳出訊息
//     alert('請先登入')
//     // 導向登入頁面
//     next('/login')
//   } else {
//     // 正常導向
//     next()
//   }
// })

// export default router

const router = new VueRouter({
  routes
})

// 進入頁面後，設定網頁標題
// to 進去的那頁
// from 從哪頁過來
router.afterEach((to, from) => {
  document.title = to.meta.title
  window.scrollTo(0, 0)
})

export default router
