import Vue from "vue";
import VueRouter from "vue-router";
import vueEvents from "../views/vueEvents.vue";
import vueData from "../views/vueData.vue";
import start from "../views/start.vue"
import vueWatchers from "../views/vueWatchers.vue"
import vueComputedProperties from "../views/vueComputedProperties.vue"

Vue.use(VueRouter);

const routes = [
  {
path:"/",
name:"start",
component:start,
  },
  {
    path: "/vueEvents",
    name: "vueEvents",
    component: vueEvents,
  },
  {
  path:"/vueWatchers",
  name:"vueWatchers",
  component:vueWatchers,
  },
  {
    path: "/vueData",
    name: "vueData",
    component:vueData,
  },
  {
    path: "/vueComputedProperties",
    name: "ComputedProperties",
    component:vueComputedProperties,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
