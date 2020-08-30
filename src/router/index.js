import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue');
const GetStarted = () => import('../views/GetStarted.vue');
const Login = () => import('../views/Login.vue');
const SignUp = () => import('../views/SignUp.vue');
const UnknownPage = () => import('../views/UnknownPage.vue');


const routes = [
  {
    path: "/",
    name: "GetStarted",
    component: GetStarted,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/:catchAll(.*)",
    name: "UnknownPage",
    component: UnknownPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
