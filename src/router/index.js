import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from '../views/Home/Index.vue';
import Candidatos from '../views/Candidatos/Candidatos.vue';
import Configuracao from '../views/Configuracao/Configuracao.vue';
import Curriculos from '../views/Curriculos/Curriculos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Index",
    component: Index
  },
  {
    path: "/candidatos",
    name: "Candidatos",
    component: Candidatos
  },
  {
    path: "/curriculos",
    name: "Curriculos",
    component: Curriculos
  },
  {
    path: "/configuracao",
    name: "Configuracao",
    component: Configuracao
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
