import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Contact from "../views/Contact.vue";
import Main from "../views/Main.vue";
import Search1 from "../views/Search1.vue"

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    // {
    //   path: '/',
    //   component: Home
    // },
    // {
    //   path: '/contact',
    //   component: Contact
    // }
    {
      path: "/",
      component: Main,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/search",
      component: Search1,
    },
  ],
});

export default router;
