import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import AboutMe from '@/pages/AboutMe';
import Blog from '@/pages/Blog';
import Portfolio from '@/pages/Portfolio';
import Impressum from '@/pages/Impressum';
import Rotfukspage from '@/pages/portfolio/RotfuksPage';
import WormDL from '@/pages/portfolio/WormDL';
import Falltown from '@/pages/portfolio/Falltown';
import FalltownPlay from '@/pages/portfolio/FalltownPlay';
import EsgWebsite from '@/pages/portfolio/EsgWebsite';
import Cheesal from '@/pages/portfolio/Cheesal';
import CheesalPlay from '@/pages/portfolio/CheesalPlay';

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
    {
      path: '/wormdl',
      name: 'WormDL',
      component: WormDL,
    },
    {
      path: '/falltown',
      name: 'Falltown',
      component: Falltown,
    },
    {
      path: '/falltown/play',
      name: 'FalltownPlay',
      component: FalltownPlay,
    },
    {
      path: '/esgwebsite',
      name: 'EsgWebsite',
      component: EsgWebsite,
    },
    {
      path: '/cheesal',
      name: 'Cheesal',
      component: Cheesal,
    },
    {
      path: '/cheesal/play',
      name: 'CheesalPlay',
      component: CheesalPlay,
    },
  ],
});
