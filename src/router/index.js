import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import AboutMe from '@/pages/AboutMe';
import Blog from '@/pages/Blog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
  ],
});
