import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import CreateBlog from '@/views/CreatingBlog.vue'
import UserProfile from '@/views/UserProfile.vue'
import BloggingPage from '@/views/BloggingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },  
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfile
  },
  {
    path: "/create",
    name: "create",
    Component: CreateBlog
  },
  {
    path: "/blog",
    name: "blog",
    component: BloggingPage
  }
]

const router = new VueRouter({
  routes
})

export default router
