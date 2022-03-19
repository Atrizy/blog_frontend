import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import CreatingBlog from '@/views/CreatingBlog.vue'
import UserProfile from '@/views/UserProfile.vue'
import BloggingPage from '@/views/BloggingPage.vue'
import ApplyPage from '@/views/ApplyPage.vue'

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
    component: CreatingBlog
  },
  {
    path: "/blog",
    name: "blog",
    component: BloggingPage
  },
  {
    path: "/apply",
    name: "apply",
    component: ApplyPage
  }
]

const router = new VueRouter({
  routes
})

export default router
