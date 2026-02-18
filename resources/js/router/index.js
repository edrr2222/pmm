import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import Login from '../pages/Login.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard },
     { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
