import { createRouter, createWebHistory } from "vue-router"

import HelloWorld from "./pages/HelloWorld.vue"
import Calender from "./pages/Calender.vue"
import MarkDown from "./pages/MarkDown.vue"
import Home from "./pages/Home.vue"

const routes = [
    { path: '/helloworld', component: HelloWorld },
    { path: '/calender', component: Calender },
    { path: '/', component: Home },
    { path: '/markdown', component: MarkDown },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }

)
export default router;