import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import CSS from '../views/CSS.vue'
import Blog from '../views/Blog.vue'
import Games from "../views/Games.vue"
import Beobachtungsbogen from "../views/Beobachtungsboegen.vue"

import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/css',
    name: 'CSS',
    component: CSS
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: "/games",
    name: "Games",
    component: Games
  },
  {
    path: "/beobachtungsboegen",
    name: "Beobachtungsbögen",
    component: Beobachtungsbogen
  },



  {
    // 404-Error-Page
    // muss am Ende stehen
    path: "/*",
    name: "404 - Not Found",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
