import { createRouter, createWebHistory } from 'vue-router';
import SalaVirtual from './pages/Room3d.vue';
import SingUp from './pages/SingUp.vue'

const routes = [
  {
    path: '/sala-virtual',
    name: 'SalaVirtual',
    component: SalaVirtual,
  },
  {
    path: '/criar-conta',
    name: 'Singup',
    component: SingUp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
