import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "/orderList",
          component: () => import("../components/OrderList.vue")
        },
        {
          path: "/addCount",
          component: () => import("../components/CountMs/AddCount.vue")
        }
      ]
    },
    {
      path: "/about",
      component: () => import("../views/About.vue")
    },
    {
      path: "/orderList",
      component: () => import("../components/OrderList.vue")
    }
  ]
});
