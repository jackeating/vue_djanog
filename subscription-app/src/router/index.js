import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({

  routes: [

    {

      path: "/",

      redirect: '/index'

    },

    {

      path: "/create",

      name: "create",

      component: () => import("../components/Create.vue")

    },

    {

      path: "/edit/:id",

      name: "edit",

      component: () => import("../components/Edit.vue")

    },

    {

      path: "/index",

      name: "index",

      component: () => import("../components/Index.vue")

    },

  ]

});

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

// export default router;
