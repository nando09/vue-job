import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Home/Index.vue";
import Vagas from "../views/Vagas/Vagas.vue";
import Candidatos from "../views/Vagas/Candidatos.vue";
import Configuracao from "../views/Configuracao/Configuracao.vue";
import Curriculos from "../views/Curriculos/Curriculos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/vagas",
    name: "Vagas",
    component: Vagas,
    children: [
        {
          path: "candidatos",
          name: "Candidatos",
          component: Candidatos
        }
    ]
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
