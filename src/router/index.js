import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ListStarShips from "@/components/ListStarShips";
import StarShip from "@/components/StarShip";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/films",
    name: "Films",
    component: () =>
      import(/* webpackChunkName: "films" */ "../views/Films.vue"),
  },
  {
    path: "/people",
    name: "People",
    component: () =>
      import(/* webpackChunkName: "people" */ "../views/People.vue"),
  },
  {
    path: "/planets",
    name: "Planets",
    component: () =>
      import(/* webpackChunkName: "planets" */ "../views/Planets.vue"),
  },
  {
    path: "/species",
    name: "Species",
    component: () =>
      import(/* webpackChunkName: "species" */ "../views/Species.vue"),
  },
  {
    path: "/starships",
    children: [
      {
        path: "",
        name: "Starships.list",
        component: ListStarShips,
      },
      {
        path: ":id",
        name: "Starships.detail",
        component: StarShip,
      },
    ],
    component: () =>
      import(/* webpackChunkName: "species" */ "../views/StarShips.vue"),
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    component: () =>
      import(/* webpackChunkName: "vehicles" */ "../views/Vehicles.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
