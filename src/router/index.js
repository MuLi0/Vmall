import { createRouter, createWebHistory } from "vue-router";
import IndexWrap from "../components/IndexWrap.vue";

const routes = [
  {
    path: "/",
    name: "",
    component: IndexWrap,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
