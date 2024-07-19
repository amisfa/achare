import routes from "@/pages/routes";
import {createWebHistory, createRouter} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router