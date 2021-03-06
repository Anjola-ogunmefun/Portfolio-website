import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import ContacPage from "./components/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContacPage },
    { path: "/projects", component: ProjectPage },
  ],
});
export default router;
