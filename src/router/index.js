import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

import index from '@/pages/index.vue'
import hellworld from '@/components/HelloWorld.vue'

export default new Router({
     routes: [
        { path: '/index', component: index },
        { path: '/hellworld', component: hellworld },
        { path: '/', redirect: '/index' }
    ]
})