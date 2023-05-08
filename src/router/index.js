import { createRouter, createWebHistory } from "vue-router";
import HomeTemplates from "../components/Templates/HomeTemplates/HomeTemplates.vue";
import HomeView from "../views/HomeView.vue";
import List from "../views/Product/List.vue";
import ItemBrand from "../views/Home/ItemBrand/ItemBrand.vue";
import AllProduct from "../views/Product/AllProduct.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeTemplates,
      children: [
        {
          path: "/",
          component: HomeView,
        },
        {
          path: "/product",
          component: List,
        },
        {
          path: "/:slug",
          name: "ItemBrand",
          component: ItemBrand,
        },
        {
          path: "/allproduct",
          component: AllProduct,
        },
      ],
    },
  ],
});

export default router;
