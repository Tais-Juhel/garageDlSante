import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/1'
  },
  {
    path: '/:id',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/:id/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/:id/garage',
    name: 'Garage',
    component: () => import('../views/Garage.vue')
  },
  {
    path: '/car/:id',
    name: 'CarEdit',
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/:id/car/add',
    name: 'AddCar',
    component: () => import('../views/AddCar.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
