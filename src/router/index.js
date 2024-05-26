import {createRouter, createMemoryHistory, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Article from '@/views/article/ArticleManage.vue'

//定义路由
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/article1',
        name: 'Article',
        component: Article,
        children: [

            {
                path: '/article',
                name: 'Article',
                component: () => import('@/views/article/Article.vue')
            },

            {
                path: '/article/:id',
                name: 'ArticleDetail',
                component: () => import('@/views/article/ArticleDetail.vue')

            },
            {
                path: '/article/category',
                name: 'ArticleCategory',
                component: () => import('@/views/article/ArticleCategory.vue')
            }
        ]
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(),
})
export default router
