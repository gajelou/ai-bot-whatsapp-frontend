import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'



const routes = [
  { path: '/Home', component: Home },
  { path: '/Login', component:Login},
  { path: '/About', component:About},
  { path: '/Product', component:Product},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;