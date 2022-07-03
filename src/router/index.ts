import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw>  = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../view/Login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../view/Home.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;