const userRoutes = [
            {
                path: '/',
                name: 'user-view-address',
                component: () => import('./view.vue')
            },
            {
                path: '/upsert',
                name: 'user-upsert-address',
                component: () => import('./upsert.vue')
            }
]

export default userRoutes