import todoAddPageVue from '@/views/todoAddPage.vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import TodoDetailPage from "../views/TodoDetailPage.vue"
import TodoEditPageVue from '../views/TodoEditPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/todo/add/',
    name: 'TodoAdd',
    component: todoAddPageVue
  },
  {
    path: '/todo/:id',
    name: 'TodoDetail',
    component: TodoDetailPage
  },{
    path: '/todo/edit/:id',
    name: 'EditTodo',
    component: TodoEditPageVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
