import { createRouter, createWebHistory } from 'vue-router';
import List from '../pages/List.vue';
import Home from '../pages/Home.vue'; 
import AForm from '../pages/AForm.vue';
import BForm from '../pages/BForm.vue';

const routes = [
  {
    path: '/',
    component: Home, 
  },
  {
    path: '/form-a',
    component: AForm,
  },
  {
    path: '/form-b',
    component: BForm,
  },
  {
    path: '/list',
    component: List,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;