<template>
  <div id="rf-navbar">

    <b-navbar toggleable="md" type="dark" variant="dark" :fixed="fixed">

      <b-navbar-brand class="navbar-brand" href="/">
        <img class="navbar-img" :src="brandsrc"/>
        <div class="navbar-title">{{ brandtitle }}</div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav v-for="navbaritem in navbaritemsleft" :key="navbaritem.title">
          <template v-if="navbaritem.type === 'dropdown'">
            <b-nav-item-dropdown :text="navbaritem.title">
              <b-dopdown-item v-for="sub in navbaritem.subs" :key="sub.title" :to="sub.link">{{ sub.title }}</b-dopdown-item>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <b-nav-item :to="navbaritem.link">{{ navbaritem.title }}</b-nav-item>
          </template>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto nav-right">
          <b-nav-item right id="logout" to="#" v-on:click="logout" v-if="global.loggedIn">Logout</b-nav-item>
          <b-nav-item right id="login" to="#" v-b-modal="'rf-login-modal'" v-else>Login</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <rf-login-modal />
  </div>
</template>

<script>
import toastr from 'toastr';
import firebase from '../utils/firebase';
import global from '../utils/globalstate';

import RfLoginModal from './Rf-LoginModal';

export default {
  name: 'rf-navbar',
  components: {
    RfLoginModal,
  },
  data() {
    return {
      global,
      fixed: 'top',
      brandsrc: '/static/img/logo/rotfuks_logo.png',
      brandtitle: 'Rotfuks',
      navbaritemsleft: [
        {
          type: 'normal',
          title: 'About Me',
          link: '/aboutme',
        },
        {
          type: 'normal',
          title: 'Portfolio',
          link: '/portfolio',
        },
        {
          type: 'normal',
          title: 'Blog',
          link: '/blog',
        },
      ],
    };
  },
  methods: {
    logout: function logout() {
      firebase.auth().signOut().catch(this.logoutFail);
    },
    logoutFail: function logoutFail(error) {
      toastr.error(`Sorry! Something went wrong! Errorcode: ${error.code}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #rf-navbar {
    margin-bottom: 100px;
  }
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  .navbar-img {
    height: 35px;
    width: 40px;
    margin-right: 10px;
  }
  .navbar-title {

  }

  @media only screen and (min-width: 768px) {
    .nav-right {
      position: absolute;
      top: 5px;
      right: 20px;
    }
  }
</style>
