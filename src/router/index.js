import Vue from 'vue'
import Router from 'vue-router'
import { mapGetters, mapActions } from 'vuex'
import Main from '@/components/Main'
import Table from '@/components/Table'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import store from '../store'

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!store.getters.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  } else {
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      beforeEnter: requireAuth,
    },
    {
      path: '/',
      name: 'Table',
      component: Table,
      beforeEnter: requireAuth,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
})
