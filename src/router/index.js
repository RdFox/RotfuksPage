import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import RfSite from '@/pages/Rf-Site';
import Blog from '@/pages/Blog';
import Blogdetail from '@/pages/Blogdetail';
import Portfolio from '@/pages/Portfolio';
import Impressum from '@/pages/Impressum';
import Rotfukspage from '@/pages/portfolio/RotfuksPage';
import WormDL from '@/pages/portfolio/WormDL';
import Falltown from '@/pages/portfolio/Falltown';
import EsgWebsite from '@/pages/portfolio/EsgWebsite';
import Cheesal from '@/pages/portfolio/Cheesal';

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
      component: RfSite,
      props: { siteRef: 'aboutMe' },
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blogdetail',
      name: 'Blogdetail',
      component: Blogdetail,
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
      path: '/esgwebsite',
      name: 'EsgWebsite',
      component: EsgWebsite,
    },
    {
      path: '/cheesal',
      name: 'Cheesal',
      component: Cheesal,
    },
  ],
});
