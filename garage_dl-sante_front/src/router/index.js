import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue'),
    beforeEnter (to, from, next){
      console.log(to, from, next)
      let comfirm = window.confirm('????')
      if(comfirm){
        next()
      }else{
        next('/register')
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/garage',
    name: 'Garage',
    component: () => import('../views/Garage.vue')
  },
  {
    path: '/car/:id',
    name: 'CarEdit',
    component: () => import('../views/Edit.vue')
  },
  {
    path: '/car/add',
    name: 'AddCar',
    component: () => import('../views/AddCar.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
