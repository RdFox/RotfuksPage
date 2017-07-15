import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import AboutMe from '@/pages/AboutMe';
import TecBlog from '@/pages/TecBlog';
import BlogForm from '@/pages/BlogForm';

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
      path: '/tecblog',
      name: 'TecBlog',
      component: TecBlog,
    },
    {
      path: '/blogform',
      name: 'BlogForm',
      component: BlogForm,
    },
  ],
});
