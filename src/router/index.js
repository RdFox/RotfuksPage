import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import AboutMe from '@/pages/AboutMe';
import Blog from '@/pages/Blog';
import Portfolio from '@/pages/Portfolio';
import Impressum from '@/pages/Impressum';
import Rotfukspage from '@/pages/portfolio/RotfuksPage';

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
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum,
    },
    {
      path: '/rotfukspage',
      name: 'Rotfukspage',
      component: Rotfukspage,
    },
  ],
});
