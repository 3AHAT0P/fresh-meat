import { createRouter, createWebHistory } from 'vue-router';

import IndexPage from './index-page.component.vue';
import DevPage from './dev-page.component.vue';

const routes = [
  { path: '/', component: IndexPage },
  { path: '/dev', component: DevPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});