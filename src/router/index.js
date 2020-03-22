import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import { aboutPath, homePath } from "@/router/paths";

Vue.use(VueRouter);

const routes = [
  {
    path: homePath,
    name: 'Home',
    component: Home
  },
  {
    path: aboutPath,
    name: 'About',
    component: About
  }
];

const router = new VueRouter({
  routes
});

export default router;
