import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/pages/index/Login.vue';
import home from '../views/pages/home.vue';
import navbar from "../views/pages/index/navbar.vue";
import Signup from "../views/pages/Signup.vue";

const routes =[
    {
        path: '/home',
        name: 'home_page',
        component: home,
        meta: {
            title: 'Home page'  
        }
    },
    {
        path: '/Signup',
        name: 'Signup_page',
        component: Signup,
        meta: {
            title: 'Signup page'
        },

    } ,
    {
        path: '/Login',
        name: 'Login_page',
        component: Login,
        meta: {
            title: 'Login page'
        },

    },
    {
        path: '/navbar',
        name: 'navbar_page',
        component: navbar,
        meta: {
            title: 'Navbar page'
        },

    }
];
const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition ||{left: 0, top: 0}
    }
});
router.beforeEach((to, from ,next)=> {
    // document.title = `GHASSAN Web ${to.meta.title}|site`;
    document.title = `GHASSAN web ${to.meta.title} | site`;
    next()
});
export default router;