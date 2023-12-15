import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Page1 from "@/views/Page1.vue";
import PageCreate from "@/views/PageCreate.vue";
import PageEdit from "@/views/PageEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/page1",
      name: "page1",
      component: Page1,
    },
    {
      path: "/create",
      name: "create",
      component: PageCreate,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: PageEdit,
    },
  ],
});

export default router;
