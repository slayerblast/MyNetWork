import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import CreatProfilView from '../views/CreateProfilView.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'post',
        component: PostView
      },
      {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionView
       
      },
      {
        path: '/creation',
        name: 'createprofil',
        component: CreatProfilView
       
      }
    ]
  })
  
  export default router