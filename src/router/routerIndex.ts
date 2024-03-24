import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from "../pages/homePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/helloworld",
    name: "helloworld",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
