import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Welcome from '@/components/Welcome'
import List from '@/components/List'
import Stock from '@/components/Stock'
import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/stock',
      name: 'Stock',
      component: Stock
    },
  ]
})
