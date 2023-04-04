import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ConnexionPage from '../views/Connexion.vue'
import AccueilPage from '../views/Accueil.vue'
import AddCategorie from "../views/AddCategorie.vue";
import AddConcert from "../views/AddConcert.vue";
import AddUtilisateur from "../views/AddUtilisateur.vue";AddConcert

import ListCategories from '../views/ListCategories.vue'
import ListUtilisateurs from '../views/ListUtilisateurs.vue'
import ListConcerts from '../views/ListConcerts.vue'

import DetailsConcert from '../views/DetailsConcert.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/connexion'
  },
  {
    path: '/acceuil',
    name: 'Accueil',
    component: AccueilPage
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: ConnexionPage
  },
  {
    path: '/details/concert/:id',
    name: 'DetailsCocncert',
    component: DetailsConcert
  },
  {
    path: '/add/categorie',
    name: 'AddCategorie',
    component: AddCategorie
  },
  {
    path: '/add/utilisateur',
    name: 'AddUtilisateur',
    component: AddUtilisateur
  },
  {
    path: '/add/concert',
    name: 'AddConcert',
    component: AddConcert
  },
  {
    path: '/list/categories',
    name: 'ListCategories',
    component: ListCategories
  },
  {
    path: '/list/utilisateurs',
    name: 'ListUtilisateurs',
    component: ListUtilisateurs
  },
  {
    path: '/list/concerts',
    name: 'ListConcerts',
    component: ListConcerts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
