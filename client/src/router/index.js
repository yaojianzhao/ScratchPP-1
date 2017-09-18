import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import VueRouter from 'vue-router'

import Login from '@/components/PAGES/PAGE-login'

Vue.use(VueRouter);

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },

  ]
})
