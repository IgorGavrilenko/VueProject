import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signin from './views/Signin.vue';
import Signup from './views/Signup.vue';
import Articles from './views/Articles.vue';
import Words from './views/Words.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/articles',
            name: 'articles',
            component: Articles,
        },
        {
            path: '/words',
            name: 'words',
            component: Words,
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin,
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
        },
    ],
    mode: 'history',
});
