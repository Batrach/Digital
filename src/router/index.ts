// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Basket from '../views/Basket.vue';
  

const routes = [
  { path: '/', component: Home },
  { path: '/basket', component: Basket },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
