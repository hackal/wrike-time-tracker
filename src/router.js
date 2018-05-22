import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Setup from './views/Setup.vue'
import WhoAreYou from './views/WhoAreYou.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    },
    {
      path: '/who-are-you',
      name: 'who-are-you',
      component: WhoAreYou
    }
  ]
})
