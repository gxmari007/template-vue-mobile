import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    component: () => import('./about.vue'),
  },
];
