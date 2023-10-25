import { createRouter, createWebHistory } from 'vue-router';
import SalaVirtual from './pages/Room3d.vue';

const routes = [
  {
    path: '/sala-virtual',
    name: 'SalaVirtual',
    component: SalaVirtual,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
