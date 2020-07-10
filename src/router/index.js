import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Project from "../views/Project.vue"
import Deploy from "../views/Deploy.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/project",
        name: "project",
        component: Project,
    },
    {
      path: "/deploy",
      name: "deploy",
      component: Deploy,
  },
]

const router = new VueRouter({
    routes,
})

export default router
